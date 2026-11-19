import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly LearnerProfile: "LearnerProfile";
    readonly Curriculum: "Curriculum";
    readonly Subject: "Subject";
    readonly Topic: "Topic";
    readonly Skill: "Skill";
    readonly Lesson: "Lesson";
    readonly Question: "Question";
    readonly QuestionOption: "QuestionOption";
    readonly QuestionTemplate: "QuestionTemplate";
    readonly GeneratedQuestion: "GeneratedQuestion";
    readonly QuestionDelivery: "QuestionDelivery";
    readonly QuestionAttempt: "QuestionAttempt";
    readonly SkillMastery: "SkillMastery";
    readonly LessonSession: "LessonSession";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const LearnerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly displayName: "displayName";
    readonly gradeLevel: "gradeLevel";
    readonly avatarKey: "avatarKey";
    readonly totalXp: "totalXp";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LearnerProfileScalarFieldEnum = (typeof LearnerProfileScalarFieldEnum)[keyof typeof LearnerProfileScalarFieldEnum];
export declare const CurriculumScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CurriculumScalarFieldEnum = (typeof CurriculumScalarFieldEnum)[keyof typeof CurriculumScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly curriculumId: "curriculumId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly iconKey: "iconKey";
    readonly orderIndex: "orderIndex";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const TopicScalarFieldEnum: {
    readonly id: "id";
    readonly subjectId: "subjectId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly gradeLevel: "gradeLevel";
    readonly orderIndex: "orderIndex";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly topicId: "topicId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly orderIndex: "orderIndex";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly skillId: "skillId";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly orderIndex: "orderIndex";
    readonly xpReward: "xpReward";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const QuestionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly lessonId: "lessonId";
    readonly skillId: "skillId";
    readonly type: "type";
    readonly source: "source";
    readonly format: "format";
    readonly difficulty: "difficulty";
    readonly prompt: "prompt";
    readonly explanation: "explanation";
    readonly answerConfig: "answerConfig";
    readonly orderIndex: "orderIndex";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum];
export declare const QuestionOptionScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly text: "text";
    readonly isCorrect: "isCorrect";
    readonly orderIndex: "orderIndex";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuestionOptionScalarFieldEnum = (typeof QuestionOptionScalarFieldEnum)[keyof typeof QuestionOptionScalarFieldEnum];
export declare const QuestionTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly template: "template";
    readonly generatorKey: "generatorKey";
    readonly config: "config";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuestionTemplateScalarFieldEnum = (typeof QuestionTemplateScalarFieldEnum)[keyof typeof QuestionTemplateScalarFieldEnum];
export declare const GeneratedQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly prompt: "prompt";
    readonly correctAnswer: "correctAnswer";
    readonly variables: "variables";
    readonly createdAt: "createdAt";
};
export type GeneratedQuestionScalarFieldEnum = (typeof GeneratedQuestionScalarFieldEnum)[keyof typeof GeneratedQuestionScalarFieldEnum];
export declare const QuestionDeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly lessonSessionId: "lessonSessionId";
    readonly questionId: "questionId";
    readonly generatedQuestionId: "generatedQuestionId";
    readonly status: "status";
    readonly presentedAt: "presentedAt";
    readonly answeredAt: "answeredAt";
};
export type QuestionDeliveryScalarFieldEnum = (typeof QuestionDeliveryScalarFieldEnum)[keyof typeof QuestionDeliveryScalarFieldEnum];
export declare const QuestionAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly questionId: "questionId";
    readonly generatedQuestionId: "generatedQuestionId";
    readonly lessonSessionId: "lessonSessionId";
    readonly deliveryId: "deliveryId";
    readonly answer: "answer";
    readonly isCorrect: "isCorrect";
    readonly timeSpent: "timeSpent";
    readonly createdAt: "createdAt";
};
export type QuestionAttemptScalarFieldEnum = (typeof QuestionAttemptScalarFieldEnum)[keyof typeof QuestionAttemptScalarFieldEnum];
export declare const SkillMasteryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly skillId: "skillId";
    readonly masteryScore: "masteryScore";
    readonly totalAttempts: "totalAttempts";
    readonly correctAttempts: "correctAttempts";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillMasteryScalarFieldEnum = (typeof SkillMasteryScalarFieldEnum)[keyof typeof SkillMasteryScalarFieldEnum];
export declare const LessonSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly lessonId: "lessonId";
    readonly targetQuestions: "targetQuestions";
    readonly answeredQuestions: "answeredQuestions";
    readonly correctAnswers: "correctAnswers";
    readonly earnedXp: "earnedXp";
    readonly status: "status";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LessonSessionScalarFieldEnum = (typeof LessonSessionScalarFieldEnum)[keyof typeof LessonSessionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
