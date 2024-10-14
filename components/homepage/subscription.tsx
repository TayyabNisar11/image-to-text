"use client";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";
import { supabase } from "@/utils/supabase/client";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import axios from "axios";
import { getSubscriptionPlans } from "@/actions/subscription_plans";
import { useRouter } from "next/navigation";

export type Plan = {
  id: number;
  name: string;
  amount: string;
  interval: string;
  plan_features?: string[];
  stripe_price_id: string;
  recurring: boolean;
};

const SubscriptionCard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(plans[0]);
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null);
  const { user } = useUser();

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    (async () => {
      const { data, error } = await getSubscriptionPlans();
      if (!error) {
        const structured = data.map((plan) => ({
          ...plan,
          plan_features: [
            `${plan.plan_features[0].max_images_at_once} Images at Once`,
            `Image Size ${plan.plan_features[0].max_image_size}MB`,
            `${plan.plan_features[0].max_images} Images`,
            plan.plan_features[0].support ? "24/7 Support" : "No Support",
            plan.plan_features[0].advertisement ? "Ads Included" : "No Ads",
            `${plan.plan_features[0].response_rate}X Faster`,
          ],
        }));
        setPlans(structured);
        setSelectedPlan(structured[0]);
      } else {
        toast("Failed to load subscriptions");
      }
    })();
  }, []);

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!));
  }, []);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      if (user?.id) {
        const { data } = await axios.post(
          `/api/payments/create-checkout-session`,
          {
            userId: user?.id,
            email: user?.emailAddresses?.[0]?.emailAddress,
            priceId: selectedPlan?.stripe_price_id,
            subscription: selectedPlan?.recurring,
            subscriptionId: selectedPlan?.id,
          }
        );

        if (data.sessionId) {
          const stripe = await stripePromise;

          const response = await stripe?.redirectToCheckout({
            sessionId: data.sessionId,
          });
          setLoading(false);

          return response;
        } else {
          console.error("Failed to create checkout session");
          toast("Failed to create checkout session");
          setLoading(false);
          return;
        }
      } else {
        toast("Please login or sign up to purchase", {
          description: "You must be logged in to make a purchase",
          action: {
            label: "Sign Up",
            onClick: () => {
              router.push("/sign-up");
            },
          },
        });
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast("Error during checkout");
      return;
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col space-y-6 bg-background-light border border-gray-200 rounded-lg  overflow-hidden p-6 ">
      <div>
        <h2 className="text-2xl font-bold text-center">Pro Membership</h2>
        <p className="text-gray-600 text-center ">
          Unlock all premium features
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 ">
        {plans.map((plan) => (
          <div
            key={plan.interval}
            onClick={() => handlePlanClick(plan)}
            className={`p-4 border-2 rounded-lg cursor-pointer text-center ${
              selectedPlan?.interval === plan.interval
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            }`}
          >
            <p className="text-lg font-semibold">${plan.amount}</p>
            <p className="text-sm">{plan.name}</p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="">
          <h3 className="text-lg font-semibold ">Features</h3>
          <ul className="list-none grid grid-cols-2 space-y-2">
            {selectedPlan?.plan_features?.map((feature, index) => (
              <li key={index} className="flex text-sm items-center">
                <span className="w-5 h-5 flex  items-center justify-center rounded-full bg-green-500 text-white mr-2">
                  <CheckIcon className="w-4 h-34" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        disabled={loading}
        onClick={handleCheckout}
        className="w-full bg-gray-900 text-white hover:bg-gray-900/90"
      >
        Upgrade Now
      </Button>
    </div>
  );
};

export default SubscriptionCard;
