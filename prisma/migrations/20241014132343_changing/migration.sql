/*
  Warnings:

  - You are about to drop the column `plan_id` on the `subscriptions_plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subscriptions_plans" DROP COLUMN "plan_id",
ADD COLUMN     "recurring" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "stripe_price_id" TEXT;
