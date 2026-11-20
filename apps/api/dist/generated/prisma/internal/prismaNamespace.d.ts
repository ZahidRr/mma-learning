import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "learnerProfile" | "curriculum" | "subject" | "topic" | "skill" | "lesson" | "question" | "questionOption" | "questionTemplate" | "generatedQuestion" | "questionDelivery" | "questionAttempt" | "skillMastery" | "lessonSession";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        LearnerProfile: {
            payload: Prisma.$LearnerProfilePayload<ExtArgs>;
            fields: Prisma.LearnerProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LearnerProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LearnerProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                findFirst: {
                    args: Prisma.LearnerProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LearnerProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                findMany: {
                    args: Prisma.LearnerProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>[];
                };
                create: {
                    args: Prisma.LearnerProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                createMany: {
                    args: Prisma.LearnerProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LearnerProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>[];
                };
                delete: {
                    args: Prisma.LearnerProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                update: {
                    args: Prisma.LearnerProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.LearnerProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LearnerProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LearnerProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>[];
                };
                upsert: {
                    args: Prisma.LearnerProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearnerProfilePayload>;
                };
                aggregate: {
                    args: Prisma.LearnerProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLearnerProfile>;
                };
                groupBy: {
                    args: Prisma.LearnerProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LearnerProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LearnerProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LearnerProfileCountAggregateOutputType> | number;
                };
            };
        };
        Curriculum: {
            payload: Prisma.$CurriculumPayload<ExtArgs>;
            fields: Prisma.CurriculumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CurriculumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CurriculumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                findFirst: {
                    args: Prisma.CurriculumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CurriculumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                findMany: {
                    args: Prisma.CurriculumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>[];
                };
                create: {
                    args: Prisma.CurriculumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                createMany: {
                    args: Prisma.CurriculumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CurriculumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>[];
                };
                delete: {
                    args: Prisma.CurriculumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                update: {
                    args: Prisma.CurriculumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                deleteMany: {
                    args: Prisma.CurriculumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CurriculumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CurriculumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>[];
                };
                upsert: {
                    args: Prisma.CurriculumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurriculumPayload>;
                };
                aggregate: {
                    args: Prisma.CurriculumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCurriculum>;
                };
                groupBy: {
                    args: Prisma.CurriculumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CurriculumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CurriculumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CurriculumCountAggregateOutputType> | number;
                };
            };
        };
        Subject: {
            payload: Prisma.$SubjectPayload<ExtArgs>;
            fields: Prisma.SubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findMany: {
                    args: Prisma.SubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                create: {
                    args: Prisma.SubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                createMany: {
                    args: Prisma.SubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                delete: {
                    args: Prisma.SubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                update: {
                    args: Prisma.SubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubject>;
                };
                groupBy: {
                    args: Prisma.SubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectCountAggregateOutputType> | number;
                };
            };
        };
        Topic: {
            payload: Prisma.$TopicPayload<ExtArgs>;
            fields: Prisma.TopicFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TopicFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                findFirst: {
                    args: Prisma.TopicFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                findMany: {
                    args: Prisma.TopicFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                create: {
                    args: Prisma.TopicCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                createMany: {
                    args: Prisma.TopicCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                delete: {
                    args: Prisma.TopicDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                update: {
                    args: Prisma.TopicUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                deleteMany: {
                    args: Prisma.TopicDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TopicUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                upsert: {
                    args: Prisma.TopicUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                aggregate: {
                    args: Prisma.TopicAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTopic>;
                };
                groupBy: {
                    args: Prisma.TopicGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TopicGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TopicCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TopicCountAggregateOutputType> | number;
                };
            };
        };
        Skill: {
            payload: Prisma.$SkillPayload<ExtArgs>;
            fields: Prisma.SkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findFirst: {
                    args: Prisma.SkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findMany: {
                    args: Prisma.SkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                create: {
                    args: Prisma.SkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                createMany: {
                    args: Prisma.SkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                delete: {
                    args: Prisma.SkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                update: {
                    args: Prisma.SkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                deleteMany: {
                    args: Prisma.SkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                upsert: {
                    args: Prisma.SkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                aggregate: {
                    args: Prisma.SkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkill>;
                };
                groupBy: {
                    args: Prisma.SkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillCountAggregateOutputType> | number;
                };
            };
        };
        Lesson: {
            payload: Prisma.$LessonPayload<ExtArgs>;
            fields: Prisma.LessonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findFirst: {
                    args: Prisma.LessonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findMany: {
                    args: Prisma.LessonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                create: {
                    args: Prisma.LessonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                createMany: {
                    args: Prisma.LessonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                delete: {
                    args: Prisma.LessonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                update: {
                    args: Prisma.LessonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                upsert: {
                    args: Prisma.LessonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                aggregate: {
                    args: Prisma.LessonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson>;
                };
                groupBy: {
                    args: Prisma.LessonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCountAggregateOutputType> | number;
                };
            };
        };
        Question: {
            payload: Prisma.$QuestionPayload<ExtArgs>;
            fields: Prisma.QuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                findFirst: {
                    args: Prisma.QuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                findMany: {
                    args: Prisma.QuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                create: {
                    args: Prisma.QuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                createMany: {
                    args: Prisma.QuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                delete: {
                    args: Prisma.QuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                update: {
                    args: Prisma.QuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                upsert: {
                    args: Prisma.QuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                aggregate: {
                    args: Prisma.QuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestion>;
                };
                groupBy: {
                    args: Prisma.QuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionCountAggregateOutputType> | number;
                };
            };
        };
        QuestionOption: {
            payload: Prisma.$QuestionOptionPayload<ExtArgs>;
            fields: Prisma.QuestionOptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionOptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionOptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                findFirst: {
                    args: Prisma.QuestionOptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionOptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                findMany: {
                    args: Prisma.QuestionOptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[];
                };
                create: {
                    args: Prisma.QuestionOptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                createMany: {
                    args: Prisma.QuestionOptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionOptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[];
                };
                delete: {
                    args: Prisma.QuestionOptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                update: {
                    args: Prisma.QuestionOptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionOptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionOptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionOptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[];
                };
                upsert: {
                    args: Prisma.QuestionOptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionOptionPayload>;
                };
                aggregate: {
                    args: Prisma.QuestionOptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestionOption>;
                };
                groupBy: {
                    args: Prisma.QuestionOptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionOptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionOptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionOptionCountAggregateOutputType> | number;
                };
            };
        };
        QuestionTemplate: {
            payload: Prisma.$QuestionTemplatePayload<ExtArgs>;
            fields: Prisma.QuestionTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.QuestionTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                findMany: {
                    args: Prisma.QuestionTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[];
                };
                create: {
                    args: Prisma.QuestionTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                createMany: {
                    args: Prisma.QuestionTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[];
                };
                delete: {
                    args: Prisma.QuestionTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                update: {
                    args: Prisma.QuestionTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.QuestionTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.QuestionTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestionTemplate>;
                };
                groupBy: {
                    args: Prisma.QuestionTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionTemplateCountAggregateOutputType> | number;
                };
            };
        };
        GeneratedQuestion: {
            payload: Prisma.$GeneratedQuestionPayload<ExtArgs>;
            fields: Prisma.GeneratedQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeneratedQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.GeneratedQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeneratedQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                findMany: {
                    args: Prisma.GeneratedQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[];
                };
                create: {
                    args: Prisma.GeneratedQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                createMany: {
                    args: Prisma.GeneratedQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeneratedQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[];
                };
                delete: {
                    args: Prisma.GeneratedQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                update: {
                    args: Prisma.GeneratedQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.GeneratedQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeneratedQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.GeneratedQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.GeneratedQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeneratedQuestion>;
                };
                groupBy: {
                    args: Prisma.GeneratedQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeneratedQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedQuestionCountAggregateOutputType> | number;
                };
            };
        };
        QuestionDelivery: {
            payload: Prisma.$QuestionDeliveryPayload<ExtArgs>;
            fields: Prisma.QuestionDeliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionDeliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionDeliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                findFirst: {
                    args: Prisma.QuestionDeliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionDeliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                findMany: {
                    args: Prisma.QuestionDeliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>[];
                };
                create: {
                    args: Prisma.QuestionDeliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                createMany: {
                    args: Prisma.QuestionDeliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionDeliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>[];
                };
                delete: {
                    args: Prisma.QuestionDeliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                update: {
                    args: Prisma.QuestionDeliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionDeliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionDeliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionDeliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>[];
                };
                upsert: {
                    args: Prisma.QuestionDeliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionDeliveryPayload>;
                };
                aggregate: {
                    args: Prisma.QuestionDeliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestionDelivery>;
                };
                groupBy: {
                    args: Prisma.QuestionDeliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionDeliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionDeliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionDeliveryCountAggregateOutputType> | number;
                };
            };
        };
        QuestionAttempt: {
            payload: Prisma.$QuestionAttemptPayload<ExtArgs>;
            fields: Prisma.QuestionAttemptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionAttemptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionAttemptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                findFirst: {
                    args: Prisma.QuestionAttemptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionAttemptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                findMany: {
                    args: Prisma.QuestionAttemptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>[];
                };
                create: {
                    args: Prisma.QuestionAttemptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                createMany: {
                    args: Prisma.QuestionAttemptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionAttemptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>[];
                };
                delete: {
                    args: Prisma.QuestionAttemptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                update: {
                    args: Prisma.QuestionAttemptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionAttemptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionAttemptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionAttemptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>[];
                };
                upsert: {
                    args: Prisma.QuestionAttemptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionAttemptPayload>;
                };
                aggregate: {
                    args: Prisma.QuestionAttemptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestionAttempt>;
                };
                groupBy: {
                    args: Prisma.QuestionAttemptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionAttemptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionAttemptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionAttemptCountAggregateOutputType> | number;
                };
            };
        };
        SkillMastery: {
            payload: Prisma.$SkillMasteryPayload<ExtArgs>;
            fields: Prisma.SkillMasteryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SkillMasteryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SkillMasteryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                findFirst: {
                    args: Prisma.SkillMasteryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SkillMasteryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                findMany: {
                    args: Prisma.SkillMasteryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>[];
                };
                create: {
                    args: Prisma.SkillMasteryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                createMany: {
                    args: Prisma.SkillMasteryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SkillMasteryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>[];
                };
                delete: {
                    args: Prisma.SkillMasteryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                update: {
                    args: Prisma.SkillMasteryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                deleteMany: {
                    args: Prisma.SkillMasteryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SkillMasteryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SkillMasteryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>[];
                };
                upsert: {
                    args: Prisma.SkillMasteryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillMasteryPayload>;
                };
                aggregate: {
                    args: Prisma.SkillMasteryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkillMastery>;
                };
                groupBy: {
                    args: Prisma.SkillMasteryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillMasteryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SkillMasteryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillMasteryCountAggregateOutputType> | number;
                };
            };
        };
        LessonSession: {
            payload: Prisma.$LessonSessionPayload<ExtArgs>;
            fields: Prisma.LessonSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                findFirst: {
                    args: Prisma.LessonSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                findMany: {
                    args: Prisma.LessonSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>[];
                };
                create: {
                    args: Prisma.LessonSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                createMany: {
                    args: Prisma.LessonSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>[];
                };
                delete: {
                    args: Prisma.LessonSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                update: {
                    args: Prisma.LessonSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>[];
                };
                upsert: {
                    args: Prisma.LessonSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonSessionPayload>;
                };
                aggregate: {
                    args: Prisma.LessonSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessonSession>;
                };
                groupBy: {
                    args: Prisma.LessonSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonSessionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly preferredLanguage: "preferredLanguage";
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
    readonly translations: "translations";
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
    readonly translations: "translations";
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
    readonly translations: "translations";
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
    readonly translations: "translations";
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
    readonly translations: "translations";
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
    readonly translations: "translations";
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus'>;
export type ListEnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>;
export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>;
export type EnumQuestionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionSource'>;
export type ListEnumQuestionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionSource[]'>;
export type EnumQuestionFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionFormat'>;
export type ListEnumQuestionFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionFormat[]'>;
export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>;
export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumQuestionDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionDeliveryStatus'>;
export type ListEnumQuestionDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionDeliveryStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumLessonSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonSessionStatus'>;
export type ListEnumLessonSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonSessionStatus[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    learnerProfile?: Prisma.LearnerProfileOmit;
    curriculum?: Prisma.CurriculumOmit;
    subject?: Prisma.SubjectOmit;
    topic?: Prisma.TopicOmit;
    skill?: Prisma.SkillOmit;
    lesson?: Prisma.LessonOmit;
    question?: Prisma.QuestionOmit;
    questionOption?: Prisma.QuestionOptionOmit;
    questionTemplate?: Prisma.QuestionTemplateOmit;
    generatedQuestion?: Prisma.GeneratedQuestionOmit;
    questionDelivery?: Prisma.QuestionDeliveryOmit;
    questionAttempt?: Prisma.QuestionAttemptOmit;
    skillMastery?: Prisma.SkillMasteryOmit;
    lessonSession?: Prisma.LessonSessionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
