export declare const UserRole: {
    readonly STUDENT: "STUDENT";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const ContentStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];
export declare const QuestionType: {
    readonly MULTIPLE_CHOICE: "MULTIPLE_CHOICE";
    readonly SHORT_ANSWER: "SHORT_ANSWER";
};
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
export declare const QuestionSource: {
    readonly FIXED: "FIXED";
    readonly PARAMETERIZED: "PARAMETERIZED";
};
export type QuestionSource = (typeof QuestionSource)[keyof typeof QuestionSource];
export declare const QuestionFormat: {
    readonly STANDARD: "STANDARD";
    readonly WORD_PROBLEM: "WORD_PROBLEM";
};
export type QuestionFormat = (typeof QuestionFormat)[keyof typeof QuestionFormat];
export declare const DifficultyLevel: {
    readonly EASY: "EASY";
    readonly MEDIUM: "MEDIUM";
    readonly HARD: "HARD";
};
export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel];
export declare const LessonSessionStatus: {
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly ABANDONED: "ABANDONED";
};
export type LessonSessionStatus = (typeof LessonSessionStatus)[keyof typeof LessonSessionStatus];
export declare const QuestionDeliveryStatus: {
    readonly PRESENTED: "PRESENTED";
    readonly ANSWERED: "ANSWERED";
    readonly EXPIRED: "EXPIRED";
};
export type QuestionDeliveryStatus = (typeof QuestionDeliveryStatus)[keyof typeof QuestionDeliveryStatus];
