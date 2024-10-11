"use client";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import { UserProfile } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
  const router = useRouter();

  if (!config?.auth?.enabled) {
    router.back();
  }
  return (
    <div>
      <div className="h-full flex items-center justify-center p-9">
        {config?.auth?.enabled && (
          <UserProfile path="/user-profile" routing="path" />
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
