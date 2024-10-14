import { createBrowserClient } from "@supabase/ssr";

const createSupabaseClientSide = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY as string
  );
};

export const supabase = createSupabaseClientSide();
