import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonSessionPayload>;
export type AggregateLessonSession = {
    _count: LessonSessionCountAggregateOutputType | null;
    _avg: LessonSessionAvgAggregateOutputType | null;
    _sum: LessonSessionSumAggregateOutputType | null;
    _min: LessonSessionMinAggregateOutputType | null;
    _max: LessonSessionMaxAggregateOutputType | null;
};
export type LessonSessionAvgAggregateOutputType = {
    targetQuestions: number | null;
    answeredQuestions: number | null;
    correctAnswers: number | null;
    earnedXp: number | null;
};
export type LessonSessionSumAggregateOutputType = {
    targetQuestions: number | null;
    answeredQuestions: number | null;
    correctAnswers: number | null;
    earnedXp: number | null;
};
export type LessonSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    targetQuestions: number | null;
    answeredQuestions: number | null;
    correctAnswers: number | null;
    earnedXp: number | null;
    status: $Enums.LessonSessionStatus | null;
    startedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    targetQuestions: number | null;
    answeredQuestions: number | null;
    correctAnswers: number | null;
    earnedXp: number | null;
    status: $Enums.LessonSessionStatus | null;
    startedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    lessonId: number;
    targetQuestions: number;
    answeredQuestions: number;
    correctAnswers: number;
    earnedXp: number;
    status: number;
    startedAt: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonSessionAvgAggregateInputType = {
    targetQuestions?: true;
    answeredQuestions?: true;
    correctAnswers?: true;
    earnedXp?: true;
};
export type LessonSessionSumAggregateInputType = {
    targetQuestions?: true;
    answeredQuestions?: true;
    correctAnswers?: true;
    earnedXp?: true;
};
export type LessonSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    targetQuestions?: true;
    answeredQuestions?: true;
    correctAnswers?: true;
    earnedXp?: true;
    status?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    targetQuestions?: true;
    answeredQuestions?: true;
    correctAnswers?: true;
    earnedXp?: true;
    status?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    targetQuestions?: true;
    answeredQuestions?: true;
    correctAnswers?: true;
    earnedXp?: true;
    status?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonSessionWhereInput;
    orderBy?: Prisma.LessonSessionOrderByWithRelationInput | Prisma.LessonSessionOrderByWithRelationInput[];
    cursor?: Prisma.LessonSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonSessionCountAggregateInputType;
    _avg?: LessonSessionAvgAggregateInputType;
    _sum?: LessonSessionSumAggregateInputType;
    _min?: LessonSessionMinAggregateInputType;
    _max?: LessonSessionMaxAggregateInputType;
};
export type GetLessonSessionAggregateType<T extends LessonSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonSession[P]> : Prisma.GetScalarType<T[P], AggregateLessonSession[P]>;
};
export type LessonSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonSessionWhereInput;
    orderBy?: Prisma.LessonSessionOrderByWithAggregationInput | Prisma.LessonSessionOrderByWithAggregationInput[];
    by: Prisma.LessonSessionScalarFieldEnum[] | Prisma.LessonSessionScalarFieldEnum;
    having?: Prisma.LessonSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonSessionCountAggregateInputType | true;
    _avg?: LessonSessionAvgAggregateInputType;
    _sum?: LessonSessionSumAggregateInputType;
    _min?: LessonSessionMinAggregateInputType;
    _max?: LessonSessionMaxAggregateInputType;
};
export type LessonSessionGroupByOutputType = {
    id: string;
    userId: string;
    lessonId: string;
    targetQuestions: number;
    answeredQuestions: number;
    correctAnswers: number;
    earnedXp: number;
    status: $Enums.LessonSessionStatus;
    startedAt: Date;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LessonSessionCountAggregateOutputType | null;
    _avg: LessonSessionAvgAggregateOutputType | null;
    _sum: LessonSessionSumAggregateOutputType | null;
    _min: LessonSessionMinAggregateOutputType | null;
    _max: LessonSessionMaxAggregateOutputType | null;
};
export type GetLessonSessionGroupByPayload<T extends LessonSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonSessionGroupByOutputType[P]>;
}>>;
export type LessonSessionWhereInput = {
    AND?: Prisma.LessonSessionWhereInput | Prisma.LessonSessionWhereInput[];
    OR?: Prisma.LessonSessionWhereInput[];
    NOT?: Prisma.LessonSessionWhereInput | Prisma.LessonSessionWhereInput[];
    id?: Prisma.StringFilter<"LessonSession"> | string;
    userId?: Prisma.StringFilter<"LessonSession"> | string;
    lessonId?: Prisma.StringFilter<"LessonSession"> | string;
    targetQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    answeredQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    correctAnswers?: Prisma.IntFilter<"LessonSession"> | number;
    earnedXp?: Prisma.IntFilter<"LessonSession"> | number;
    status?: Prisma.EnumLessonSessionStatusFilter<"LessonSession"> | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    attempts?: Prisma.QuestionAttemptListRelationFilter;
    deliveries?: Prisma.QuestionDeliveryListRelationFilter;
};
export type LessonSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    attempts?: Prisma.QuestionAttemptOrderByRelationAggregateInput;
    deliveries?: Prisma.QuestionDeliveryOrderByRelationAggregateInput;
};
export type LessonSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonSessionWhereInput | Prisma.LessonSessionWhereInput[];
    OR?: Prisma.LessonSessionWhereInput[];
    NOT?: Prisma.LessonSessionWhereInput | Prisma.LessonSessionWhereInput[];
    userId?: Prisma.StringFilter<"LessonSession"> | string;
    lessonId?: Prisma.StringFilter<"LessonSession"> | string;
    targetQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    answeredQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    correctAnswers?: Prisma.IntFilter<"LessonSession"> | number;
    earnedXp?: Prisma.IntFilter<"LessonSession"> | number;
    status?: Prisma.EnumLessonSessionStatusFilter<"LessonSession"> | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    attempts?: Prisma.QuestionAttemptListRelationFilter;
    deliveries?: Prisma.QuestionDeliveryListRelationFilter;
}, "id">;
export type LessonSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonSessionCountOrderByAggregateInput;
    _avg?: Prisma.LessonSessionAvgOrderByAggregateInput;
    _max?: Prisma.LessonSessionMaxOrderByAggregateInput;
    _min?: Prisma.LessonSessionMinOrderByAggregateInput;
    _sum?: Prisma.LessonSessionSumOrderByAggregateInput;
};
export type LessonSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonSessionScalarWhereWithAggregatesInput | Prisma.LessonSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonSessionScalarWhereWithAggregatesInput | Prisma.LessonSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonSession"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"LessonSession"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"LessonSession"> | string;
    targetQuestions?: Prisma.IntWithAggregatesFilter<"LessonSession"> | number;
    answeredQuestions?: Prisma.IntWithAggregatesFilter<"LessonSession"> | number;
    correctAnswers?: Prisma.IntWithAggregatesFilter<"LessonSession"> | number;
    earnedXp?: Prisma.IntWithAggregatesFilter<"LessonSession"> | number;
    status?: Prisma.EnumLessonSessionStatusWithAggregatesFilter<"LessonSession"> | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonSession"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LessonSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LessonSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonSession"> | Date | string;
};
export type LessonSessionCreateInput = {
    id?: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLessonSessionsInput;
    lesson: Prisma.LessonCreateNestedOneWithoutSessionsInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLessonSessionsNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutSessionsNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionCreateManyInput = {
    id?: string;
    userId: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonSessionListRelationFilter = {
    every?: Prisma.LessonSessionWhereInput;
    some?: Prisma.LessonSessionWhereInput;
    none?: Prisma.LessonSessionWhereInput;
};
export type LessonSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonSessionScalarRelationFilter = {
    is?: Prisma.LessonSessionWhereInput;
    isNot?: Prisma.LessonSessionWhereInput;
};
export type LessonSessionNullableScalarRelationFilter = {
    is?: Prisma.LessonSessionWhereInput | null;
    isNot?: Prisma.LessonSessionWhereInput | null;
};
export type LessonSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonSessionAvgOrderByAggregateInput = {
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
};
export type LessonSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonSessionSumOrderByAggregateInput = {
    targetQuestions?: Prisma.SortOrder;
    answeredQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    earnedXp?: Prisma.SortOrder;
};
export type LessonSessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput> | Prisma.LessonSessionCreateWithoutUserInput[] | Prisma.LessonSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutUserInput | Prisma.LessonSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonSessionCreateManyUserInputEnvelope;
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
};
export type LessonSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput> | Prisma.LessonSessionCreateWithoutUserInput[] | Prisma.LessonSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutUserInput | Prisma.LessonSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonSessionCreateManyUserInputEnvelope;
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
};
export type LessonSessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput> | Prisma.LessonSessionCreateWithoutUserInput[] | Prisma.LessonSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutUserInput | Prisma.LessonSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonSessionCreateManyUserInputEnvelope;
    set?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    disconnect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    delete?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    update?: Prisma.LessonSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonSessionUpdateManyWithWhereWithoutUserInput | Prisma.LessonSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
};
export type LessonSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput> | Prisma.LessonSessionCreateWithoutUserInput[] | Prisma.LessonSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutUserInput | Prisma.LessonSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonSessionCreateManyUserInputEnvelope;
    set?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    disconnect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    delete?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    update?: Prisma.LessonSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonSessionUpdateManyWithWhereWithoutUserInput | Prisma.LessonSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
};
export type LessonSessionCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput> | Prisma.LessonSessionCreateWithoutLessonInput[] | Prisma.LessonSessionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutLessonInput | Prisma.LessonSessionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonSessionCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
};
export type LessonSessionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput> | Prisma.LessonSessionCreateWithoutLessonInput[] | Prisma.LessonSessionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutLessonInput | Prisma.LessonSessionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonSessionCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
};
export type LessonSessionUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput> | Prisma.LessonSessionCreateWithoutLessonInput[] | Prisma.LessonSessionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutLessonInput | Prisma.LessonSessionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonSessionUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonSessionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonSessionCreateManyLessonInputEnvelope;
    set?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    disconnect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    delete?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    update?: Prisma.LessonSessionUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonSessionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonSessionUpdateManyWithWhereWithoutLessonInput | Prisma.LessonSessionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
};
export type LessonSessionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput> | Prisma.LessonSessionCreateWithoutLessonInput[] | Prisma.LessonSessionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutLessonInput | Prisma.LessonSessionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonSessionUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonSessionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonSessionCreateManyLessonInputEnvelope;
    set?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    disconnect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    delete?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    connect?: Prisma.LessonSessionWhereUniqueInput | Prisma.LessonSessionWhereUniqueInput[];
    update?: Prisma.LessonSessionUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonSessionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonSessionUpdateManyWithWhereWithoutLessonInput | Prisma.LessonSessionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
};
export type LessonSessionCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.LessonSessionUpsertWithoutDeliveriesInput;
    connect?: Prisma.LessonSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonSessionUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.LessonSessionUpdateWithoutDeliveriesInput>, Prisma.LessonSessionUncheckedUpdateWithoutDeliveriesInput>;
};
export type LessonSessionCreateNestedOneWithoutAttemptsInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutAttemptsInput, Prisma.LessonSessionUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutAttemptsInput;
    connect?: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionUpdateOneWithoutAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonSessionCreateWithoutAttemptsInput, Prisma.LessonSessionUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.LessonSessionCreateOrConnectWithoutAttemptsInput;
    upsert?: Prisma.LessonSessionUpsertWithoutAttemptsInput;
    disconnect?: Prisma.LessonSessionWhereInput | boolean;
    delete?: Prisma.LessonSessionWhereInput | boolean;
    connect?: Prisma.LessonSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonSessionUpdateToOneWithWhereWithoutAttemptsInput, Prisma.LessonSessionUpdateWithoutAttemptsInput>, Prisma.LessonSessionUncheckedUpdateWithoutAttemptsInput>;
};
export type EnumLessonSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.LessonSessionStatus;
};
export type LessonSessionCreateWithoutUserInput = {
    id?: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutSessionsInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput>;
};
export type LessonSessionCreateManyUserInputEnvelope = {
    data: Prisma.LessonSessionCreateManyUserInput | Prisma.LessonSessionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LessonSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonSessionUpdateWithoutUserInput, Prisma.LessonSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutUserInput, Prisma.LessonSessionUncheckedCreateWithoutUserInput>;
};
export type LessonSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateWithoutUserInput, Prisma.LessonSessionUncheckedUpdateWithoutUserInput>;
};
export type LessonSessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LessonSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateManyMutationInput, Prisma.LessonSessionUncheckedUpdateManyWithoutUserInput>;
};
export type LessonSessionScalarWhereInput = {
    AND?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
    OR?: Prisma.LessonSessionScalarWhereInput[];
    NOT?: Prisma.LessonSessionScalarWhereInput | Prisma.LessonSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonSession"> | string;
    userId?: Prisma.StringFilter<"LessonSession"> | string;
    lessonId?: Prisma.StringFilter<"LessonSession"> | string;
    targetQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    answeredQuestions?: Prisma.IntFilter<"LessonSession"> | number;
    correctAnswers?: Prisma.IntFilter<"LessonSession"> | number;
    earnedXp?: Prisma.IntFilter<"LessonSession"> | number;
    status?: Prisma.EnumLessonSessionStatusFilter<"LessonSession"> | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonSession"> | Date | string;
};
export type LessonSessionCreateWithoutLessonInput = {
    id?: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLessonSessionsInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUncheckedCreateWithoutLessonInput = {
    id?: string;
    userId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutLessonSessionInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput>;
};
export type LessonSessionCreateManyLessonInputEnvelope = {
    data: Prisma.LessonSessionCreateManyLessonInput | Prisma.LessonSessionCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonSessionUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonSessionUpdateWithoutLessonInput, Prisma.LessonSessionUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutLessonInput, Prisma.LessonSessionUncheckedCreateWithoutLessonInput>;
};
export type LessonSessionUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateWithoutLessonInput, Prisma.LessonSessionUncheckedUpdateWithoutLessonInput>;
};
export type LessonSessionUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateManyMutationInput, Prisma.LessonSessionUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonSessionCreateWithoutDeliveriesInput = {
    id?: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLessonSessionsInput;
    lesson: Prisma.LessonCreateNestedOneWithoutSessionsInput;
    attempts?: Prisma.QuestionAttemptCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    userId: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedCreateWithoutDeliveriesInput>;
};
export type LessonSessionUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.LessonSessionUpdateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.LessonSessionWhereInput;
};
export type LessonSessionUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.LessonSessionWhereInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateWithoutDeliveriesInput, Prisma.LessonSessionUncheckedUpdateWithoutDeliveriesInput>;
};
export type LessonSessionUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLessonSessionsNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutSessionsNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionCreateWithoutAttemptsInput = {
    id?: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLessonSessionsInput;
    lesson: Prisma.LessonCreateNestedOneWithoutSessionsInput;
    deliveries?: Prisma.QuestionDeliveryCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionUncheckedCreateWithoutAttemptsInput = {
    id?: string;
    userId: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deliveries?: Prisma.QuestionDeliveryUncheckedCreateNestedManyWithoutLessonSessionInput;
};
export type LessonSessionCreateOrConnectWithoutAttemptsInput = {
    where: Prisma.LessonSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutAttemptsInput, Prisma.LessonSessionUncheckedCreateWithoutAttemptsInput>;
};
export type LessonSessionUpsertWithoutAttemptsInput = {
    update: Prisma.XOR<Prisma.LessonSessionUpdateWithoutAttemptsInput, Prisma.LessonSessionUncheckedUpdateWithoutAttemptsInput>;
    create: Prisma.XOR<Prisma.LessonSessionCreateWithoutAttemptsInput, Prisma.LessonSessionUncheckedCreateWithoutAttemptsInput>;
    where?: Prisma.LessonSessionWhereInput;
};
export type LessonSessionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: Prisma.LessonSessionWhereInput;
    data: Prisma.XOR<Prisma.LessonSessionUpdateWithoutAttemptsInput, Prisma.LessonSessionUncheckedUpdateWithoutAttemptsInput>;
};
export type LessonSessionUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLessonSessionsNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutSessionsNestedInput;
    deliveries?: Prisma.QuestionDeliveryUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionCreateManyUserInput = {
    id?: string;
    lessonId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutSessionsNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonSessionCreateManyLessonInput = {
    id?: string;
    userId: string;
    targetQuestions?: number;
    answeredQuestions?: number;
    correctAnswers?: number;
    earnedXp?: number;
    status?: $Enums.LessonSessionStatus;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonSessionUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLessonSessionsNestedInput;
    attempts?: Prisma.QuestionAttemptUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuestionAttemptUncheckedUpdateManyWithoutLessonSessionNestedInput;
    deliveries?: Prisma.QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionNestedInput;
};
export type LessonSessionUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    answeredQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    earnedXp?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumLessonSessionStatusFieldUpdateOperationsInput | $Enums.LessonSessionStatus;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonSessionCountOutputType = {
    attempts: number;
    deliveries: number;
};
export type LessonSessionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempts?: boolean | LessonSessionCountOutputTypeCountAttemptsArgs;
    deliveries?: boolean | LessonSessionCountOutputTypeCountDeliveriesArgs;
};
export type LessonSessionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionCountOutputTypeSelect<ExtArgs> | null;
};
export type LessonSessionCountOutputTypeCountAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionAttemptWhereInput;
};
export type LessonSessionCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionDeliveryWhereInput;
};
export type LessonSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    targetQuestions?: boolean;
    answeredQuestions?: boolean;
    correctAnswers?: boolean;
    earnedXp?: boolean;
    status?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    attempts?: boolean | Prisma.LessonSession$attemptsArgs<ExtArgs>;
    deliveries?: boolean | Prisma.LessonSession$deliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonSessionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonSession"]>;
export type LessonSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    targetQuestions?: boolean;
    answeredQuestions?: boolean;
    correctAnswers?: boolean;
    earnedXp?: boolean;
    status?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonSession"]>;
export type LessonSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    targetQuestions?: boolean;
    answeredQuestions?: boolean;
    correctAnswers?: boolean;
    earnedXp?: boolean;
    status?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonSession"]>;
export type LessonSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    targetQuestions?: boolean;
    answeredQuestions?: boolean;
    correctAnswers?: boolean;
    earnedXp?: boolean;
    status?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LessonSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "lessonId" | "targetQuestions" | "answeredQuestions" | "correctAnswers" | "earnedXp" | "status" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonSession"]>;
export type LessonSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    attempts?: boolean | Prisma.LessonSession$attemptsArgs<ExtArgs>;
    deliveries?: boolean | Prisma.LessonSession$deliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonSessionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LessonSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $LessonSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonSession";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        lesson: Prisma.$LessonPayload<ExtArgs>;
        attempts: Prisma.$QuestionAttemptPayload<ExtArgs>[];
        deliveries: Prisma.$QuestionDeliveryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        lessonId: string;
        targetQuestions: number;
        answeredQuestions: number;
        correctAnswers: number;
        earnedXp: number;
        status: $Enums.LessonSessionStatus;
        startedAt: Date;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lessonSession"]>;
    composites: {};
};
export type LessonSessionGetPayload<S extends boolean | null | undefined | LessonSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload, S>;
export type LessonSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonSessionCountAggregateInputType | true;
};
export interface LessonSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonSession'];
        meta: {
            name: 'LessonSession';
        };
    };
    findUnique<T extends LessonSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonSessionFindManyArgs>(args?: Prisma.SelectSubset<T, LessonSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonSessionCreateArgs>(args: Prisma.SelectSubset<T, LessonSessionCreateArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonSessionDeleteArgs>(args: Prisma.SelectSubset<T, LessonSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonSessionUpdateArgs>(args: Prisma.SelectSubset<T, LessonSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonSessionUpsertArgs>(args: Prisma.SelectSubset<T, LessonSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonSessionCountArgs>(args?: Prisma.Subset<T, LessonSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonSessionCountAggregateOutputType> : number>;
    aggregate<T extends LessonSessionAggregateArgs>(args: Prisma.Subset<T, LessonSessionAggregateArgs>): Prisma.PrismaPromise<GetLessonSessionAggregateType<T>>;
    groupBy<T extends LessonSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonSessionFieldRefs;
}
export interface Prisma__LessonSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attempts<T extends Prisma.LessonSession$attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonSession$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deliveries<T extends Prisma.LessonSession$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonSession$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonSessionFieldRefs {
    readonly id: Prisma.FieldRef<"LessonSession", 'String'>;
    readonly userId: Prisma.FieldRef<"LessonSession", 'String'>;
    readonly lessonId: Prisma.FieldRef<"LessonSession", 'String'>;
    readonly targetQuestions: Prisma.FieldRef<"LessonSession", 'Int'>;
    readonly answeredQuestions: Prisma.FieldRef<"LessonSession", 'Int'>;
    readonly correctAnswers: Prisma.FieldRef<"LessonSession", 'Int'>;
    readonly earnedXp: Prisma.FieldRef<"LessonSession", 'Int'>;
    readonly status: Prisma.FieldRef<"LessonSession", 'LessonSessionStatus'>;
    readonly startedAt: Prisma.FieldRef<"LessonSession", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"LessonSession", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LessonSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LessonSession", 'DateTime'>;
}
export type LessonSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonSessionCreateInput, Prisma.LessonSessionUncheckedCreateInput>;
};
export type LessonSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonSessionCreateManyInput | Prisma.LessonSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    data: Prisma.LessonSessionCreateManyInput | Prisma.LessonSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonSessionUpdateInput, Prisma.LessonSessionUncheckedUpdateInput>;
    where: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonSessionUpdateManyMutationInput, Prisma.LessonSessionUncheckedUpdateManyInput>;
    where?: Prisma.LessonSessionWhereInput;
    limit?: number;
};
export type LessonSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonSessionUpdateManyMutationInput, Prisma.LessonSessionUncheckedUpdateManyInput>;
    where?: Prisma.LessonSessionWhereInput;
    limit?: number;
    include?: Prisma.LessonSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where: Prisma.LessonSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonSessionCreateInput, Prisma.LessonSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonSessionUpdateInput, Prisma.LessonSessionUncheckedUpdateInput>;
};
export type LessonSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where: Prisma.LessonSessionWhereUniqueInput;
};
export type LessonSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonSessionWhereInput;
    limit?: number;
};
export type LessonSession$attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonSession$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where?: Prisma.QuestionDeliveryWhereInput;
    orderBy?: Prisma.QuestionDeliveryOrderByWithRelationInput | Prisma.QuestionDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.QuestionDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionDeliveryScalarFieldEnum | Prisma.QuestionDeliveryScalarFieldEnum[];
};
export type LessonSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
};
