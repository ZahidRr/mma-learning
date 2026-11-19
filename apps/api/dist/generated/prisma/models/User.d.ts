import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    role: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    role: $Enums.UserRole;
    status: $Enums.UserStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    learnerProfile?: Prisma.XOR<Prisma.LearnerProfileNullableScalarRelationFilter, Prisma.LearnerProfileWhereInput> | null;
    attempts?: Prisma.QuestionAttemptListRelationFilter;
    skillMasteries?: Prisma.SkillMasteryListRelationFilter;
    lessonSessions?: Prisma.LessonSessionListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    learnerProfile?: Prisma.LearnerProfileOrderByWithRelationInput;
    attempts?: Prisma.QuestionAttemptOrderByRelationAggregateInput;
    skillMasteries?: Prisma.SkillMasteryOrderByRelationAggregateInput;
    lessonSessions?: Prisma.LessonSessionOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    learnerProfile?: Prisma.XOR<Prisma.LearnerProfileNullableScalarRelationFilter, Prisma.LearnerProfileWhereInput> | null;
    attempts?: Prisma.QuestionAttemptListRelationFilter;
    skillMasteries?: Prisma.SkillMasteryListRelationFilter;
    lessonSessions?: Prisma.LessonSessionListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutLearnerProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLearnerProfileInput, Prisma.UserUncheckedCreateWithoutLearnerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLearnerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLearnerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLearnerProfileInput, Prisma.UserUncheckedCreateWithoutLearnerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLearnerProfileInput;
    upsert?: Prisma.UserUpsertWithoutLearnerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLearnerProfileInput, Prisma.UserUpdateWithoutLearnerProfileInput>, Prisma.UserUncheckedUpdateWithoutLearnerProfileInput>;
};
export type UserCreateNestedOneWithoutAttemptsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttemptsInput, Prisma.UserUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttemptsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttemptsInput, Prisma.UserUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttemptsInput;
    upsert?: Prisma.UserUpsertWithoutAttemptsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAttemptsInput, Prisma.UserUpdateWithoutAttemptsInput>, Prisma.UserUncheckedUpdateWithoutAttemptsInput>;
};
export type UserCreateNestedOneWithoutSkillMasteriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSkillMasteriesInput, Prisma.UserUncheckedCreateWithoutSkillMasteriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSkillMasteriesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSkillMasteriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSkillMasteriesInput, Prisma.UserUncheckedCreateWithoutSkillMasteriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSkillMasteriesInput;
    upsert?: Prisma.UserUpsertWithoutSkillMasteriesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSkillMasteriesInput, Prisma.UserUpdateWithoutSkillMasteriesInput>, Prisma.UserUncheckedUpdateWithoutSkillMasteriesInput>;
};
export type UserCreateNestedOneWithoutLessonSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonSessionsInput, Prisma.UserUncheckedCreateWithoutLessonSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLessonSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonSessionsInput, Prisma.UserUncheckedCreateWithoutLessonSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonSessionsInput;
    upsert?: Prisma.UserUpsertWithoutLessonSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLessonSessionsInput, Prisma.UserUpdateWithoutLessonSessionsInput>, Prisma.UserUncheckedUpdateWithoutLessonSessionsInput>;
};
export type UserCreateWithoutLearnerProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLearnerProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLearnerProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLearnerProfileInput, Prisma.UserUncheckedCreateWithoutLearnerProfileInput>;
};
export type UserUpsertWithoutLearnerProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLearnerProfileInput, Prisma.UserUncheckedUpdateWithoutLearnerProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLearnerProfileInput, Prisma.UserUncheckedCreateWithoutLearnerProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLearnerProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLearnerProfileInput, Prisma.UserUncheckedUpdateWithoutLearnerProfileInput>;
};
export type UserUpdateWithoutLearnerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLearnerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAttemptsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileCreateNestedOneWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAttemptsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedCreateNestedOneWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAttemptsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttemptsInput, Prisma.UserUncheckedCreateWithoutAttemptsInput>;
};
export type UserUpsertWithoutAttemptsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAttemptsInput, Prisma.UserUncheckedUpdateWithoutAttemptsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttemptsInput, Prisma.UserUncheckedCreateWithoutAttemptsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAttemptsInput, Prisma.UserUncheckedUpdateWithoutAttemptsInput>;
};
export type UserUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUpdateOneWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedUpdateOneWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSkillMasteriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSkillMasteriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutUserInput;
    lessonSessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSkillMasteriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSkillMasteriesInput, Prisma.UserUncheckedCreateWithoutSkillMasteriesInput>;
};
export type UserUpsertWithoutSkillMasteriesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSkillMasteriesInput, Prisma.UserUncheckedUpdateWithoutSkillMasteriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSkillMasteriesInput, Prisma.UserUncheckedCreateWithoutSkillMasteriesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSkillMasteriesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSkillMasteriesInput, Prisma.UserUncheckedUpdateWithoutSkillMasteriesInput>;
};
export type UserUpdateWithoutSkillMasteriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSkillMasteriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutUserNestedInput;
    lessonSessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLessonSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLessonSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedCreateNestedOneWithoutUserInput;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutUserInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLessonSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonSessionsInput, Prisma.UserUncheckedCreateWithoutLessonSessionsInput>;
};
export type UserUpsertWithoutLessonSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLessonSessionsInput, Prisma.UserUncheckedUpdateWithoutLessonSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonSessionsInput, Prisma.UserUncheckedCreateWithoutLessonSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLessonSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLessonSessionsInput, Prisma.UserUncheckedUpdateWithoutLessonSessionsInput>;
};
export type UserUpdateWithoutLessonSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLessonSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    learnerProfile?: Prisma.LearnerProfileUncheckedUpdateOneWithoutUserNestedInput;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutUserNestedInput;
    skillMasteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    attempts: number;
    skillMasteries: number;
    lessonSessions: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempts?: boolean | UserCountOutputTypeCountAttemptsArgs;
    skillMasteries?: boolean | UserCountOutputTypeCountSkillMasteriesArgs;
    lessonSessions?: boolean | UserCountOutputTypeCountLessonSessionsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionAttemptWhereInput;
};
export type UserCountOutputTypeCountSkillMasteriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillMasteryWhereInput;
};
export type UserCountOutputTypeCountLessonSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonSessionWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    learnerProfile?: boolean | Prisma.User$learnerProfileArgs<ExtArgs>;
    attempts?: boolean | Prisma.User$attemptsArgs<ExtArgs>;
    skillMasteries?: boolean | Prisma.User$skillMasteriesArgs<ExtArgs>;
    lessonSessions?: boolean | Prisma.User$lessonSessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    learnerProfile?: boolean | Prisma.User$learnerProfileArgs<ExtArgs>;
    attempts?: boolean | Prisma.User$attemptsArgs<ExtArgs>;
    skillMasteries?: boolean | Prisma.User$skillMasteriesArgs<ExtArgs>;
    lessonSessions?: boolean | Prisma.User$lessonSessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        learnerProfile: Prisma.$LearnerProfilePayload<ExtArgs> | null;
        attempts: Prisma.$QuestionAttemptPayload<ExtArgs>[];
        skillMasteries: Prisma.$SkillMasteryPayload<ExtArgs>[];
        lessonSessions: Prisma.$LessonSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        role: $Enums.UserRole;
        status: $Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    learnerProfile<T extends Prisma.User$learnerProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$learnerProfileArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attempts<T extends Prisma.User$attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    skillMasteries<T extends Prisma.User$skillMasteriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$skillMasteriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessonSessions<T extends Prisma.User$lessonSessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$lessonSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$learnerProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where?: Prisma.LearnerProfileWhereInput;
};
export type User$attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuestionAttemptWhereInput;
    orderBy?: Prisma.QuestionAttemptOrderByWithRelationInput | Prisma.QuestionAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuestionAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionAttemptScalarFieldEnum | Prisma.QuestionAttemptScalarFieldEnum[];
};
export type User$skillMasteriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    where?: Prisma.SkillMasteryWhereInput;
    orderBy?: Prisma.SkillMasteryOrderByWithRelationInput | Prisma.SkillMasteryOrderByWithRelationInput[];
    cursor?: Prisma.SkillMasteryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillMasteryScalarFieldEnum | Prisma.SkillMasteryScalarFieldEnum[];
};
export type User$lessonSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where?: Prisma.LessonSessionWhereInput;
    orderBy?: Prisma.LessonSessionOrderByWithRelationInput | Prisma.LessonSessionOrderByWithRelationInput[];
    cursor?: Prisma.LessonSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonSessionScalarFieldEnum | Prisma.LessonSessionScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
