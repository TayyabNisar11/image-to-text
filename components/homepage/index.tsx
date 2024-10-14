"use client";
import OCRPage from "@/components/OCRPage";
import HowItWorks from "@/components/homepage/how-it-works";
import BlogSample from "@/components/homepage/blog-samples";
import Features from "@/components/homepage/features";
import Subscrptions, { Plan } from "@/components/homepage/subscription";
import { useEffect, useState } from "react";
import { getUserActiveSubscriptions } from "@/actions/subscriptions";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import Pricing from "./pricing";

export default function Home() {
  const [isUserSubscriptions, setIsUserSubscriptions] = useState(false);
  const [userSubscription, setUserSubscription] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log({ user });
      if (user) {
        const { data, error } = await getUserActiveSubscriptions(user.id);
        if (error) {
          toast("Error getting user subscriptions");
        } else if (data) {
          setIsUserSubscriptions(data.length > 0);
          setUserSubscription(data[0]);
        }
      } else {
        console.log({ user });
        setIsUserSubscriptions(false);
        setUserSubscription(undefined);
      }
      setLoading(false);
    })();
  }, [user]);

  return (
    <>
      <div className="container mx-auto items-center w-full mt-[1rem] p-3">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Image to Text Converter
        </h1>
        <h2 className="text-lime-950 mb-8 text-center">
          Convert JPG, PNG, and more into editable text with our free Image to
          Text Converter. Easily handle multiple images at once and get accurate
          results.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div
            className={`${
              !isUserSubscriptions && !loading ? "col-span-2" : "col-span-3"
            }`}
          >
            <OCRPage subscription={userSubscription} />
          </div>
          {!isUserSubscriptions && !loading && (
            <div className=" py-8 lg:col-span-1">
              <Subscrptions />
            </div>
          )}
        </div>
      </div>
      <div className=" bg-gray-50 mt-[1rem] p-3">
        <HowItWorks />
      </div>
      <div className=" container mx-auto mt-[1rem] p-3">
        <Features />
      </div>
      <div className="bg-gray-50 mt-[1rem] p-3 mb-10">
        <BlogSample />
      </div>
      {/* <Pricing /> */}
    </>
  );
}
