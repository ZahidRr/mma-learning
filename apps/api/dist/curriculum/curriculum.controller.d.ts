import { CurriculumService } from './curriculum.service.js';
export declare class CurriculumController {
    private readonly curriculumService;
    constructor(curriculumService: CurriculumService);
    getCurriculum(): Promise<{
        id: string;
        name: string;
        code: string;
        description: string | null;
    } | null>;
    getSubjects(): Promise<{
        id: string;
        name: string;
        description: string | null;
        slug: string;
        iconKey: string | null;
        orderIndex: number;
    }[]>;
    getTopics(subjectId: string, gradeLevel?: number): Promise<{
        id: string;
        gradeLevel: number;
        name: string;
        description: string | null;
        slug: string;
        orderIndex: number;
    }[]>;
    getSkills(topicId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        slug: string;
        orderIndex: number;
    }[]>;
    getLessons(skillId: string): Promise<{
        id: string;
        description: string | null;
        slug: string;
        orderIndex: number;
        title: string;
        xpReward: number;
    }[]>;
}
