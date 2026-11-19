import { ProgressService } from './progress.service.js';
export declare class ProgressController {
    private readonly progressService;
    constructor(progressService: ProgressService);
    getUserProgress(userId: string): Promise<{
        profile: {
            userId: string;
            learnerProfileId: string;
            email: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
            totalXp: number;
        };
        summary: {
            totalXp: number;
            totalAttempts: number;
            totalCorrectAttempts: number;
            overallAccuracy: number;
            completedLessons: number;
            inProgressLessons: number;
            masteredSkills: number;
            currentStreak: number;
            badgesEarned: number;
        };
        masteries: {
            skillId: string;
            skillName: string;
            skillSlug: string;
            topic: {
                id: string;
                name: string;
                gradeLevel: number;
            };
            subject: {
                id: string;
                name: string;
                slug: string;
            };
            masteryScore: number;
            totalAttempts: number;
            correctAttempts: number;
            updatedAt: Date;
        }[];
        lessonProgress: {
            sessionId: string;
            lesson: {
                id: string;
                title: string;
                slug: string;
                xpReward: number;
            };
            skill: {
                id: string;
                name: string;
            };
            topic: {
                id: string;
                name: string;
            };
            subject: {
                id: string;
                name: string;
                slug: string;
            };
            status: import("../generated/prisma/enums.js").LessonSessionStatus;
            targetQuestions: number;
            answeredQuestions: number;
            correctAnswers: number;
            remainingQuestions: number;
            accuracy: number;
            earnedXp: number;
            startedAt: Date;
            completedAt: Date | null;
        }[];
        dashboardAnalytics: {
            weeklyActivity: {
                day: string;
                minutes: number;
                active: boolean;
            }[];
            subjectPerformance: {
                math: {
                    progress: number;
                    completed: number;
                    total: number;
                };
                english: {
                    progress: number;
                    completed: number;
                    total: number;
                };
            };
            achievements: {
                id: number;
                name: string;
                desc: string;
                iconBg: string;
                icon: string;
                progress: number;
                target: number;
                unlocked: boolean;
            }[];
        };
    }>;
}
