import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { StartLessonSessionDto } from './dto/start-lesson-session.dto.js';

type RecordAttemptInput = {
  sessionId: string;
  userId: string;
  lessonId: string;
  isCorrect: boolean;
};

type SupportedLocale = 'en' | 'id' | 'zh';

function resolveLocalizedName(
  fallback: string,
  translations: unknown,
  locale: SupportedLocale,
  key: 'name' | 'title' = 'name',
): string {
  if (locale === 'en' || !translations || typeof translations !== 'object') {
    return fallback;
  }
  const byLang = (translations as Record<string, Record<string, unknown>>)[locale];
  const val = byLang?.[key];
  return typeof val === 'string' && val.trim().length > 0 ? val : fallback;
}

@Injectable()
export class LessonSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  // =====================================================
  // START / RESUME SESSION
  // =====================================================

  async startSession(dto: StartLessonSessionDto) {
    // =====================================================
    // 1. CHECK ACTIVE USER
    // =====================================================

    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
      select: {
        id: true,
        status: true,
        learnerProfile: {
          select: { preferredLanguage: true },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE') {
      throw new NotFoundException('Active user not found');
    }

    const rawLang = user.learnerProfile?.preferredLanguage;
    const locale: SupportedLocale = rawLang === 'id' || rawLang === 'zh' ? rawLang : 'en';

    // =====================================================
    // 2. CHECK PUBLISHED LESSON & FETCH TOPIC RELATION
    // =====================================================

    const lesson = await this.prisma.lesson.findFirst({
      where: {
        id: dto.lessonId,
        status: 'PUBLISHED',
      },
      select: {
        id: true,
        title: true,
        description: true,
        translations: true,
        xpReward: true,
        skillId: true,
        skill: {
          select: {
            topic: {
              select: {
                name: true,
                slug: true,
                translations: true,
              },
            },
          },
        },
      },
    });

    if (!lesson) {
      throw new NotFoundException('Published lesson not found');
    }

    // =====================================================
    // FORMAT LESSON DATA UNTUK FRONTEND
    // =====================================================

    const localizedTopicName = lesson.skill?.topic
      ? resolveLocalizedName(
          lesson.skill.topic.name,
          lesson.skill.topic.translations,
          locale,
          'name',
        )
      : resolveLocalizedName(lesson.title, lesson.translations, locale, 'title');

    const frontendLessonData = {
      id: lesson.id,
      title: localizedTopicName,
      description: lesson.description,
      xpReward: lesson.xpReward,
      bgImageKey: lesson.skill?.topic?.slug
        ? `${lesson.skill.topic.slug.replace(/-/g, '')}bg.png`
        : 'countingmeadowbg.png',
    };

    // =====================================================
    // 3. CHECK EXISTING SESSION
    // =====================================================

    const existingSession = await this.prisma.lessonSession.findFirst({
      where: {
        userId: dto.userId,
        lessonId: dto.lessonId,
        status: 'IN_PROGRESS',
      },
      orderBy: { startedAt: 'desc' },
    });

    if (existingSession) {
      return {
        message: 'Existing lesson session resumed.',
        session: this.buildSessionResponse(existingSession),
        lesson: frontendLessonData,
      };
    }

    // =====================================================
    // 4. CREATE NEW SESSION (12 QUESTIONS PER SESSION)
    // =====================================================

    const session = await this.prisma.lessonSession.create({
      data: {
        userId: dto.userId,
        lessonId: dto.lessonId,
        targetQuestions: 12,
        answeredQuestions: 0,
        correctAnswers: 0,
        earnedXp: 0,
        status: 'IN_PROGRESS',
      },
    });

    return {
      message: 'Lesson session started.',
      session: this.buildSessionResponse(session),
      lesson: frontendLessonData,
    };
  }

  // =====================================================
  // VALIDATE SESSION BEFORE ATTEMPT
  // =====================================================

  async validateSessionForAttempt(input: {
    sessionId: string;
    userId: string;
    lessonId: string;
  }) {
    const session = await this.prisma.lessonSession.findUnique({
      where: { id: input.sessionId },
    });

    if (!session) {
      throw new NotFoundException('Lesson session not found');
    }

    if (session.userId !== input.userId) {
      throw new BadRequestException('Lesson session does not belong to this user');
    }

    if (session.lessonId !== input.lessonId) {
      throw new BadRequestException('Question does not belong to this lesson session');
    }

    if (session.status !== 'IN_PROGRESS') {
      throw new BadRequestException('Lesson session is not in progress');
    }

    if (session.answeredQuestions >= session.targetQuestions) {
      throw new BadRequestException('Lesson session has reached its question limit');
    }

    return session;
  }

  // =====================================================
  // UPDATE SESSION AFTER ATTEMPT
  // =====================================================

  async recordAttempt(input: RecordAttemptInput) {
    const session = await this.validateSessionForAttempt({
      sessionId: input.sessionId,
      userId: input.userId,
      lessonId: input.lessonId,
    });

    const lesson = await this.prisma.lesson.findUnique({
      where: { id: input.lessonId },
      select: { id: true, xpReward: true },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    const answeredQuestions = session.answeredQuestions + 1;
    const correctAnswers = session.correctAnswers + (input.isCorrect ? 1 : 0);
    const isCompleted = answeredQuestions >= session.targetQuestions;

    if (!isCompleted) {
      const updatedSession = await this.prisma.lessonSession.update({
        where: { id: session.id },
        data: { answeredQuestions, correctAnswers },
      });

      const learnerProfile = await this.prisma.learnerProfile.findUnique({
        where: { userId: input.userId },
        select: { totalXp: true },
      });

      return {
        ...this.buildSessionResponse(updatedSession),
        justCompleted: false,
        accuracy: this.calculateAccuracy(correctAnswers, answeredQuestions),
        totalXp: learnerProfile?.totalXp ?? 0,
      };
    }

    const completedAt = new Date();

    const [updatedSession, updatedLearnerProfile] = await this.prisma.$transaction([
      this.prisma.lessonSession.update({
        where: { id: session.id },
        data: {
          answeredQuestions,
          correctAnswers,
          status: 'COMPLETED',
          earnedXp: lesson.xpReward,
          completedAt,
        },
      }),

      this.prisma.learnerProfile.update({
        where: { userId: input.userId },
        data: {
          totalXp: { increment: lesson.xpReward },
        },
        select: { id: true, userId: true, totalXp: true },
      }),
    ]);

    return {
      ...this.buildSessionResponse(updatedSession),
      justCompleted: true,
      accuracy: this.calculateAccuracy(correctAnswers, answeredQuestions),
      xpAwarded: lesson.xpReward,
      totalXp: updatedLearnerProfile.totalXp,
    };
  }

  // =====================================================
  // CALCULATE ACCURACY
  // =====================================================

  private calculateAccuracy(correctAnswers: number, answeredQuestions: number) {
    if (answeredQuestions === 0) return 0;
    return Math.round((correctAnswers / answeredQuestions) * 10000) / 100;
  }

  // =====================================================
  // SESSION RESPONSE FORMATTER
  // =====================================================

  private buildSessionResponse(session: {
    id: string;
    userId: string;
    lessonId: string;
    targetQuestions: number;
    answeredQuestions: number;
    correctAnswers: number;
    earnedXp: number;
    status: 'IN_PROGRESS' | 'COMPLETED' | 'ABANDONED';
    startedAt: Date;
    completedAt: Date | null;
  }) {
    return {
      id: session.id,
      userId: session.userId,
      lessonId: session.lessonId,
      targetQuestions: session.targetQuestions,
      answeredQuestions: session.answeredQuestions,
      correctAnswers: session.correctAnswers,
      remainingQuestions: Math.max(session.targetQuestions - session.answeredQuestions, 0),
      earnedXp: session.earnedXp,
      status: session.status,
      startedAt: session.startedAt,
      completedAt: session.completedAt,
    };
  }
}