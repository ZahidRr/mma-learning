import { StartLessonSessionDto } from './dto/start-lesson-session.dto.js';
import { LessonSessionsService } from './lesson-sessions.service.js';
export declare class LessonSessionsController {
    private readonly lessonSessionsService;
    constructor(lessonSessionsService: LessonSessionsService);
    startSession(dto: StartLessonSessionDto): Promise<{
        message: string;
        session: {
            id: string;
            userId: string;
            lessonId: string;
            targetQuestions: number;
            answeredQuestions: number;
            correctAnswers: number;
            remainingQuestions: number;
            earnedXp: number;
            status: "IN_PROGRESS" | "COMPLETED" | "ABANDONED";
            startedAt: Date;
            completedAt: Date | null;
        };
        lesson: {
            id: string;
            title: string;
            description: string | null;
            xpReward: number;
            bgImageKey: string;
        };
    }>;
}
