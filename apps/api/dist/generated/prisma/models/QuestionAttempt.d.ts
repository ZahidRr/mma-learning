import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuestionAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionAttemptPayload>;
export type AggregateQuestionAttempt = {
    _count: QuestionAttemptCountAggregateOutputType | null;
    _avg: QuestionAttemptAvgAggregateOutputType | null;
    _sum: QuestionAttemptSumAggregateOutputType | null;
    _min: QuestionAttemptMinAggregateOutputType | null;
    _max: QuestionAttemptMaxAggregateOutputType | null;
};
export type QuestionAttemptAvgAggregateOutputType = {
    timeSpent: number | null;
};
export type QuestionAttemptSumAggregateOutputType = {
    timeSpent: number | null;
};
export type QuestionAttemptMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    generatedQuestionId: string | null;
    lessonSessionId: string | null;
    deliveryId: string | null;
    answer: string | null;
    isCorrect: boolean | null;
    timeSpent: number | null;
    createdAt: Date | null;
};
export type QuestionAttemptMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    generatedQuestionId: string | null;
    lessonSessionId: string | null;
    deliveryId: string | null;
    answer: string | null;
    isCorrect: boolean | null;
    timeSpent: number | null;
    createdAt: Date | null;
};
export type QuestionAttemptCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    generatedQuestionId: number;
    lessonSessionId: number;
    deliveryId: number;
    answer: number;
    isCorrect: number;
    timeSpent: number;
    createdAt: number;
    _all: number;
};
export type QuestionAttemptAvgAggregateInputType = {
    timeSpent?: true;
};
export type QuestionAttemptSumAggregateInputType = {
    timeSpent?: true;
};
export type QuestionAttemptMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    lessonSessionId?: true;
    deliveryId?: true;
    answer?: true;
    isCorrect?: true;
    timeSpent?: true;
    createdAt?: true;
};
export type QuestionAttemptMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    lessonSessionId?: true;
    deliveryId?: true;
    answer?: true;
    isCorrect?: true;
    timeSpent?: true;
    createdAt?: true;
};
export type QuestionAttemptCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    lessonSessionId?: true;
    deliveryId?: true;
    answer?: true;
    isCorrect?: true;
    timeSpent?: true;
    createdAt?: true;
    _all?: true;
};
export type QuestionAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionAttemptWhereInput;
    orderBy?: Prisma.QuestionAttemptOrderByWithRelationInput | Prisma.QuestionAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuestionAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionAttemptCountAggregateInputType;
    _avg?: QuestionAttemptAvgAggregateInputType;
    _sum?: QuestionAttemptSumAggregateInputType;
    _min?: QuestionAttemptMinAggregateInputType;
    _max?: QuestionAttemptMaxAggregateInputType;
};
export type GetQuestionAttemptAggregateType<T extends QuestionAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestionAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestionAttempt[P]> : Prisma.GetScalarType<T[P], AggregateQuestionAttempt[P]>;
};
export type QuestionAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionAttemptWhereInput;
    orderBy?: Prisma.QuestionAttemptOrderByWithAggregationInput | Prisma.QuestionAttemptOrderByWithAggregationInput[];
    by: Prisma.QuestionAttemptScalarFieldEnum[] | Prisma.QuestionAttemptScalarFieldEnum;
    having?: Prisma.QuestionAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionAttemptCountAggregateInputType | true;
    _avg?: QuestionAttemptAvgAggregateInputType;
    _sum?: QuestionAttemptSumAggregateInputType;
    _min?: QuestionAttemptMinAggregateInputType;
    _max?: QuestionAttemptMaxAggregateInputType;
};
export type QuestionAttemptGroupByOutputType = {
    id: string;
    userId: string;
    questionId: string;
    generatedQuestionId: string | null;
    lessonSessionId: string | null;
    deliveryId: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent: number | null;
    createdAt: Date;
    _count: QuestionAttemptCountAggregateOutputType | null;
    _avg: QuestionAttemptAvgAggregateOutputType | null;
    _sum: QuestionAttemptSumAggregateOutputType | null;
    _min: QuestionAttemptMinAggregateOutputType | null;
    _max: QuestionAttemptMaxAggregateOutputType | null;
};
export type GetQuestionAttemptGroupByPayload<T extends QuestionAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionAttemptGroupByOutputType[P]>;
}>>;
export type QuestionAttemptWhereInput = {
    AND?: Prisma.QuestionAttemptWhereInput | Prisma.QuestionAttemptWhereInput[];
    OR?: Prisma.QuestionAttemptWhereInput[];
    NOT?: Prisma.QuestionAttemptWhereInput | Prisma.QuestionAttemptWhereInput[];
    id?: Prisma.StringFilter<"QuestionAttempt"> | string;
    userId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    questionId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    generatedQuestionId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    lessonSessionId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    deliveryId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    answer?: Prisma.StringFilter<"QuestionAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"QuestionAttempt"> | boolean;
    timeSpent?: Prisma.IntNullableFilter<"QuestionAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"QuestionAttempt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    generatedQuestion?: Prisma.XOR<Prisma.GeneratedQuestionNullableScalarRelationFilter, Prisma.GeneratedQuestionWhereInput> | null;
    lessonSession?: Prisma.XOR<Prisma.LessonSessionNullableScalarRelationFilter, Prisma.LessonSessionWhereInput> | null;
    delivery?: Prisma.XOR<Prisma.QuestionDeliveryNullableScalarRelationFilter, Prisma.QuestionDeliveryWhereInput> | null;
};
export type QuestionAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    timeSpent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
    generatedQuestion?: Prisma.GeneratedQuestionOrderByWithRelationInput;
    lessonSession?: Prisma.LessonSessionOrderByWithRelationInput;
    delivery?: Prisma.QuestionDeliveryOrderByWithRelationInput;
};
export type QuestionAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    generatedQuestionId?: string;
    deliveryId?: string;
    AND?: Prisma.QuestionAttemptWhereInput | Prisma.QuestionAttemptWhereInput[];
    OR?: Prisma.QuestionAttemptWhereInput[];
    NOT?: Prisma.QuestionAttemptWhereInput | Prisma.QuestionAttemptWhereInput[];
    userId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    questionId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    lessonSessionId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    answer?: Prisma.StringFilter<"QuestionAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"QuestionAttempt"> | boolean;
    timeSpent?: Prisma.IntNullableFilter<"QuestionAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"QuestionAttempt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    generatedQuestion?: Prisma.XOR<Prisma.GeneratedQuestionNullableScalarRelationFilter, Prisma.GeneratedQuestionWhereInput> | null;
    lessonSession?: Prisma.XOR<Prisma.LessonSessionNullableScalarRelationFilter, Prisma.LessonSessionWhereInput> | null;
    delivery?: Prisma.XOR<Prisma.QuestionDeliveryNullableScalarRelationFilter, Prisma.QuestionDeliveryWhereInput> | null;
}, "id" | "generatedQuestionId" | "deliveryId">;
export type QuestionAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    timeSpent?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.QuestionAttemptCountOrderByAggregateInput;
    _avg?: Prisma.QuestionAttemptAvgOrderByAggregateInput;
    _max?: Prisma.QuestionAttemptMaxOrderByAggregateInput;
    _min?: Prisma.QuestionAttemptMinOrderByAggregateInput;
    _sum?: Prisma.QuestionAttemptSumOrderByAggregateInput;
};
export type QuestionAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionAttemptScalarWhereWithAggregatesInput | Prisma.QuestionAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionAttemptScalarWhereWithAggregatesInput | Prisma.QuestionAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuestionAttempt"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"QuestionAttempt"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuestionAttempt"> | string;
    generatedQuestionId?: Prisma.StringNullableWithAggregatesFilter<"QuestionAttempt"> | string | null;
    lessonSessionId?: Prisma.StringNullableWithAggregatesFilter<"QuestionAttempt"> | string | null;
    deliveryId?: Prisma.StringNullableWithAggregatesFilter<"QuestionAttempt"> | string | null;
    answer?: Prisma.StringWithAggregatesFilter<"QuestionAttempt"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"QuestionAttempt"> | boolean;
    timeSpent?: Prisma.IntNullableWithAggregatesFilter<"QuestionAttempt"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QuestionAttempt"> | Date | string;
};
export type QuestionAttemptCreateInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttemptsInput;
    question: Prisma.QuestionCreateNestedOneWithoutAttemptsInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutAttemptInput;
    lessonSession?: Prisma.LessonSessionCreateNestedOneWithoutAttemptsInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutAttemptInput;
};
export type QuestionAttemptUncheckedCreateInput = {
    id?: string;
    userId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAttemptsNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutAttemptNestedInput;
    lessonSession?: Prisma.LessonSessionUpdateOneWithoutAttemptsNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutAttemptNestedInput;
};
export type QuestionAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptCreateManyInput = {
    id?: string;
    userId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptListRelationFilter = {
    every?: Prisma.QuestionAttemptWhereInput;
    some?: Prisma.QuestionAttemptWhereInput;
    none?: Prisma.QuestionAttemptWhereInput;
};
export type QuestionAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuestionAttemptNullableScalarRelationFilter = {
    is?: Prisma.QuestionAttemptWhereInput | null;
    isNot?: Prisma.QuestionAttemptWhereInput | null;
};
export type QuestionAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    timeSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuestionAttemptAvgOrderByAggregateInput = {
    timeSpent?: Prisma.SortOrder;
};
export type QuestionAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    timeSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuestionAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    deliveryId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    timeSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuestionAttemptSumOrderByAggregateInput = {
    timeSpent?: Prisma.SortOrder;
};
export type QuestionAttemptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput> | Prisma.QuestionAttemptCreateWithoutUserInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutUserInput | Prisma.QuestionAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuestionAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput> | Prisma.QuestionAttemptCreateWithoutUserInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutUserInput | Prisma.QuestionAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuestionAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput> | Prisma.QuestionAttemptCreateWithoutUserInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutUserInput | Prisma.QuestionAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuestionAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput> | Prisma.QuestionAttemptCreateWithoutUserInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutUserInput | Prisma.QuestionAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuestionAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput> | Prisma.QuestionAttemptCreateWithoutQuestionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput | Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput> | Prisma.QuestionAttemptCreateWithoutQuestionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput | Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput> | Prisma.QuestionAttemptCreateWithoutQuestionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput | Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput> | Prisma.QuestionAttemptCreateWithoutQuestionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput | Prisma.QuestionAttemptCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptCreateNestedOneWithoutGeneratedQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutGeneratedQuestionInput;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptUncheckedCreateNestedOneWithoutGeneratedQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutGeneratedQuestionInput;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptUpdateOneWithoutGeneratedQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutGeneratedQuestionInput;
    upsert?: Prisma.QuestionAttemptUpsertWithoutGeneratedQuestionInput;
    disconnect?: Prisma.QuestionAttemptWhereInput | boolean;
    delete?: Prisma.QuestionAttemptWhereInput | boolean;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionAttemptUpdateToOneWithWhereWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUpdateWithoutGeneratedQuestionInput>, Prisma.QuestionAttemptUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type QuestionAttemptUncheckedUpdateOneWithoutGeneratedQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutGeneratedQuestionInput;
    upsert?: Prisma.QuestionAttemptUpsertWithoutGeneratedQuestionInput;
    disconnect?: Prisma.QuestionAttemptWhereInput | boolean;
    delete?: Prisma.QuestionAttemptWhereInput | boolean;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionAttemptUpdateToOneWithWhereWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUpdateWithoutGeneratedQuestionInput>, Prisma.QuestionAttemptUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type QuestionAttemptCreateNestedOneWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutDeliveryInput;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptUncheckedCreateNestedOneWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutDeliveryInput;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptUpdateOneWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutDeliveryInput;
    upsert?: Prisma.QuestionAttemptUpsertWithoutDeliveryInput;
    disconnect?: Prisma.QuestionAttemptWhereInput | boolean;
    delete?: Prisma.QuestionAttemptWhereInput | boolean;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionAttemptUpdateToOneWithWhereWithoutDeliveryInput, Prisma.QuestionAttemptUpdateWithoutDeliveryInput>, Prisma.QuestionAttemptUncheckedUpdateWithoutDeliveryInput>;
};
export type QuestionAttemptUncheckedUpdateOneWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutDeliveryInput;
    upsert?: Prisma.QuestionAttemptUpsertWithoutDeliveryInput;
    disconnect?: Prisma.QuestionAttemptWhereInput | boolean;
    delete?: Prisma.QuestionAttemptWhereInput | boolean;
    connect?: Prisma.QuestionAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionAttemptUpdateToOneWithWhereWithoutDeliveryInput, Prisma.QuestionAttemptUpdateWithoutDeliveryInput>, Prisma.QuestionAttemptUncheckedUpdateWithoutDeliveryInput>;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type QuestionAttemptCreateNestedManyWithoutLessonSessionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionAttemptCreateWithoutLessonSessionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyLessonSessionInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUncheckedCreateNestedManyWithoutLessonSessionInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionAttemptCreateWithoutLessonSessionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyLessonSessionInputEnvelope;
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
};
export type QuestionAttemptUpdateManyWithoutLessonSessionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionAttemptCreateWithoutLessonSessionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyLessonSessionInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutLessonSessionInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutLessonSessionInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutLessonSessionInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptUncheckedUpdateManyWithoutLessonSessionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionAttemptCreateWithoutLessonSessionInput[] | Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionAttemptCreateOrConnectWithoutLessonSessionInput[];
    upsert?: Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionAttemptUpsertWithWhereUniqueWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionAttemptCreateManyLessonSessionInputEnvelope;
    set?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    delete?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    connect?: Prisma.QuestionAttemptWhereUniqueInput | Prisma.QuestionAttemptWhereUniqueInput[];
    update?: Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionAttemptUpdateWithWhereUniqueWithoutLessonSessionInput[];
    updateMany?: Prisma.QuestionAttemptUpdateManyWithWhereWithoutLessonSessionInput | Prisma.QuestionAttemptUpdateManyWithWhereWithoutLessonSessionInput[];
    deleteMany?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
};
export type QuestionAttemptCreateWithoutUserInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutAttemptsInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutAttemptInput;
    lessonSession?: Prisma.LessonSessionCreateNestedOneWithoutAttemptsInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutAttemptInput;
};
export type QuestionAttemptUncheckedCreateWithoutUserInput = {
    id?: string;
    questionId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptCreateOrConnectWithoutUserInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput>;
};
export type QuestionAttemptCreateManyUserInputEnvelope = {
    data: Prisma.QuestionAttemptCreateManyUserInput | Prisma.QuestionAttemptCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type QuestionAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutUserInput, Prisma.QuestionAttemptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutUserInput, Prisma.QuestionAttemptUncheckedCreateWithoutUserInput>;
};
export type QuestionAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutUserInput, Prisma.QuestionAttemptUncheckedUpdateWithoutUserInput>;
};
export type QuestionAttemptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.QuestionAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateManyMutationInput, Prisma.QuestionAttemptUncheckedUpdateManyWithoutUserInput>;
};
export type QuestionAttemptScalarWhereInput = {
    AND?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
    OR?: Prisma.QuestionAttemptScalarWhereInput[];
    NOT?: Prisma.QuestionAttemptScalarWhereInput | Prisma.QuestionAttemptScalarWhereInput[];
    id?: Prisma.StringFilter<"QuestionAttempt"> | string;
    userId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    questionId?: Prisma.StringFilter<"QuestionAttempt"> | string;
    generatedQuestionId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    lessonSessionId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    deliveryId?: Prisma.StringNullableFilter<"QuestionAttempt"> | string | null;
    answer?: Prisma.StringFilter<"QuestionAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"QuestionAttempt"> | boolean;
    timeSpent?: Prisma.IntNullableFilter<"QuestionAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"QuestionAttempt"> | Date | string;
};
export type QuestionAttemptCreateWithoutQuestionInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttemptsInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutAttemptInput;
    lessonSession?: Prisma.LessonSessionCreateNestedOneWithoutAttemptsInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutAttemptInput;
};
export type QuestionAttemptUncheckedCreateWithoutQuestionInput = {
    id?: string;
    userId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput>;
};
export type QuestionAttemptCreateManyQuestionInputEnvelope = {
    data: Prisma.QuestionAttemptCreateManyQuestionInput | Prisma.QuestionAttemptCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuestionAttemptUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutQuestionInput>;
};
export type QuestionAttemptUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutQuestionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionAttemptUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.QuestionAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateManyMutationInput, Prisma.QuestionAttemptUncheckedUpdateManyWithoutQuestionInput>;
};
export type QuestionAttemptCreateWithoutGeneratedQuestionInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttemptsInput;
    question: Prisma.QuestionCreateNestedOneWithoutAttemptsInput;
    lessonSession?: Prisma.LessonSessionCreateNestedOneWithoutAttemptsInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutAttemptInput;
};
export type QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput = {
    id?: string;
    userId: string;
    questionId: string;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptCreateOrConnectWithoutGeneratedQuestionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
};
export type QuestionAttemptUpsertWithoutGeneratedQuestionInput = {
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutGeneratedQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedCreateWithoutGeneratedQuestionInput>;
    where?: Prisma.QuestionAttemptWhereInput;
};
export type QuestionAttemptUpdateToOneWithWhereWithoutGeneratedQuestionInput = {
    where?: Prisma.QuestionAttemptWhereInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutGeneratedQuestionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type QuestionAttemptUpdateWithoutGeneratedQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAttemptsNestedInput;
    lessonSession?: Prisma.LessonSessionUpdateOneWithoutAttemptsNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutAttemptNestedInput;
};
export type QuestionAttemptUncheckedUpdateWithoutGeneratedQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptCreateWithoutDeliveryInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttemptsInput;
    question: Prisma.QuestionCreateNestedOneWithoutAttemptsInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutAttemptInput;
    lessonSession?: Prisma.LessonSessionCreateNestedOneWithoutAttemptsInput;
};
export type QuestionAttemptUncheckedCreateWithoutDeliveryInput = {
    id?: string;
    userId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptCreateOrConnectWithoutDeliveryInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
};
export type QuestionAttemptUpsertWithoutDeliveryInput = {
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedUpdateWithoutDeliveryInput>;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedCreateWithoutDeliveryInput>;
    where?: Prisma.QuestionAttemptWhereInput;
};
export type QuestionAttemptUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: Prisma.QuestionAttemptWhereInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutDeliveryInput, Prisma.QuestionAttemptUncheckedUpdateWithoutDeliveryInput>;
};
export type QuestionAttemptUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAttemptsNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutAttemptNestedInput;
    lessonSession?: Prisma.LessonSessionUpdateOneWithoutAttemptsNestedInput;
};
export type QuestionAttemptUncheckedUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptCreateWithoutLessonSessionInput = {
    id?: string;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAttemptsInput;
    question: Prisma.QuestionCreateNestedOneWithoutAttemptsInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutAttemptInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutAttemptInput;
};
export type QuestionAttemptUncheckedCreateWithoutLessonSessionInput = {
    id?: string;
    userId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptCreateOrConnectWithoutLessonSessionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput>;
};
export type QuestionAttemptCreateManyLessonSessionInputEnvelope = {
    data: Prisma.QuestionAttemptCreateManyLessonSessionInput | Prisma.QuestionAttemptCreateManyLessonSessionInput[];
    skipDuplicates?: boolean;
};
export type QuestionAttemptUpsertWithWhereUniqueWithoutLessonSessionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutLessonSessionInput>;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedCreateWithoutLessonSessionInput>;
};
export type QuestionAttemptUpdateWithWhereUniqueWithoutLessonSessionInput = {
    where: Prisma.QuestionAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateWithoutLessonSessionInput, Prisma.QuestionAttemptUncheckedUpdateWithoutLessonSessionInput>;
};
export type QuestionAttemptUpdateManyWithWhereWithoutLessonSessionInput = {
    where: Prisma.QuestionAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateManyMutationInput, Prisma.QuestionAttemptUncheckedUpdateManyWithoutLessonSessionInput>;
};
export type QuestionAttemptCreateManyUserInput = {
    id?: string;
    questionId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAttemptsNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutAttemptNestedInput;
    lessonSession?: Prisma.LessonSessionUpdateOneWithoutAttemptsNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutAttemptNestedInput;
};
export type QuestionAttemptUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptCreateManyQuestionInput = {
    id?: string;
    userId: string;
    generatedQuestionId?: string | null;
    lessonSessionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutAttemptNestedInput;
    lessonSession?: Prisma.LessonSessionUpdateOneWithoutAttemptsNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutAttemptNestedInput;
};
export type QuestionAttemptUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lessonSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptCreateManyLessonSessionInput = {
    id?: string;
    userId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    deliveryId?: string | null;
    answer: string;
    isCorrect: boolean;
    timeSpent?: number | null;
    createdAt?: Date | string;
};
export type QuestionAttemptUpdateWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAttemptsNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutAttemptNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutAttemptNestedInput;
};
export type QuestionAttemptUncheckedUpdateWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptUncheckedUpdateManyWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timeSpent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    lessonSessionId?: boolean;
    deliveryId?: boolean;
    answer?: boolean;
    isCorrect?: boolean;
    timeSpent?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["questionAttempt"]>;
export type QuestionAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    lessonSessionId?: boolean;
    deliveryId?: boolean;
    answer?: boolean;
    isCorrect?: boolean;
    timeSpent?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["questionAttempt"]>;
export type QuestionAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    lessonSessionId?: boolean;
    deliveryId?: boolean;
    answer?: boolean;
    isCorrect?: boolean;
    timeSpent?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["questionAttempt"]>;
export type QuestionAttemptSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    lessonSessionId?: boolean;
    deliveryId?: boolean;
    answer?: boolean;
    isCorrect?: boolean;
    timeSpent?: boolean;
    createdAt?: boolean;
};
export type QuestionAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "questionId" | "generatedQuestionId" | "lessonSessionId" | "deliveryId" | "answer" | "isCorrect" | "timeSpent" | "createdAt", ExtArgs["result"]["questionAttempt"]>;
export type QuestionAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
};
export type QuestionAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
};
export type QuestionAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>;
    lessonSession?: boolean | Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>;
    delivery?: boolean | Prisma.QuestionAttempt$deliveryArgs<ExtArgs>;
};
export type $QuestionAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuestionAttempt";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
        generatedQuestion: Prisma.$GeneratedQuestionPayload<ExtArgs> | null;
        lessonSession: Prisma.$LessonSessionPayload<ExtArgs> | null;
        delivery: Prisma.$QuestionDeliveryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        questionId: string;
        generatedQuestionId: string | null;
        lessonSessionId: string | null;
        deliveryId: string | null;
        answer: string;
        isCorrect: boolean;
        timeSpent: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["questionAttempt"]>;
    composites: {};
};
export type QuestionAttemptGetPayload<S extends boolean | null | undefined | QuestionAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload, S>;
export type QuestionAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionAttemptCountAggregateInputType | true;
};
export interface QuestionAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuestionAttempt'];
        meta: {
            name: 'QuestionAttempt';
        };
    };
    findUnique<T extends QuestionAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionAttemptCreateArgs>(args: Prisma.SelectSubset<T, QuestionAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionAttemptDeleteArgs>(args: Prisma.SelectSubset<T, QuestionAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionAttemptUpdateArgs>(args: Prisma.SelectSubset<T, QuestionAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionAttemptUpsertArgs>(args: Prisma.SelectSubset<T, QuestionAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionAttemptCountArgs>(args?: Prisma.Subset<T, QuestionAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionAttemptCountAggregateOutputType> : number>;
    aggregate<T extends QuestionAttemptAggregateArgs>(args: Prisma.Subset<T, QuestionAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuestionAttemptAggregateType<T>>;
    groupBy<T extends QuestionAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionAttemptFieldRefs;
}
export interface Prisma__QuestionAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    generatedQuestion<T extends Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionAttempt$generatedQuestionArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessonSession<T extends Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionAttempt$lessonSessionArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    delivery<T extends Prisma.QuestionAttempt$deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionAttempt$deliveryArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly userId: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly generatedQuestionId: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly lessonSessionId: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly deliveryId: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly answer: Prisma.FieldRef<"QuestionAttempt", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"QuestionAttempt", 'Boolean'>;
    readonly timeSpent: Prisma.FieldRef<"QuestionAttempt", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"QuestionAttempt", 'DateTime'>;
}
export type QuestionAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionAttemptCreateInput, Prisma.QuestionAttemptUncheckedCreateInput>;
};
export type QuestionAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionAttemptCreateManyInput | Prisma.QuestionAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    data: Prisma.QuestionAttemptCreateManyInput | Prisma.QuestionAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateInput, Prisma.QuestionAttemptUncheckedUpdateInput>;
    where: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateManyMutationInput, Prisma.QuestionAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuestionAttemptWhereInput;
    limit?: number;
};
export type QuestionAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionAttemptUpdateManyMutationInput, Prisma.QuestionAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuestionAttemptWhereInput;
    limit?: number;
    include?: Prisma.QuestionAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where: Prisma.QuestionAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionAttemptCreateInput, Prisma.QuestionAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionAttemptUpdateInput, Prisma.QuestionAttemptUncheckedUpdateInput>;
};
export type QuestionAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where: Prisma.QuestionAttemptWhereUniqueInput;
};
export type QuestionAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionAttemptWhereInput;
    limit?: number;
};
export type QuestionAttempt$generatedQuestionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where?: Prisma.GeneratedQuestionWhereInput;
};
export type QuestionAttempt$lessonSessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSessionSelect<ExtArgs> | null;
    omit?: Prisma.LessonSessionOmit<ExtArgs> | null;
    include?: Prisma.LessonSessionInclude<ExtArgs> | null;
    where?: Prisma.LessonSessionWhereInput;
};
export type QuestionAttempt$deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where?: Prisma.QuestionDeliveryWhereInput;
};
export type QuestionAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
};
