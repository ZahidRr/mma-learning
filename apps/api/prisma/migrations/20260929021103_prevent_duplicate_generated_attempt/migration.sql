/*
  Warnings:

  - A unique constraint covering the columns `[generatedQuestionId]` on the table `QuestionAttempt` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "QuestionAttempt_generatedQuestionId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAttempt_generatedQuestionId_key" ON "QuestionAttempt"("generatedQuestionId");
