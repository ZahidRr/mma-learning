import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GeneratedQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$GeneratedQuestionPayload>;
export type AggregateGeneratedQuestion = {
    _count: GeneratedQuestionCountAggregateOutputType | null;
    _min: GeneratedQuestionMinAggregateOutputType | null;
    _max: GeneratedQuestionMaxAggregateOutputType | null;
};
export type GeneratedQuestionMinAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    prompt: string | null;
    correctAnswer: string | null;
    createdAt: Date | null;
};
export type GeneratedQuestionMaxAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    prompt: string | null;
    correctAnswer: string | null;
    createdAt: Date | null;
};
export type GeneratedQuestionCountAggregateOutputType = {
    id: number;
    questionId: number;
    prompt: number;
    correctAnswer: number;
    variables: number;
    createdAt: number;
    _all: number;
};
export type GeneratedQuestionMinAggregateInputType = {
    id?: true;
    questionId?: true;
    prompt?: true;
    correctAnswer?: true;
    createdAt?: true;
};
export type GeneratedQuestionMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    prompt?: true;
    correctAnswer?: true;
    createdAt?: true;
};
export type GeneratedQuestionCountAggregateInputType = {
    id?: true;
    questionId?: true;
    prompt?: true;
    correctAnswer?: true;
    variables?: true;
    createdAt?: true;
    _all?: true;
};
export type GeneratedQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedQuestionWhereInput;
    orderBy?: Prisma.GeneratedQuestionOrderByWithRelationInput | Prisma.GeneratedQuestionOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GeneratedQuestionCountAggregateInputType;
    _min?: GeneratedQuestionMinAggregateInputType;
    _max?: GeneratedQuestionMaxAggregateInputType;
};
export type GetGeneratedQuestionAggregateType<T extends GeneratedQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateGeneratedQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGeneratedQuestion[P]> : Prisma.GetScalarType<T[P], AggregateGeneratedQuestion[P]>;
};
export type GeneratedQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedQuestionWhereInput;
    orderBy?: Prisma.GeneratedQuestionOrderByWithAggregationInput | Prisma.GeneratedQuestionOrderByWithAggregationInput[];
    by: Prisma.GeneratedQuestionScalarFieldEnum[] | Prisma.GeneratedQuestionScalarFieldEnum;
    having?: Prisma.GeneratedQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GeneratedQuestionCountAggregateInputType | true;
    _min?: GeneratedQuestionMinAggregateInputType;
    _max?: GeneratedQuestionMaxAggregateInputType;
};
export type GeneratedQuestionGroupByOutputType = {
    id: string;
    questionId: string;
    prompt: string;
    correctAnswer: string;
    variables: runtime.JsonValue | null;
    createdAt: Date;
    _count: GeneratedQuestionCountAggregateOutputType | null;
    _min: GeneratedQuestionMinAggregateOutputType | null;
    _max: GeneratedQuestionMaxAggregateOutputType | null;
};
export type GetGeneratedQuestionGroupByPayload<T extends GeneratedQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GeneratedQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GeneratedQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GeneratedQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GeneratedQuestionGroupByOutputType[P]>;
}>>;
export type GeneratedQuestionWhereInput = {
    AND?: Prisma.GeneratedQuestionWhereInput | Prisma.GeneratedQuestionWhereInput[];
    OR?: Prisma.GeneratedQuestionWhereInput[];
    NOT?: Prisma.GeneratedQuestionWhereInput | Prisma.GeneratedQuestionWhereInput[];
    id?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    questionId?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    prompt?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    variables?: Prisma.JsonNullableFilter<"GeneratedQuestion">;
    createdAt?: Prisma.DateTimeFilter<"GeneratedQuestion"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    attempt?: Prisma.XOR<Prisma.QuestionAttemptNullableScalarRelationFilter, Prisma.QuestionAttemptWhereInput> | null;
    delivery?: Prisma.XOR<Prisma.QuestionDeliveryNullableScalarRelationFilter, Prisma.QuestionDeliveryWhereInput> | null;
};
export type GeneratedQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    question?: Prisma.QuestionOrderByWithRelationInput;
    attempt?: Prisma.QuestionAttemptOrderByWithRelationInput;
    delivery?: Prisma.QuestionDeliveryOrderByWithRelationInput;
};
export type GeneratedQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GeneratedQuestionWhereInput | Prisma.GeneratedQuestionWhereInput[];
    OR?: Prisma.GeneratedQuestionWhereInput[];
    NOT?: Prisma.GeneratedQuestionWhereInput | Prisma.GeneratedQuestionWhereInput[];
    questionId?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    prompt?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    variables?: Prisma.JsonNullableFilter<"GeneratedQuestion">;
    createdAt?: Prisma.DateTimeFilter<"GeneratedQuestion"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    attempt?: Prisma.XOR<Prisma.QuestionAttemptNullableScalarRelationFilter, Prisma.QuestionAttemptWhereInput> | null;
    delivery?: Prisma.XOR<Prisma.QuestionDeliveryNullableScalarRelationFilter, Prisma.QuestionDeliveryWhereInput> | null;
}, "id">;
export type GeneratedQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GeneratedQuestionCountOrderByAggregateInput;
    _max?: Prisma.GeneratedQuestionMaxOrderByAggregateInput;
    _min?: Prisma.GeneratedQuestionMinOrderByAggregateInput;
};
export type GeneratedQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.GeneratedQuestionScalarWhereWithAggregatesInput | Prisma.GeneratedQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.GeneratedQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GeneratedQuestionScalarWhereWithAggregatesInput | Prisma.GeneratedQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GeneratedQuestion"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"GeneratedQuestion"> | string;
    prompt?: Prisma.StringWithAggregatesFilter<"GeneratedQuestion"> | string;
    correctAnswer?: Prisma.StringWithAggregatesFilter<"GeneratedQuestion"> | string;
    variables?: Prisma.JsonNullableWithAggregatesFilter<"GeneratedQuestion">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GeneratedQuestion"> | Date | string;
};
export type GeneratedQuestionCreateInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutGeneratedQuestionsInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutGeneratedQuestionInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionUncheckedCreateInput = {
    id?: string;
    questionId: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
    delivery?: Prisma.QuestionDeliveryUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutGeneratedQuestionsNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutGeneratedQuestionNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
    delivery?: Prisma.QuestionDeliveryUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionCreateManyInput = {
    id?: string;
    questionId: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type GeneratedQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedQuestionListRelationFilter = {
    every?: Prisma.GeneratedQuestionWhereInput;
    some?: Prisma.GeneratedQuestionWhereInput;
    none?: Prisma.GeneratedQuestionWhereInput;
};
export type GeneratedQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GeneratedQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    variables?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedQuestionNullableScalarRelationFilter = {
    is?: Prisma.GeneratedQuestionWhereInput | null;
    isNot?: Prisma.GeneratedQuestionWhereInput | null;
};
export type GeneratedQuestionCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput> | Prisma.GeneratedQuestionCreateWithoutQuestionInput[] | Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput | Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.GeneratedQuestionCreateManyQuestionInputEnvelope;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
};
export type GeneratedQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput> | Prisma.GeneratedQuestionCreateWithoutQuestionInput[] | Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput | Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.GeneratedQuestionCreateManyQuestionInputEnvelope;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
};
export type GeneratedQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput> | Prisma.GeneratedQuestionCreateWithoutQuestionInput[] | Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput | Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.GeneratedQuestionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.GeneratedQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.GeneratedQuestionCreateManyQuestionInputEnvelope;
    set?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    disconnect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    delete?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    connect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    update?: Prisma.GeneratedQuestionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.GeneratedQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.GeneratedQuestionUpdateManyWithWhereWithoutQuestionInput | Prisma.GeneratedQuestionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.GeneratedQuestionScalarWhereInput | Prisma.GeneratedQuestionScalarWhereInput[];
};
export type GeneratedQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput> | Prisma.GeneratedQuestionCreateWithoutQuestionInput[] | Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput | Prisma.GeneratedQuestionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.GeneratedQuestionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.GeneratedQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.GeneratedQuestionCreateManyQuestionInputEnvelope;
    set?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    disconnect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    delete?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    connect?: Prisma.GeneratedQuestionWhereUniqueInput | Prisma.GeneratedQuestionWhereUniqueInput[];
    update?: Prisma.GeneratedQuestionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.GeneratedQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.GeneratedQuestionUpdateManyWithWhereWithoutQuestionInput | Prisma.GeneratedQuestionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.GeneratedQuestionScalarWhereInput | Prisma.GeneratedQuestionScalarWhereInput[];
};
export type GeneratedQuestionCreateNestedOneWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutDeliveryInput;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionUpdateOneWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutDeliveryInput;
    upsert?: Prisma.GeneratedQuestionUpsertWithoutDeliveryInput;
    disconnect?: Prisma.GeneratedQuestionWhereInput | boolean;
    delete?: Prisma.GeneratedQuestionWhereInput | boolean;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GeneratedQuestionUpdateToOneWithWhereWithoutDeliveryInput, Prisma.GeneratedQuestionUpdateWithoutDeliveryInput>, Prisma.GeneratedQuestionUncheckedUpdateWithoutDeliveryInput>;
};
export type GeneratedQuestionCreateNestedOneWithoutAttemptInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedCreateWithoutAttemptInput>;
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutAttemptInput;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionUpdateOneWithoutAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedCreateWithoutAttemptInput>;
    connectOrCreate?: Prisma.GeneratedQuestionCreateOrConnectWithoutAttemptInput;
    upsert?: Prisma.GeneratedQuestionUpsertWithoutAttemptInput;
    disconnect?: Prisma.GeneratedQuestionWhereInput | boolean;
    delete?: Prisma.GeneratedQuestionWhereInput | boolean;
    connect?: Prisma.GeneratedQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GeneratedQuestionUpdateToOneWithWhereWithoutAttemptInput, Prisma.GeneratedQuestionUpdateWithoutAttemptInput>, Prisma.GeneratedQuestionUncheckedUpdateWithoutAttemptInput>;
};
export type GeneratedQuestionCreateWithoutQuestionInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutGeneratedQuestionInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
    delivery?: Prisma.QuestionDeliveryUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionCreateOrConnectWithoutQuestionInput = {
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput>;
};
export type GeneratedQuestionCreateManyQuestionInputEnvelope = {
    data: Prisma.GeneratedQuestionCreateManyQuestionInput | Prisma.GeneratedQuestionCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type GeneratedQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedCreateWithoutQuestionInput>;
};
export type GeneratedQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutQuestionInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutQuestionInput>;
};
export type GeneratedQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.GeneratedQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateManyMutationInput, Prisma.GeneratedQuestionUncheckedUpdateManyWithoutQuestionInput>;
};
export type GeneratedQuestionScalarWhereInput = {
    AND?: Prisma.GeneratedQuestionScalarWhereInput | Prisma.GeneratedQuestionScalarWhereInput[];
    OR?: Prisma.GeneratedQuestionScalarWhereInput[];
    NOT?: Prisma.GeneratedQuestionScalarWhereInput | Prisma.GeneratedQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    questionId?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    prompt?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"GeneratedQuestion"> | string;
    variables?: Prisma.JsonNullableFilter<"GeneratedQuestion">;
    createdAt?: Prisma.DateTimeFilter<"GeneratedQuestion"> | Date | string;
};
export type GeneratedQuestionCreateWithoutDeliveryInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutGeneratedQuestionsInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionUncheckedCreateWithoutDeliveryInput = {
    id?: string;
    questionId: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionCreateOrConnectWithoutDeliveryInput = {
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedCreateWithoutDeliveryInput>;
};
export type GeneratedQuestionUpsertWithoutDeliveryInput = {
    update: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutDeliveryInput>;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedCreateWithoutDeliveryInput>;
    where?: Prisma.GeneratedQuestionWhereInput;
};
export type GeneratedQuestionUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: Prisma.GeneratedQuestionWhereInput;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutDeliveryInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutDeliveryInput>;
};
export type GeneratedQuestionUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutGeneratedQuestionsNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionUncheckedUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionCreateWithoutAttemptInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutGeneratedQuestionsInput;
    delivery?: Prisma.QuestionDeliveryCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionUncheckedCreateWithoutAttemptInput = {
    id?: string;
    questionId: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    delivery?: Prisma.QuestionDeliveryUncheckedCreateNestedOneWithoutGeneratedQuestionInput;
};
export type GeneratedQuestionCreateOrConnectWithoutAttemptInput = {
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedCreateWithoutAttemptInput>;
};
export type GeneratedQuestionUpsertWithoutAttemptInput = {
    update: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutAttemptInput>;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedCreateWithoutAttemptInput>;
    where?: Prisma.GeneratedQuestionWhereInput;
};
export type GeneratedQuestionUpdateToOneWithWhereWithoutAttemptInput = {
    where?: Prisma.GeneratedQuestionWhereInput;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateWithoutAttemptInput, Prisma.GeneratedQuestionUncheckedUpdateWithoutAttemptInput>;
};
export type GeneratedQuestionUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutGeneratedQuestionsNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionUncheckedUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivery?: Prisma.QuestionDeliveryUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionCreateManyQuestionInput = {
    id?: string;
    prompt: string;
    correctAnswer: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type GeneratedQuestionUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutGeneratedQuestionNestedInput;
    delivery?: Prisma.QuestionDeliveryUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
    delivery?: Prisma.QuestionDeliveryUncheckedUpdateOneWithoutGeneratedQuestionNestedInput;
};
export type GeneratedQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    prompt?: boolean;
    correctAnswer?: boolean;
    variables?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    attempt?: boolean | Prisma.GeneratedQuestion$attemptArgs<ExtArgs>;
    delivery?: boolean | Prisma.GeneratedQuestion$deliveryArgs<ExtArgs>;
}, ExtArgs["result"]["generatedQuestion"]>;
export type GeneratedQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    prompt?: boolean;
    correctAnswer?: boolean;
    variables?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedQuestion"]>;
export type GeneratedQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    prompt?: boolean;
    correctAnswer?: boolean;
    variables?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedQuestion"]>;
export type GeneratedQuestionSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    prompt?: boolean;
    correctAnswer?: boolean;
    variables?: boolean;
    createdAt?: boolean;
};
export type GeneratedQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "questionId" | "prompt" | "correctAnswer" | "variables" | "createdAt", ExtArgs["result"]["generatedQuestion"]>;
export type GeneratedQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    attempt?: boolean | Prisma.GeneratedQuestion$attemptArgs<ExtArgs>;
    delivery?: boolean | Prisma.GeneratedQuestion$deliveryArgs<ExtArgs>;
};
export type GeneratedQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type GeneratedQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $GeneratedQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GeneratedQuestion";
    objects: {
        question: Prisma.$QuestionPayload<ExtArgs>;
        attempt: Prisma.$QuestionAttemptPayload<ExtArgs> | null;
        delivery: Prisma.$QuestionDeliveryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        questionId: string;
        prompt: string;
        correctAnswer: string;
        variables: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["generatedQuestion"]>;
    composites: {};
};
export type GeneratedQuestionGetPayload<S extends boolean | null | undefined | GeneratedQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload, S>;
export type GeneratedQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GeneratedQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GeneratedQuestionCountAggregateInputType | true;
};
export interface GeneratedQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GeneratedQuestion'];
        meta: {
            name: 'GeneratedQuestion';
        };
    };
    findUnique<T extends GeneratedQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GeneratedQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GeneratedQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GeneratedQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GeneratedQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GeneratedQuestionCreateArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GeneratedQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GeneratedQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GeneratedQuestionDeleteArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GeneratedQuestionUpdateArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GeneratedQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, GeneratedQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GeneratedQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GeneratedQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GeneratedQuestionUpsertArgs>(args: Prisma.SelectSubset<T, GeneratedQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GeneratedQuestionCountArgs>(args?: Prisma.Subset<T, GeneratedQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GeneratedQuestionCountAggregateOutputType> : number>;
    aggregate<T extends GeneratedQuestionAggregateArgs>(args: Prisma.Subset<T, GeneratedQuestionAggregateArgs>): Prisma.PrismaPromise<GetGeneratedQuestionAggregateType<T>>;
    groupBy<T extends GeneratedQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GeneratedQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: GeneratedQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GeneratedQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GeneratedQuestionFieldRefs;
}
export interface Prisma__GeneratedQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attempt<T extends Prisma.GeneratedQuestion$attemptArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GeneratedQuestion$attemptArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    delivery<T extends Prisma.GeneratedQuestion$deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GeneratedQuestion$deliveryArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GeneratedQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"GeneratedQuestion", 'String'>;
    readonly questionId: Prisma.FieldRef<"GeneratedQuestion", 'String'>;
    readonly prompt: Prisma.FieldRef<"GeneratedQuestion", 'String'>;
    readonly correctAnswer: Prisma.FieldRef<"GeneratedQuestion", 'String'>;
    readonly variables: Prisma.FieldRef<"GeneratedQuestion", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"GeneratedQuestion", 'DateTime'>;
}
export type GeneratedQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where?: Prisma.GeneratedQuestionWhereInput;
    orderBy?: Prisma.GeneratedQuestionOrderByWithRelationInput | Prisma.GeneratedQuestionOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedQuestionScalarFieldEnum | Prisma.GeneratedQuestionScalarFieldEnum[];
};
export type GeneratedQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where?: Prisma.GeneratedQuestionWhereInput;
    orderBy?: Prisma.GeneratedQuestionOrderByWithRelationInput | Prisma.GeneratedQuestionOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedQuestionScalarFieldEnum | Prisma.GeneratedQuestionScalarFieldEnum[];
};
export type GeneratedQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where?: Prisma.GeneratedQuestionWhereInput;
    orderBy?: Prisma.GeneratedQuestionOrderByWithRelationInput | Prisma.GeneratedQuestionOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedQuestionScalarFieldEnum | Prisma.GeneratedQuestionScalarFieldEnum[];
};
export type GeneratedQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedQuestionCreateInput, Prisma.GeneratedQuestionUncheckedCreateInput>;
};
export type GeneratedQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GeneratedQuestionCreateManyInput | Prisma.GeneratedQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GeneratedQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    data: Prisma.GeneratedQuestionCreateManyInput | Prisma.GeneratedQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GeneratedQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GeneratedQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateInput, Prisma.GeneratedQuestionUncheckedUpdateInput>;
    where: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateManyMutationInput, Prisma.GeneratedQuestionUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedQuestionWhereInput;
    limit?: number;
};
export type GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedQuestionUpdateManyMutationInput, Prisma.GeneratedQuestionUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedQuestionWhereInput;
    limit?: number;
    include?: Prisma.GeneratedQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GeneratedQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where: Prisma.GeneratedQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedQuestionCreateInput, Prisma.GeneratedQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GeneratedQuestionUpdateInput, Prisma.GeneratedQuestionUncheckedUpdateInput>;
};
export type GeneratedQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where: Prisma.GeneratedQuestionWhereUniqueInput;
};
export type GeneratedQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedQuestionWhereInput;
    limit?: number;
};
export type GeneratedQuestion$attemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuestionAttemptWhereInput;
};
export type GeneratedQuestion$deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where?: Prisma.QuestionDeliveryWhereInput;
};
export type GeneratedQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
};
