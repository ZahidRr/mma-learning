/*
  Warnings:

  - A unique constraint covering the columns `[deliveryId]` on the table `QuestionAttempt` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "QuestionDeliveryStatus" AS ENUM ('PRESENTED', 'ANSWERED', 'EXPIRED');

-- AlterTable
ALTER TABLE "QuestionAttempt" ADD COLUMN     "deliveryId" TEXT;

-- CreateTable
CREATE TABLE "QuestionDelivery" (
    "id" TEXT NOT NULL,
    "lessonSessionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "generatedQuestionId" TEXT,
    "status" "QuestionDeliveryStatus" NOT NULL DEFAULT 'PRESENTED',
    "presentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answeredAt" TIMESTAMP(3),

    CONSTRAINT "QuestionDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionDelivery_generatedQuestionId_key" ON "QuestionDelivery"("generatedQuestionId");

-- CreateIndex
CREATE INDEX "QuestionDelivery_lessonSessionId_idx" ON "QuestionDelivery"("lessonSessionId");

-- CreateIndex
CREATE INDEX "QuestionDelivery_questionId_idx" ON "QuestionDelivery"("questionId");

-- CreateIndex
CREATE INDEX "QuestionDelivery_status_idx" ON "QuestionDelivery"("status");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAttempt_deliveryId_key" ON "QuestionAttempt"("deliveryId");

-- AddForeignKey
ALTER TABLE "QuestionDelivery" ADD CONSTRAINT "QuestionDelivery_lessonSessionId_fkey" FOREIGN KEY ("lessonSessionId") REFERENCES "LessonSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionDelivery" ADD CONSTRAINT "QuestionDelivery_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionDelivery" ADD CONSTRAINT "QuestionDelivery_generatedQuestionId_fkey" FOREIGN KEY ("generatedQuestionId") REFERENCES "GeneratedQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAttempt" ADD CONSTRAINT "QuestionAttempt_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "QuestionDelivery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
