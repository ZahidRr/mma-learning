var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let ProgressService = class ProgressService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserProgress(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                email: true,
                status: true,
                createdAt: true,
                learnerProfile: {
                    select: {
                        id: true,
                        displayName: true,
                        gradeLevel: true,
                        avatarKey: true,
                        totalXp: true,
                    },
                },
            },
        });
        if (!user ||
            user.status !== 'ACTIVE') {
            throw new NotFoundException('Active user not found');
        }
        if (!user.learnerProfile) {
            throw new NotFoundException('Learner profile not found');
        }
        const masteries = await this.prisma.skillMastery.findMany({
            where: {
                userId,
            },
            include: {
                skill: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        topic: {
                            select: {
                                id: true,
                                name: true,
                                gradeLevel: true,
                                subject: {
                                    select: {
                                        id: true,
                                        name: true,
                                        slug: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
        const lessonSessions = await this.prisma.lessonSession.findMany({
            where: {
                userId,
            },
            include: {
                lesson: {
                    select: {
                        id: true,
                        title: true,
                        slug: true,
                        xpReward: true,
                        skill: {
                            select: {
                                id: true,
                                name: true,
                                topic: {
                                    select: {
                                        id: true,
                                        name: true,
                                        subject: {
                                            select: {
                                                id: true,
                                                name: true,
                                                slug: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                startedAt: 'desc',
            },
        });
        const formattedMasteries = masteries.map((mastery) => ({
            skillId: mastery.skillId,
            skillName: mastery.skill.name,
            skillSlug: mastery.skill.slug,
            topic: {
                id: mastery.skill.topic.id,
                name: mastery.skill.topic.name,
                gradeLevel: mastery.skill.topic.gradeLevel,
            },
            subject: {
                id: mastery.skill.topic.subject.id,
                name: mastery.skill.topic.subject.name,
                slug: mastery.skill.topic.subject.slug,
            },
            masteryScore: Math.round(mastery.masteryScore * 100) / 100,
            totalAttempts: mastery.totalAttempts,
            correctAttempts: mastery.correctAttempts,
            updatedAt: mastery.updatedAt,
        }));
        const lessonProgress = lessonSessions.map((session) => {
            const accuracy = session.answeredQuestions > 0
                ? Math.round((session.correctAnswers /
                    session.answeredQuestions) *
                    10000) / 100
                : 0;
            return {
                sessionId: session.id,
                lesson: {
                    id: session.lesson.id,
                    title: session.lesson.title,
                    slug: session.lesson.slug,
                    xpReward: session.lesson.xpReward,
                },
                skill: {
                    id: session.lesson.skill.id,
                    name: session.lesson.skill.name,
                },
                topic: {
                    id: session.lesson.skill.topic.id,
                    name: session.lesson.skill.topic.name,
                },
                subject: {
                    id: session.lesson.skill.topic.subject.id,
                    name: session.lesson.skill.topic.subject.name,
                    slug: session.lesson.skill.topic.subject.slug,
                },
                status: session.status,
                targetQuestions: session.targetQuestions,
                answeredQuestions: session.answeredQuestions,
                correctAnswers: session.correctAnswers,
                remainingQuestions: Math.max(session.targetQuestions -
                    session.answeredQuestions, 0),
                accuracy,
                earnedXp: session.earnedXp,
                startedAt: session.startedAt,
                completedAt: session.completedAt,
            };
        });
        const completedLessons = lessonSessions.filter((session) => session.status === 'COMPLETED').length;
        const inProgressLessons = lessonSessions.filter((session) => session.status === 'IN_PROGRESS').length;
        const totalCorrectAttempts = masteries.reduce((total, mastery) => total +
            mastery.correctAttempts, 0);
        const totalAttempts = masteries.reduce((total, mastery) => total +
            mastery.totalAttempts, 0);
        const overallAccuracy = totalAttempts > 0
            ? Math.round((totalCorrectAttempts /
                totalAttempts) *
                10000) / 100
            : 0;
        const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const today = new Date();
        const weeklyActivity = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const sessionsThatDay = lessonSessions.filter(s => s.startedAt.toDateString() === d.toDateString());
            const minutes = sessionsThatDay.length * 10;
            weeklyActivity.push({
                day: daysName[d.getDay()],
                minutes: minutes,
                active: minutes > 0,
            });
        }
        const mathSessions = lessonSessions.filter(s => s.lesson.skill.topic.subject.slug === 'mathematics');
        const englishSessions = lessonSessions.filter(s => s.lesson.skill.topic.subject.slug === 'english');
        const mathCompleted = mathSessions.filter(s => s.status === 'COMPLETED').length;
        const engCompleted = englishSessions.filter(s => s.status === 'COMPLETED').length;
        const subjectPerformance = {
            math: { progress: Math.round((mathCompleted / 20) * 100), completed: mathCompleted, total: 20 },
            english: { progress: Math.round((engCompleted / 20) * 100), completed: engCompleted, total: 20 },
        };
        const daysSinceJoined = Math.floor((Date.now() - user.createdAt.getTime()) / (1000 * 3600 * 24));
        const currentStreak = Math.max(1, Math.min(daysSinceJoined, 7));
        const masteredCount = masteries.length;
        const achievements = [
            { id: 1, name: 'Math Explorer', desc: 'Master 5 math skills', iconBg: 'bg-[#2b9aff]', icon: '🏆', progress: masteredCount, target: 5, unlocked: masteredCount >= 5 },
            { id: 2, name: 'Bookworm', desc: 'Complete 10 lessons', iconBg: 'bg-[#8c52ff]', icon: '📚', progress: completedLessons, target: 10, unlocked: completedLessons >= 10 },
            { id: 3, name: 'Streak Master', desc: 'Maintain a 7-day streak', iconBg: 'bg-[#ff7c5c]', icon: '🔥', progress: currentStreak, target: 7, unlocked: currentStreak >= 7 },
            { id: 4, name: 'Word Wizard', desc: 'Learn 50 new words', iconBg: 'bg-[#4cc97f]', icon: '✨', progress: 30, target: 50, unlocked: false },
        ];
        const badgesEarned = achievements.filter(a => a.unlocked).length;
        return {
            profile: {
                userId: user.id,
                learnerProfileId: user.learnerProfile.id,
                email: user.email,
                displayName: user.learnerProfile.displayName,
                gradeLevel: user.learnerProfile.gradeLevel,
                avatarKey: user.learnerProfile.avatarKey,
                totalXp: user.learnerProfile.totalXp,
            },
            summary: {
                totalXp: user.learnerProfile.totalXp,
                totalAttempts,
                totalCorrectAttempts,
                overallAccuracy,
                completedLessons,
                inProgressLessons,
                masteredSkills: masteries.length,
                currentStreak,
                badgesEarned,
            },
            masteries: formattedMasteries,
            lessonProgress,
            dashboardAnalytics: {
                weeklyActivity,
                subjectPerformance,
                achievements,
            }
        };
    }
};
ProgressService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ProgressService);
export { ProgressService };
//# sourceMappingURL=progress.service.js.map