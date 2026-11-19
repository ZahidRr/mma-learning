import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { AdaptiveService } from '../adaptive/adaptive.service.js';
import { LessonSessionsService } from '../lesson-sessions/lesson-sessions.service.js';
import { MasteryService } from '../mastery/mastery.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

import { SubmitAnswerDto } from './dto/submit-answer.dto.js';

@Injectable()
export class AttemptsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly masteryService: MasteryService,
    private readonly adaptiveService: AdaptiveService,
    private readonly lessonSessionsService: LessonSessionsService,
  ) {}

  async submitAnswer(
    dto: SubmitAnswerDto,
  ) {
    // =====================================================
    // 1. GET QUESTION DELIVERY
    // =====================================================

    const delivery =
      await this.prisma.questionDelivery.findUnique({
        where: {
          id: dto.deliveryId,
        },

        include: {
          lessonSession: true,

          generatedQuestion: true,

          attempt: {
            select: {
              id: true,
            },
          },

          question: {
            include: {
              options: true,
            },
          },
        },
      });

    if (!delivery) {
      throw new NotFoundException(
        'Question delivery not found',
      );
    }

    // =====================================================
    // 2. PREVENT DUPLICATE SUBMISSION
    // =====================================================

    if (
      delivery.status !== 'PRESENTED' ||
      delivery.attempt
    ) {
      throw new ConflictException(
        'This question has already been answered',
      );
    }

    const session =
      delivery.lessonSession;

    const question =
      delivery.question;

    // =====================================================
    // 3. CHECK ACTIVE USER
    // =====================================================

    const user =
      await this.prisma.user.findUnique({
        where: {
          id: session.userId,
        },

        select: {
          id: true,
          status: true,
        },
      });

    if (
      !user ||
      user.status !== 'ACTIVE'
    ) {
      throw new NotFoundException(
        'Active user not found',
      );
    }

    // =====================================================
    // 4. VALIDATE LESSON SESSION
    // =====================================================

    await this.lessonSessionsService.validateSessionForAttempt({
      sessionId:
        session.id,

      userId:
        session.userId,

      lessonId:
        question.lessonId,
    });

    // =====================================================
    // 5. VALIDATE ANSWER
    // =====================================================

    let correct = false;

    let explanation =
      question.explanation;

    // -----------------------------------------------------
    // PARAMETERIZED QUESTION
    // -----------------------------------------------------

    if (
      question.source === 'PARAMETERIZED'
    ) {
      const generatedQuestion =
        delivery.generatedQuestion;

      if (!generatedQuestion) {
        throw new BadRequestException(
          'Generated question is missing from this delivery',
        );
      }

      correct =
        dto.answer.trim() ===
        generatedQuestion.correctAnswer.trim();

      explanation =
        `${generatedQuestion.prompt} = ${generatedQuestion.correctAnswer}`;
    }

    // -----------------------------------------------------
    // FIXED MULTIPLE CHOICE
    // -----------------------------------------------------

    else if (
      question.type === 'MULTIPLE_CHOICE'
    ) {
      const selectedOption =
        question.options.find(
          (option) =>
            option.id === dto.answer,
        );

      if (!selectedOption) {
        throw new BadRequestException(
          'Invalid answer option',
        );
      }

      correct =
        selectedOption.isCorrect;
    }

    // -----------------------------------------------------
    // FIXED SHORT ANSWER
    // -----------------------------------------------------

    else if (
      question.type === 'SHORT_ANSWER'
    ) {
      const config =
        question.answerConfig as
          | {
              acceptedAnswers?: string[];
              caseSensitive?: boolean;
            }
          | null;

      if (
        !config?.acceptedAnswers ||
        config.acceptedAnswers.length === 0
      ) {
        throw new BadRequestException(
          'This question does not have valid answer configuration',
        );
      }

      const caseSensitive =
        config.caseSensitive ?? false;

      const submittedAnswer =
        dto.answer.trim();

      correct =
        config.acceptedAnswers.some(
          (acceptedAnswer) => {
            const expectedAnswer =
              acceptedAnswer.trim();

            if (caseSensitive) {
              return (
                expectedAnswer ===
                submittedAnswer
              );
            }

            return (
              expectedAnswer.toLowerCase() ===
              submittedAnswer.toLowerCase()
            );
          },
        );
    }

    // =====================================================
    // 6. SAVE QUESTION ATTEMPT
    // =====================================================

    let attempt;

    try {
      attempt =
        await this.prisma.questionAttempt.create({
          data: {
            userId:
              session.userId,

            questionId:
              question.id,

            lessonSessionId:
              session.id,

            generatedQuestionId:
              delivery.generatedQuestionId,

            deliveryId:
              delivery.id,

            answer:
              dto.answer,

            isCorrect:
              correct,

            timeSpent:
              dto.timeSpent ?? null,
          },
        });
    } catch (error) {
      // A unique constraint on deliveryId provides the
      // database-level protection if two requests arrive
      // nearly at the same time.

      const existingAttempt =
        await this.prisma.questionAttempt.findUnique({
          where: {
            deliveryId:
              delivery.id,
          },
        });

      if (existingAttempt) {
        throw new ConflictException(
          'This question has already been answered',
        );
      }

      throw error;
    }

    // =====================================================
    // 7. MARK DELIVERY AS ANSWERED
    // =====================================================

    await this.prisma.questionDelivery.update({
      where: {
        id: delivery.id,
      },

      data: {
        status:
          'ANSWERED',

        answeredAt:
          new Date(),
      },
    });

    // =====================================================
    // 8. UPDATE SKILL MASTERY
    // =====================================================

    const mastery =
      await this.masteryService.updateSkillMastery({
        userId:
          session.userId,

        skillId:
          question.skillId,

        isCorrect:
          correct,
      });

    // =====================================================
    // 9. UPDATE LESSON SESSION
    // =====================================================

    const updatedSession =
      await this.lessonSessionsService.recordAttempt({
        sessionId:
          session.id,

        userId:
          session.userId,

        lessonId:
          question.lessonId,

        isCorrect:
          correct,
      });

    // =====================================================
    // 10. CALCULATE NEW ADAPTIVE DIFFICULTY
    // =====================================================

    const adaptive =
      await this.adaptiveService.getAdaptiveDifficulty({
        userId:
          session.userId,

        skillId:
          question.skillId,
      });

    // =====================================================
    // 11. RESPONSE
    // =====================================================

    return {
      attemptId:
        attempt.id,

      deliveryId:
        delivery.id,

      correct,

      explanation,

      message: correct
        ? 'Correct answer!'
        : 'Incorrect answer.',

      mastery,

      adaptive,

      session:
        updatedSession,

      lessonCompleted:
        updatedSession.justCompleted,
    };
  }
}