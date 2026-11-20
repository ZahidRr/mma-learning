-- AlterTable
ALTER TABLE "LearnerProfile" ADD COLUMN     "preferredLanguage" TEXT NOT NULL DEFAULT 'en';

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "translations" JSONB;

-- AlterTable
ALTER TABLE "LessonSession" ALTER COLUMN "targetQuestions" SET DEFAULT 12;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "translations" JSONB;

-- AlterTable
ALTER TABLE "QuestionOption" ADD COLUMN     "translations" JSONB;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "translations" JSONB;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "translations" JSONB;

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "translations" JSONB;
