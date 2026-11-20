import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    LearnerProfile: 'LearnerProfile',
    Curriculum: 'Curriculum',
    Subject: 'Subject',
    Topic: 'Topic',
    Skill: 'Skill',
    Lesson: 'Lesson',
    Question: 'Question',
    QuestionOption: 'QuestionOption',
    QuestionTemplate: 'QuestionTemplate',
    GeneratedQuestion: 'GeneratedQuestion',
    QuestionDelivery: 'QuestionDelivery',
    QuestionAttempt: 'QuestionAttempt',
    SkillMastery: 'SkillMastery',
    LessonSession: 'LessonSession'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LearnerProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    gradeLevel: 'gradeLevel',
    avatarKey: 'avatarKey',
    preferredLanguage: 'preferredLanguage',
    totalXp: 'totalXp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CurriculumScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SubjectScalarFieldEnum = {
    id: 'id',
    curriculumId: 'curriculumId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    translations: 'translations',
    iconKey: 'iconKey',
    orderIndex: 'orderIndex',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TopicScalarFieldEnum = {
    id: 'id',
    subjectId: 'subjectId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    translations: 'translations',
    gradeLevel: 'gradeLevel',
    orderIndex: 'orderIndex',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SkillScalarFieldEnum = {
    id: 'id',
    topicId: 'topicId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    translations: 'translations',
    orderIndex: 'orderIndex',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LessonScalarFieldEnum = {
    id: 'id',
    skillId: 'skillId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    translations: 'translations',
    orderIndex: 'orderIndex',
    xpReward: 'xpReward',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const QuestionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    lessonId: 'lessonId',
    skillId: 'skillId',
    type: 'type',
    source: 'source',
    format: 'format',
    difficulty: 'difficulty',
    prompt: 'prompt',
    explanation: 'explanation',
    translations: 'translations',
    answerConfig: 'answerConfig',
    orderIndex: 'orderIndex',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const QuestionOptionScalarFieldEnum = {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    translations: 'translations',
    isCorrect: 'isCorrect',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const QuestionTemplateScalarFieldEnum = {
    id: 'id',
    questionId: 'questionId',
    template: 'template',
    generatorKey: 'generatorKey',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GeneratedQuestionScalarFieldEnum = {
    id: 'id',
    questionId: 'questionId',
    prompt: 'prompt',
    correctAnswer: 'correctAnswer',
    variables: 'variables',
    createdAt: 'createdAt'
};
export const QuestionDeliveryScalarFieldEnum = {
    id: 'id',
    lessonSessionId: 'lessonSessionId',
    questionId: 'questionId',
    generatedQuestionId: 'generatedQuestionId',
    status: 'status',
    presentedAt: 'presentedAt',
    answeredAt: 'answeredAt'
};
export const QuestionAttemptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    generatedQuestionId: 'generatedQuestionId',
    lessonSessionId: 'lessonSessionId',
    deliveryId: 'deliveryId',
    answer: 'answer',
    isCorrect: 'isCorrect',
    timeSpent: 'timeSpent',
    createdAt: 'createdAt'
};
export const SkillMasteryScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    masteryScore: 'masteryScore',
    totalAttempts: 'totalAttempts',
    correctAttempts: 'correctAttempts',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LessonSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    targetQuestions: 'targetQuestions',
    answeredQuestions: 'answeredQuestions',
    correctAnswers: 'correctAnswers',
    earnedXp: 'earnedXp',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map