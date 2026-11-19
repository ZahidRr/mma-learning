import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuestionDeliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionDeliveryPayload>;
export type AggregateQuestionDelivery = {
    _count: QuestionDeliveryCountAggregateOutputType | null;
    _min: QuestionDeliveryMinAggregateOutputType | null;
    _max: QuestionDeliveryMaxAggregateOutputType | null;
};
export type QuestionDeliveryMinAggregateOutputType = {
    id: string | null;
    lessonSessionId: string | null;
    questionId: string | null;
    generatedQuestionId: string | null;
    status: $Enums.QuestionDeliveryStatus | null;
    presentedAt: Date | null;
    answeredAt: Date | null;
};
export type QuestionDeliveryMaxAggregateOutputType = {
    id: string | null;
    lessonSessionId: string | null;
    questionId: string | null;
    generatedQuestionId: string | null;
    status: $Enums.QuestionDeliveryStatus | null;
    presentedAt: Date | null;
    answeredAt: Date | null;
};
export type QuestionDeliveryCountAggregateOutputType = {
    id: number;
    lessonSessionId: number;
    questionId: number;
    generatedQuestionId: number;
    status: number;
    presentedAt: number;
    answeredAt: number;
    _all: number;
};
export type QuestionDeliveryMinAggregateInputType = {
    id?: true;
    lessonSessionId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    status?: true;
    presentedAt?: true;
    answeredAt?: true;
};
export type QuestionDeliveryMaxAggregateInputType = {
    id?: true;
    lessonSessionId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    status?: true;
    presentedAt?: true;
    answeredAt?: true;
};
export type QuestionDeliveryCountAggregateInputType = {
    id?: true;
    lessonSessionId?: true;
    questionId?: true;
    generatedQuestionId?: true;
    status?: true;
    presentedAt?: true;
    answeredAt?: true;
    _all?: true;
};
export type QuestionDeliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionDeliveryWhereInput;
    orderBy?: Prisma.QuestionDeliveryOrderByWithRelationInput | Prisma.QuestionDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.QuestionDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionDeliveryCountAggregateInputType;
    _min?: QuestionDeliveryMinAggregateInputType;
    _max?: QuestionDeliveryMaxAggregateInputType;
};
export type GetQuestionDeliveryAggregateType<T extends QuestionDeliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestionDelivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestionDelivery[P]> : Prisma.GetScalarType<T[P], AggregateQuestionDelivery[P]>;
};
export type QuestionDeliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionDeliveryWhereInput;
    orderBy?: Prisma.QuestionDeliveryOrderByWithAggregationInput | Prisma.QuestionDeliveryOrderByWithAggregationInput[];
    by: Prisma.QuestionDeliveryScalarFieldEnum[] | Prisma.QuestionDeliveryScalarFieldEnum;
    having?: Prisma.QuestionDeliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionDeliveryCountAggregateInputType | true;
    _min?: QuestionDeliveryMinAggregateInputType;
    _max?: QuestionDeliveryMaxAggregateInputType;
};
export type QuestionDeliveryGroupByOutputType = {
    id: string;
    lessonSessionId: string;
    questionId: string;
    generatedQuestionId: string | null;
    status: $Enums.QuestionDeliveryStatus;
    presentedAt: Date;
    answeredAt: Date | null;
    _count: QuestionDeliveryCountAggregateOutputType | null;
    _min: QuestionDeliveryMinAggregateOutputType | null;
    _max: QuestionDeliveryMaxAggregateOutputType | null;
};
export type GetQuestionDeliveryGroupByPayload<T extends QuestionDeliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionDeliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionDeliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionDeliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionDeliveryGroupByOutputType[P]>;
}>>;
export type QuestionDeliveryWhereInput = {
    AND?: Prisma.QuestionDeliveryWhereInput | Prisma.QuestionDeliveryWhereInput[];
    OR?: Prisma.QuestionDeliveryWhereInput[];
    NOT?: Prisma.QuestionDeliveryWhereInput | Prisma.QuestionDeliveryWhereInput[];
    id?: Prisma.StringFilter<"QuestionDelivery"> | string;
    lessonSessionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    questionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    generatedQuestionId?: Prisma.StringNullableFilter<"QuestionDelivery"> | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFilter<"QuestionDelivery"> | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFilter<"QuestionDelivery"> | Date | string;
    answeredAt?: Prisma.DateTimeNullableFilter<"QuestionDelivery"> | Date | string | null;
    lessonSession?: Prisma.XOR<Prisma.LessonSessionScalarRelationFilter, Prisma.LessonSessionWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    generatedQuestion?: Prisma.XOR<Prisma.GeneratedQuestionNullableScalarRelationFilter, Prisma.GeneratedQuestionWhereInput> | null;
    attempt?: Prisma.XOR<Prisma.QuestionAttemptNullableScalarRelationFilter, Prisma.QuestionAttemptWhereInput> | null;
};
export type QuestionDeliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    presentedAt?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessonSession?: Prisma.LessonSessionOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
    generatedQuestion?: Prisma.GeneratedQuestionOrderByWithRelationInput;
    attempt?: Prisma.QuestionAttemptOrderByWithRelationInput;
};
export type QuestionDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    generatedQuestionId?: string;
    AND?: Prisma.QuestionDeliveryWhereInput | Prisma.QuestionDeliveryWhereInput[];
    OR?: Prisma.QuestionDeliveryWhereInput[];
    NOT?: Prisma.QuestionDeliveryWhereInput | Prisma.QuestionDeliveryWhereInput[];
    lessonSessionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    questionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    status?: Prisma.EnumQuestionDeliveryStatusFilter<"QuestionDelivery"> | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFilter<"QuestionDelivery"> | Date | string;
    answeredAt?: Prisma.DateTimeNullableFilter<"QuestionDelivery"> | Date | string | null;
    lessonSession?: Prisma.XOR<Prisma.LessonSessionScalarRelationFilter, Prisma.LessonSessionWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    generatedQuestion?: Prisma.XOR<Prisma.GeneratedQuestionNullableScalarRelationFilter, Prisma.GeneratedQuestionWhereInput> | null;
    attempt?: Prisma.XOR<Prisma.QuestionAttemptNullableScalarRelationFilter, Prisma.QuestionAttemptWhereInput> | null;
}, "id" | "generatedQuestionId">;
export type QuestionDeliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    presentedAt?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuestionDeliveryCountOrderByAggregateInput;
    _max?: Prisma.QuestionDeliveryMaxOrderByAggregateInput;
    _min?: Prisma.QuestionDeliveryMinOrderByAggregateInput;
};
export type QuestionDeliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionDeliveryScalarWhereWithAggregatesInput | Prisma.QuestionDeliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionDeliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionDeliveryScalarWhereWithAggregatesInput | Prisma.QuestionDeliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuestionDelivery"> | string;
    lessonSessionId?: Prisma.StringWithAggregatesFilter<"QuestionDelivery"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuestionDelivery"> | string;
    generatedQuestionId?: Prisma.StringNullableWithAggregatesFilter<"QuestionDelivery"> | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusWithAggregatesFilter<"QuestionDelivery"> | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeWithAggregatesFilter<"QuestionDelivery"> | Date | string;
    answeredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"QuestionDelivery"> | Date | string | null;
};
export type QuestionDeliveryCreateInput = {
    id?: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    lessonSession: Prisma.LessonSessionCreateNestedOneWithoutDeliveriesInput;
    question: Prisma.QuestionCreateNestedOneWithoutDeliveriesInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutDeliveryInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUncheckedCreateInput = {
    id?: string;
    lessonSessionId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessonSession?: Prisma.LessonSessionUpdateOneRequiredWithoutDeliveriesNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutDeliveriesNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutDeliveryNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryCreateManyInput = {
    id?: string;
    lessonSessionId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
};
export type QuestionDeliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionDeliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionDeliveryListRelationFilter = {
    every?: Prisma.QuestionDeliveryWhereInput;
    some?: Prisma.QuestionDeliveryWhereInput;
    none?: Prisma.QuestionDeliveryWhereInput;
};
export type QuestionDeliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuestionDeliveryNullableScalarRelationFilter = {
    is?: Prisma.QuestionDeliveryWhereInput | null;
    isNot?: Prisma.QuestionDeliveryWhereInput | null;
};
export type QuestionDeliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    presentedAt?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type QuestionDeliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    presentedAt?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type QuestionDeliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonSessionId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    generatedQuestionId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    presentedAt?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type QuestionDeliveryCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput> | Prisma.QuestionDeliveryCreateWithoutQuestionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
};
export type QuestionDeliveryUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput> | Prisma.QuestionDeliveryCreateWithoutQuestionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
};
export type QuestionDeliveryUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput> | Prisma.QuestionDeliveryCreateWithoutQuestionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    disconnect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    delete?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    update?: Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionDeliveryUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionDeliveryUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
};
export type QuestionDeliveryUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput> | Prisma.QuestionDeliveryCreateWithoutQuestionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    disconnect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    delete?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    update?: Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionDeliveryUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionDeliveryUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
};
export type QuestionDeliveryCreateNestedOneWithoutGeneratedQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutGeneratedQuestionInput;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryUncheckedCreateNestedOneWithoutGeneratedQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutGeneratedQuestionInput;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryUpdateOneWithoutGeneratedQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutGeneratedQuestionInput;
    upsert?: Prisma.QuestionDeliveryUpsertWithoutGeneratedQuestionInput;
    disconnect?: Prisma.QuestionDeliveryWhereInput | boolean;
    delete?: Prisma.QuestionDeliveryWhereInput | boolean;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionDeliveryUpdateToOneWithWhereWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUpdateWithoutGeneratedQuestionInput>, Prisma.QuestionDeliveryUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type QuestionDeliveryUncheckedUpdateOneWithoutGeneratedQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutGeneratedQuestionInput;
    upsert?: Prisma.QuestionDeliveryUpsertWithoutGeneratedQuestionInput;
    disconnect?: Prisma.QuestionDeliveryWhereInput | boolean;
    delete?: Prisma.QuestionDeliveryWhereInput | boolean;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionDeliveryUpdateToOneWithWhereWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUpdateWithoutGeneratedQuestionInput>, Prisma.QuestionDeliveryUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type EnumQuestionDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestionDeliveryStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type QuestionDeliveryCreateNestedOneWithoutAttemptInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedCreateWithoutAttemptInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutAttemptInput;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryUpdateOneWithoutAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedCreateWithoutAttemptInput>;
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutAttemptInput;
    upsert?: Prisma.QuestionDeliveryUpsertWithoutAttemptInput;
    disconnect?: Prisma.QuestionDeliveryWhereInput | boolean;
    delete?: Prisma.QuestionDeliveryWhereInput | boolean;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionDeliveryUpdateToOneWithWhereWithoutAttemptInput, Prisma.QuestionDeliveryUpdateWithoutAttemptInput>, Prisma.QuestionDeliveryUncheckedUpdateWithoutAttemptInput>;
};
export type QuestionDeliveryCreateNestedManyWithoutLessonSessionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionDeliveryCreateWithoutLessonSessionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyLessonSessionInputEnvelope;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
};
export type QuestionDeliveryUncheckedCreateNestedManyWithoutLessonSessionInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionDeliveryCreateWithoutLessonSessionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyLessonSessionInputEnvelope;
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
};
export type QuestionDeliveryUpdateManyWithoutLessonSessionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionDeliveryCreateWithoutLessonSessionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput[];
    upsert?: Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyLessonSessionInputEnvelope;
    set?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    disconnect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    delete?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    update?: Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutLessonSessionInput[];
    updateMany?: Prisma.QuestionDeliveryUpdateManyWithWhereWithoutLessonSessionInput | Prisma.QuestionDeliveryUpdateManyWithWhereWithoutLessonSessionInput[];
    deleteMany?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
};
export type QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput> | Prisma.QuestionDeliveryCreateWithoutLessonSessionInput[] | Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput[];
    connectOrCreate?: Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput | Prisma.QuestionDeliveryCreateOrConnectWithoutLessonSessionInput[];
    upsert?: Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionDeliveryUpsertWithWhereUniqueWithoutLessonSessionInput[];
    createMany?: Prisma.QuestionDeliveryCreateManyLessonSessionInputEnvelope;
    set?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    disconnect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    delete?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    connect?: Prisma.QuestionDeliveryWhereUniqueInput | Prisma.QuestionDeliveryWhereUniqueInput[];
    update?: Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutLessonSessionInput | Prisma.QuestionDeliveryUpdateWithWhereUniqueWithoutLessonSessionInput[];
    updateMany?: Prisma.QuestionDeliveryUpdateManyWithWhereWithoutLessonSessionInput | Prisma.QuestionDeliveryUpdateManyWithWhereWithoutLessonSessionInput[];
    deleteMany?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
};
export type QuestionDeliveryCreateWithoutQuestionInput = {
    id?: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    lessonSession: Prisma.LessonSessionCreateNestedOneWithoutDeliveriesInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutDeliveryInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUncheckedCreateWithoutQuestionInput = {
    id?: string;
    lessonSessionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput>;
};
export type QuestionDeliveryCreateManyQuestionInputEnvelope = {
    data: Prisma.QuestionDeliveryCreateManyQuestionInput | Prisma.QuestionDeliveryCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuestionDeliveryUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutQuestionInput>;
};
export type QuestionDeliveryUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutQuestionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionDeliveryUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.QuestionDeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateManyMutationInput, Prisma.QuestionDeliveryUncheckedUpdateManyWithoutQuestionInput>;
};
export type QuestionDeliveryScalarWhereInput = {
    AND?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
    OR?: Prisma.QuestionDeliveryScalarWhereInput[];
    NOT?: Prisma.QuestionDeliveryScalarWhereInput | Prisma.QuestionDeliveryScalarWhereInput[];
    id?: Prisma.StringFilter<"QuestionDelivery"> | string;
    lessonSessionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    questionId?: Prisma.StringFilter<"QuestionDelivery"> | string;
    generatedQuestionId?: Prisma.StringNullableFilter<"QuestionDelivery"> | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFilter<"QuestionDelivery"> | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFilter<"QuestionDelivery"> | Date | string;
    answeredAt?: Prisma.DateTimeNullableFilter<"QuestionDelivery"> | Date | string | null;
};
export type QuestionDeliveryCreateWithoutGeneratedQuestionInput = {
    id?: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    lessonSession: Prisma.LessonSessionCreateNestedOneWithoutDeliveriesInput;
    question: Prisma.QuestionCreateNestedOneWithoutDeliveriesInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput = {
    id?: string;
    lessonSessionId: string;
    questionId: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryCreateOrConnectWithoutGeneratedQuestionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
};
export type QuestionDeliveryUpsertWithoutGeneratedQuestionInput = {
    update: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutGeneratedQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutGeneratedQuestionInput>;
    where?: Prisma.QuestionDeliveryWhereInput;
};
export type QuestionDeliveryUpdateToOneWithWhereWithoutGeneratedQuestionInput = {
    where?: Prisma.QuestionDeliveryWhereInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutGeneratedQuestionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutGeneratedQuestionInput>;
};
export type QuestionDeliveryUpdateWithoutGeneratedQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessonSession?: Prisma.LessonSessionUpdateOneRequiredWithoutDeliveriesNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutDeliveriesNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateWithoutGeneratedQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryCreateWithoutAttemptInput = {
    id?: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    lessonSession: Prisma.LessonSessionCreateNestedOneWithoutDeliveriesInput;
    question: Prisma.QuestionCreateNestedOneWithoutDeliveriesInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUncheckedCreateWithoutAttemptInput = {
    id?: string;
    lessonSessionId: string;
    questionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
};
export type QuestionDeliveryCreateOrConnectWithoutAttemptInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedCreateWithoutAttemptInput>;
};
export type QuestionDeliveryUpsertWithoutAttemptInput = {
    update: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutAttemptInput>;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedCreateWithoutAttemptInput>;
    where?: Prisma.QuestionDeliveryWhereInput;
};
export type QuestionDeliveryUpdateToOneWithWhereWithoutAttemptInput = {
    where?: Prisma.QuestionDeliveryWhereInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutAttemptInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutAttemptInput>;
};
export type QuestionDeliveryUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessonSession?: Prisma.LessonSessionUpdateOneRequiredWithoutDeliveriesNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutDeliveriesNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionDeliveryCreateWithoutLessonSessionInput = {
    id?: string;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    question: Prisma.QuestionCreateNestedOneWithoutDeliveriesInput;
    generatedQuestion?: Prisma.GeneratedQuestionCreateNestedOneWithoutDeliveryInput;
    attempt?: Prisma.QuestionAttemptCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryUncheckedCreateWithoutLessonSessionInput = {
    id?: string;
    questionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedCreateNestedOneWithoutDeliveryInput;
};
export type QuestionDeliveryCreateOrConnectWithoutLessonSessionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput>;
};
export type QuestionDeliveryCreateManyLessonSessionInputEnvelope = {
    data: Prisma.QuestionDeliveryCreateManyLessonSessionInput | Prisma.QuestionDeliveryCreateManyLessonSessionInput[];
    skipDuplicates?: boolean;
};
export type QuestionDeliveryUpsertWithWhereUniqueWithoutLessonSessionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutLessonSessionInput>;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedCreateWithoutLessonSessionInput>;
};
export type QuestionDeliveryUpdateWithWhereUniqueWithoutLessonSessionInput = {
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateWithoutLessonSessionInput, Prisma.QuestionDeliveryUncheckedUpdateWithoutLessonSessionInput>;
};
export type QuestionDeliveryUpdateManyWithWhereWithoutLessonSessionInput = {
    where: Prisma.QuestionDeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateManyMutationInput, Prisma.QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionInput>;
};
export type QuestionDeliveryCreateManyQuestionInput = {
    id?: string;
    lessonSessionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
};
export type QuestionDeliveryUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessonSession?: Prisma.LessonSessionUpdateOneRequiredWithoutDeliveriesNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutDeliveryNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionDeliveryCreateManyLessonSessionInput = {
    id?: string;
    questionId: string;
    generatedQuestionId?: string | null;
    status?: $Enums.QuestionDeliveryStatus;
    presentedAt?: Date | string;
    answeredAt?: Date | string | null;
};
export type QuestionDeliveryUpdateWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    question?: Prisma.QuestionUpdateOneRequiredWithoutDeliveriesNestedInput;
    generatedQuestion?: Prisma.GeneratedQuestionUpdateOneWithoutDeliveryNestedInput;
    attempt?: Prisma.QuestionAttemptUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempt?: Prisma.QuestionAttemptUncheckedUpdateOneWithoutDeliveryNestedInput;
};
export type QuestionDeliveryUncheckedUpdateManyWithoutLessonSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedQuestionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionDeliveryStatusFieldUpdateOperationsInput | $Enums.QuestionDeliveryStatus;
    presentedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionDeliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonSessionId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    status?: boolean;
    presentedAt?: boolean;
    answeredAt?: boolean;
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
    attempt?: boolean | Prisma.QuestionDelivery$attemptArgs<ExtArgs>;
}, ExtArgs["result"]["questionDelivery"]>;
export type QuestionDeliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonSessionId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    status?: boolean;
    presentedAt?: boolean;
    answeredAt?: boolean;
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
}, ExtArgs["result"]["questionDelivery"]>;
export type QuestionDeliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonSessionId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    status?: boolean;
    presentedAt?: boolean;
    answeredAt?: boolean;
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
}, ExtArgs["result"]["questionDelivery"]>;
export type QuestionDeliverySelectScalar = {
    id?: boolean;
    lessonSessionId?: boolean;
    questionId?: boolean;
    generatedQuestionId?: boolean;
    status?: boolean;
    presentedAt?: boolean;
    answeredAt?: boolean;
};
export type QuestionDeliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonSessionId" | "questionId" | "generatedQuestionId" | "status" | "presentedAt" | "answeredAt", ExtArgs["result"]["questionDelivery"]>;
export type QuestionDeliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
    attempt?: boolean | Prisma.QuestionDelivery$attemptArgs<ExtArgs>;
};
export type QuestionDeliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
};
export type QuestionDeliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessonSession?: boolean | Prisma.LessonSessionDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    generatedQuestion?: boolean | Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>;
};
export type $QuestionDeliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuestionDelivery";
    objects: {
        lessonSession: Prisma.$LessonSessionPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
        generatedQuestion: Prisma.$GeneratedQuestionPayload<ExtArgs> | null;
        attempt: Prisma.$QuestionAttemptPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lessonSessionId: string;
        questionId: string;
        generatedQuestionId: string | null;
        status: $Enums.QuestionDeliveryStatus;
        presentedAt: Date;
        answeredAt: Date | null;
    }, ExtArgs["result"]["questionDelivery"]>;
    composites: {};
};
export type QuestionDeliveryGetPayload<S extends boolean | null | undefined | QuestionDeliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload, S>;
export type QuestionDeliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionDeliveryCountAggregateInputType | true;
};
export interface QuestionDeliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuestionDelivery'];
        meta: {
            name: 'QuestionDelivery';
        };
    };
    findUnique<T extends QuestionDeliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionDeliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionDeliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionDeliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionDeliveryFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionDeliveryCreateArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionDeliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionDeliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionDeliveryDeleteArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionDeliveryUpdateArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionDeliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionDeliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionDeliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionDeliveryUpsertArgs>(args: Prisma.SelectSubset<T, QuestionDeliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionDeliveryClient<runtime.Types.Result.GetResult<Prisma.$QuestionDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionDeliveryCountArgs>(args?: Prisma.Subset<T, QuestionDeliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionDeliveryCountAggregateOutputType> : number>;
    aggregate<T extends QuestionDeliveryAggregateArgs>(args: Prisma.Subset<T, QuestionDeliveryAggregateArgs>): Prisma.PrismaPromise<GetQuestionDeliveryAggregateType<T>>;
    groupBy<T extends QuestionDeliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionDeliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionDeliveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionDeliveryFieldRefs;
}
export interface Prisma__QuestionDeliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessonSession<T extends Prisma.LessonSessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonSessionDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonSessionClient<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    generatedQuestion<T extends Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDelivery$generatedQuestionArgs<ExtArgs>>): Prisma.Prisma__GeneratedQuestionClient<runtime.Types.Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attempt<T extends Prisma.QuestionDelivery$attemptArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDelivery$attemptArgs<ExtArgs>>): Prisma.Prisma__QuestionAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuestionAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionDeliveryFieldRefs {
    readonly id: Prisma.FieldRef<"QuestionDelivery", 'String'>;
    readonly lessonSessionId: Prisma.FieldRef<"QuestionDelivery", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuestionDelivery", 'String'>;
    readonly generatedQuestionId: Prisma.FieldRef<"QuestionDelivery", 'String'>;
    readonly status: Prisma.FieldRef<"QuestionDelivery", 'QuestionDeliveryStatus'>;
    readonly presentedAt: Prisma.FieldRef<"QuestionDelivery", 'DateTime'>;
    readonly answeredAt: Prisma.FieldRef<"QuestionDelivery", 'DateTime'>;
}
export type QuestionDeliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionDeliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionDeliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionDeliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionDeliveryCreateInput, Prisma.QuestionDeliveryUncheckedCreateInput>;
};
export type QuestionDeliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionDeliveryCreateManyInput | Prisma.QuestionDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionDeliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    data: Prisma.QuestionDeliveryCreateManyInput | Prisma.QuestionDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionDeliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionDeliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateInput, Prisma.QuestionDeliveryUncheckedUpdateInput>;
    where: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateManyMutationInput, Prisma.QuestionDeliveryUncheckedUpdateManyInput>;
    where?: Prisma.QuestionDeliveryWhereInput;
    limit?: number;
};
export type QuestionDeliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionDeliveryUpdateManyMutationInput, Prisma.QuestionDeliveryUncheckedUpdateManyInput>;
    where?: Prisma.QuestionDeliveryWhereInput;
    limit?: number;
    include?: Prisma.QuestionDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionDeliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where: Prisma.QuestionDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionDeliveryCreateInput, Prisma.QuestionDeliveryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionDeliveryUpdateInput, Prisma.QuestionDeliveryUncheckedUpdateInput>;
};
export type QuestionDeliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
    where: Prisma.QuestionDeliveryWhereUniqueInput;
};
export type QuestionDeliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionDeliveryWhereInput;
    limit?: number;
};
export type QuestionDelivery$generatedQuestionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedQuestionSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedQuestionOmit<ExtArgs> | null;
    include?: Prisma.GeneratedQuestionInclude<ExtArgs> | null;
    where?: Prisma.GeneratedQuestionWhereInput;
};
export type QuestionDelivery$attemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuestionAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuestionAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuestionAttemptWhereInput;
};
export type QuestionDeliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionDeliverySelect<ExtArgs> | null;
    omit?: Prisma.QuestionDeliveryOmit<ExtArgs> | null;
    include?: Prisma.QuestionDeliveryInclude<ExtArgs> | null;
};
