import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

export type AdaptiveDifficulty =
  | 'EASY'
  | 'MEDIUM'
  | 'HARD';

type GetAdaptiveDifficultyInput = {
  userId: string;
  skillId: string;
};

@Injectable()
export class AdaptiveService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getAdaptiveDifficulty(
    input: GetAdaptiveDifficultyInput,
  ) {
    // ==========================================
    // 1. GET CURRENT MASTERY
    // ==========================================

    const mastery =
      await this.prisma.skillMastery.findUnique({
        where: {
          userId_skillId: {
            userId: input.userId,
            skillId: input.skillId,
          },
        },
      });

    const overallMastery =
      mastery?.masteryScore ?? 0;

    // ==========================================
    // 2. GET 5 MOST RECENT ATTEMPTS
    // ==========================================

    const recentAttempts =
      await this.prisma.questionAttempt.findMany({
        where: {
          userId: input.userId,

          question: {
            skillId: input.skillId,
          },
        },

        select: {
          isCorrect: true,
        },

        orderBy: {
          createdAt: 'desc',
        },

        take: 5,
      });

    // ==========================================
    // 3. CALCULATE RECENT PERFORMANCE
    // ==========================================

    const recentCorrectAttempts =
      recentAttempts.filter(
        (attempt) => attempt.isCorrect,
      ).length;

    const recentPerformance =
      recentAttempts.length > 0
        ? (
            recentCorrectAttempts /
            recentAttempts.length
          ) *
          100
        : overallMastery;

    // ==========================================
    // 4. CALCULATE ADAPTIVE SCORE
    // ==========================================

    const adaptiveScore =
      overallMastery * 0.4 +
      recentPerformance * 0.6;

    // ==========================================
    // 5. DETERMINE TARGET DIFFICULTY
    // ==========================================

    const targetDifficulty =
      this.getDifficultyFromScore(
        adaptiveScore,
      );

    return {
      skillId: input.skillId,

      overallMastery:
        this.roundScore(overallMastery),

      recentPerformance:
        this.roundScore(
          recentPerformance,
        ),

      recentAttempts:
        recentAttempts.length,

      adaptiveScore:
        this.roundScore(adaptiveScore),

      targetDifficulty,
    };
  }

  private getDifficultyFromScore(
    score: number,
  ): AdaptiveDifficulty {
    if (score >= 80) {
      return 'HARD';
    }

    if (score >= 50) {
      return 'MEDIUM';
    }

    return 'EASY';
  }

  private roundScore(
    score: number,
  ) {
    return (
      Math.round(score * 100) / 100
    );
  }
}