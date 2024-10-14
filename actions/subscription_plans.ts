import { supabase } from "@/utils/supabase/client";

export const getSubscriptionPlans = async () => {
  return await supabase
    .from("subscriptions_plans")
    .select(
      "*, plan_features(plan_id, support, max_images, response_rate, advertisement, max_image_size, max_images_at_once)"
    );
};

export const getSubscriptionPlanById = async (planId: string) => {
  return await supabase
    .from("subscriptions_plans")
    .select(
      "*, plan_features(plan_id, support, max_images, response_rate, advertisement, max_image_size, max_images_at_once)"
    )
    .eq("id", planId)
    .single();
};
