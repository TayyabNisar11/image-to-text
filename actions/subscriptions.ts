import { supabase } from "@/utils/supabase/client";

const SUBSCRIPTION_TABLE = "subscriptions";

export const getUserActiveSubscriptions = async (userId: string) => {
  const { data, error } = await supabase
    .from(SUBSCRIPTION_TABLE)
    .select("*")
    .eq("user_id", userId)
    .eq("status", "active");
  return { error, data };
};


