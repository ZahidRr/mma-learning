/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template` to the `QuestionTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuestionTemplate" ADD COLUMN     "template" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_code_key" ON "Question"("code");
