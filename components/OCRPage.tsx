"use client";
import OCRUploader from "@/components/OCRUploader";
import { Plan } from "./homepage/subscription";
import { useEffect, useState } from "react";
import { getSubscriptionPlanById } from "@/actions/subscription_plans";

export default function OCRPage({ subscription }: { subscription: any }) {
  const [plan, setPlan] = useState<Plan | undefined>(undefined);

  useEffect(() => {
    if (subscription) {
      (async () => {
        const { data, error } = await getSubscriptionPlanById(
          subscription.plan_id
        );
        if (!error) {
          setPlan(data);
        }
      })();
    }
  }, [subscription]);

  return (
    <div className="container mx-auto px-4 py-8">
      <OCRUploader plan={plan} />
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <h2 className="text-lg font-semibold mb-2">Tips for Best Results:</h2>
        <ul className="list-disc list-inside">
          <li>Ensure good lighting when taking a photo of the text</li>
          <li>Capture the entire text area in the image</li>
          <li>Avoid shadows and glare on the text</li>
          <li>Keep the camera steady to avoid blurry images</li>
          <li>
            For best results, use high-contrast text (e.g., black text on white
            background)
          </li>
        </ul>
      </div>
    </div>
  );
}
