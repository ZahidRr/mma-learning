import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubjectModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectPayload>;
export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type SubjectAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type SubjectSumAggregateOutputType = {
    orderIndex: number | null;
};
export type SubjectMinAggregateOutputType = {
    id: string | null;
    curriculumId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    iconKey: string | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectMaxAggregateOutputType = {
    id: string | null;
    curriculumId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    iconKey: string | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectCountAggregateOutputType = {
    id: number;
    curriculumId: number;
    name: number;
    slug: number;
    description: number;
    translations: number;
    iconKey: number;
    orderIndex: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubjectAvgAggregateInputType = {
    orderIndex?: true;
};
export type SubjectSumAggregateInputType = {
    orderIndex?: true;
};
export type SubjectMinAggregateInputType = {
    id?: true;
    curriculumId?: true;
    name?: true;
    slug?: true;
    description?: true;
    iconKey?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectMaxAggregateInputType = {
    id?: true;
    curriculumId?: true;
    name?: true;
    slug?: true;
    description?: true;
    iconKey?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectCountAggregateInputType = {
    id?: true;
    curriculumId?: true;
    name?: true;
    slug?: true;
    description?: true;
    translations?: true;
    iconKey?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubjectCountAggregateInputType;
    _avg?: SubjectAvgAggregateInputType;
    _sum?: SubjectSumAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubject[P]> : Prisma.GetScalarType<T[P], AggregateSubject[P]>;
};
export type SubjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithAggregationInput | Prisma.SubjectOrderByWithAggregationInput[];
    by: Prisma.SubjectScalarFieldEnum[] | Prisma.SubjectScalarFieldEnum;
    having?: Prisma.SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _avg?: SubjectAvgAggregateInputType;
    _sum?: SubjectSumAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type SubjectGroupByOutputType = {
    id: string;
    curriculumId: string;
    name: string;
    slug: string;
    description: string | null;
    translations: runtime.JsonValue | null;
    iconKey: string | null;
    orderIndex: number;
    status: $Enums.ContentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]>;
}>>;
export type SubjectWhereInput = {
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    curriculumId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    slug?: Prisma.StringFilter<"Subject"> | string;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Subject">;
    iconKey?: Prisma.StringNullableFilter<"Subject"> | string | null;
    orderIndex?: Prisma.IntFilter<"Subject"> | number;
    status?: Prisma.EnumContentStatusFilter<"Subject"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    curriculum?: Prisma.XOR<Prisma.CurriculumScalarRelationFilter, Prisma.CurriculumWhereInput>;
    topics?: Prisma.TopicListRelationFilter;
};
export type SubjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    curriculumId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    translations?: Prisma.SortOrderInput | Prisma.SortOrder;
    iconKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    curriculum?: Prisma.CurriculumOrderByWithRelationInput;
    topics?: Prisma.TopicOrderByRelationAggregateInput;
};
export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    curriculumId_slug?: Prisma.SubjectCurriculumIdSlugCompoundUniqueInput;
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    curriculumId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    slug?: Prisma.StringFilter<"Subject"> | string;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Subject">;
    iconKey?: Prisma.StringNullableFilter<"Subject"> | string | null;
    orderIndex?: Prisma.IntFilter<"Subject"> | number;
    status?: Prisma.EnumContentStatusFilter<"Subject"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    curriculum?: Prisma.XOR<Prisma.CurriculumScalarRelationFilter, Prisma.CurriculumWhereInput>;
    topics?: Prisma.TopicListRelationFilter;
}, "id" | "curriculumId_slug">;
export type SubjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    curriculumId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    translations?: Prisma.SortOrderInput | Prisma.SortOrder;
    iconKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubjectCountOrderByAggregateInput;
    _avg?: Prisma.SubjectAvgOrderByAggregateInput;
    _max?: Prisma.SubjectMaxOrderByAggregateInput;
    _min?: Prisma.SubjectMinOrderByAggregateInput;
    _sum?: Prisma.SubjectSumOrderByAggregateInput;
};
export type SubjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    curriculumId?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Subject"> | string | null;
    translations?: Prisma.JsonNullableWithAggregatesFilter<"Subject">;
    iconKey?: Prisma.StringNullableWithAggregatesFilter<"Subject"> | string | null;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Subject"> | number;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"Subject"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subject"> | Date | string;
};
export type SubjectCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    curriculum: Prisma.CurriculumCreateNestedOneWithoutSubjectsInput;
    topics?: Prisma.TopicCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateInput = {
    id?: string;
    curriculumId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topics?: Prisma.TopicUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    curriculum?: Prisma.CurriculumUpdateOneRequiredWithoutSubjectsNestedInput;
    topics?: Prisma.TopicUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    curriculumId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topics?: Prisma.TopicUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManyInput = {
    id?: string;
    curriculumId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    curriculumId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectListRelationFilter = {
    every?: Prisma.SubjectWhereInput;
    some?: Prisma.SubjectWhereInput;
    none?: Prisma.SubjectWhereInput;
};
export type SubjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubjectCurriculumIdSlugCompoundUniqueInput = {
    curriculumId: string;
    slug: string;
};
export type SubjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    curriculumId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    translations?: Prisma.SortOrder;
    iconKey?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type SubjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    curriculumId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    iconKey?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    curriculumId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    iconKey?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type SubjectScalarRelationFilter = {
    is?: Prisma.SubjectWhereInput;
    isNot?: Prisma.SubjectWhereInput;
};
export type SubjectCreateNestedManyWithoutCurriculumInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput> | Prisma.SubjectCreateWithoutCurriculumInput[] | Prisma.SubjectUncheckedCreateWithoutCurriculumInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutCurriculumInput | Prisma.SubjectCreateOrConnectWithoutCurriculumInput[];
    createMany?: Prisma.SubjectCreateManyCurriculumInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUncheckedCreateNestedManyWithoutCurriculumInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput> | Prisma.SubjectCreateWithoutCurriculumInput[] | Prisma.SubjectUncheckedCreateWithoutCurriculumInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutCurriculumInput | Prisma.SubjectCreateOrConnectWithoutCurriculumInput[];
    createMany?: Prisma.SubjectCreateManyCurriculumInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUpdateManyWithoutCurriculumNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput> | Prisma.SubjectCreateWithoutCurriculumInput[] | Prisma.SubjectUncheckedCreateWithoutCurriculumInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutCurriculumInput | Prisma.SubjectCreateOrConnectWithoutCurriculumInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutCurriculumInput | Prisma.SubjectUpsertWithWhereUniqueWithoutCurriculumInput[];
    createMany?: Prisma.SubjectCreateManyCurriculumInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutCurriculumInput | Prisma.SubjectUpdateWithWhereUniqueWithoutCurriculumInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutCurriculumInput | Prisma.SubjectUpdateManyWithWhereWithoutCurriculumInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type SubjectUncheckedUpdateManyWithoutCurriculumNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput> | Prisma.SubjectCreateWithoutCurriculumInput[] | Prisma.SubjectUncheckedCreateWithoutCurriculumInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutCurriculumInput | Prisma.SubjectCreateOrConnectWithoutCurriculumInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutCurriculumInput | Prisma.SubjectUpsertWithWhereUniqueWithoutCurriculumInput[];
    createMany?: Prisma.SubjectCreateManyCurriculumInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutCurriculumInput | Prisma.SubjectUpdateWithWhereUniqueWithoutCurriculumInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutCurriculumInput | Prisma.SubjectUpdateManyWithWhereWithoutCurriculumInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type SubjectCreateNestedOneWithoutTopicsInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTopicsInput, Prisma.SubjectUncheckedCreateWithoutTopicsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTopicsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTopicsInput, Prisma.SubjectUncheckedCreateWithoutTopicsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTopicsInput;
    upsert?: Prisma.SubjectUpsertWithoutTopicsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutTopicsInput, Prisma.SubjectUpdateWithoutTopicsInput>, Prisma.SubjectUncheckedUpdateWithoutTopicsInput>;
};
export type SubjectCreateWithoutCurriculumInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topics?: Prisma.TopicCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutCurriculumInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topics?: Prisma.TopicUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutCurriculumInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput>;
};
export type SubjectCreateManyCurriculumInputEnvelope = {
    data: Prisma.SubjectCreateManyCurriculumInput | Prisma.SubjectCreateManyCurriculumInput[];
    skipDuplicates?: boolean;
};
export type SubjectUpsertWithWhereUniqueWithoutCurriculumInput = {
    where: Prisma.SubjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutCurriculumInput, Prisma.SubjectUncheckedUpdateWithoutCurriculumInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutCurriculumInput, Prisma.SubjectUncheckedCreateWithoutCurriculumInput>;
};
export type SubjectUpdateWithWhereUniqueWithoutCurriculumInput = {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutCurriculumInput, Prisma.SubjectUncheckedUpdateWithoutCurriculumInput>;
};
export type SubjectUpdateManyWithWhereWithoutCurriculumInput = {
    where: Prisma.SubjectScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyWithoutCurriculumInput>;
};
export type SubjectScalarWhereInput = {
    AND?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    OR?: Prisma.SubjectScalarWhereInput[];
    NOT?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    curriculumId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    slug?: Prisma.StringFilter<"Subject"> | string;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Subject">;
    iconKey?: Prisma.StringNullableFilter<"Subject"> | string | null;
    orderIndex?: Prisma.IntFilter<"Subject"> | number;
    status?: Prisma.EnumContentStatusFilter<"Subject"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
};
export type SubjectCreateWithoutTopicsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    curriculum: Prisma.CurriculumCreateNestedOneWithoutSubjectsInput;
};
export type SubjectUncheckedCreateWithoutTopicsInput = {
    id?: string;
    curriculumId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectCreateOrConnectWithoutTopicsInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTopicsInput, Prisma.SubjectUncheckedCreateWithoutTopicsInput>;
};
export type SubjectUpsertWithoutTopicsInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutTopicsInput, Prisma.SubjectUncheckedUpdateWithoutTopicsInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTopicsInput, Prisma.SubjectUncheckedCreateWithoutTopicsInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutTopicsInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutTopicsInput, Prisma.SubjectUncheckedUpdateWithoutTopicsInput>;
};
export type SubjectUpdateWithoutTopicsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    curriculum?: Prisma.CurriculumUpdateOneRequiredWithoutSubjectsNestedInput;
};
export type SubjectUncheckedUpdateWithoutTopicsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    curriculumId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectCreateManyCurriculumInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: string | null;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectUpdateWithoutCurriculumInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topics?: Prisma.TopicUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutCurriculumInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topics?: Prisma.TopicUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateManyWithoutCurriculumInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    iconKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectCountOutputType = {
    topics: number;
};
export type SubjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    topics?: boolean | SubjectCountOutputTypeCountTopicsArgs;
};
export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectCountOutputTypeSelect<ExtArgs> | null;
};
export type SubjectCountOutputTypeCountTopicsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
};
export type SubjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    curriculumId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    iconKey?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
    topics?: boolean | Prisma.Subject$topicsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    curriculumId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    iconKey?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    curriculumId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    iconKey?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectScalar = {
    id?: boolean;
    curriculumId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    iconKey?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "curriculumId" | "name" | "slug" | "description" | "translations" | "iconKey" | "orderIndex" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>;
export type SubjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
    topics?: boolean | Prisma.Subject$topicsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
};
export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curriculum?: boolean | Prisma.CurriculumDefaultArgs<ExtArgs>;
};
export type $SubjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subject";
    objects: {
        curriculum: Prisma.$CurriculumPayload<ExtArgs>;
        topics: Prisma.$TopicPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        curriculumId: string;
        name: string;
        slug: string;
        description: string | null;
        translations: runtime.JsonValue | null;
        iconKey: string | null;
        orderIndex: number;
        status: $Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subject"]>;
    composites: {};
};
export type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectPayload, S>;
export type SubjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
};
export interface SubjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subject'];
        meta: {
            name: 'Subject';
        };
    };
    findUnique<T extends SubjectFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubjectFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubjectCreateArgs>(args: Prisma.SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubjectCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubjectDeleteArgs>(args: Prisma.SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubjectUpdateArgs>(args: Prisma.SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubjectUpsertArgs>(args: Prisma.SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubjectCountArgs>(args?: Prisma.Subset<T, SubjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectCountAggregateOutputType> : number>;
    aggregate<T extends SubjectAggregateArgs>(args: Prisma.Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;
    groupBy<T extends SubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubjectFieldRefs;
}
export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    curriculum<T extends Prisma.CurriculumDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CurriculumDefaultArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    topics<T extends Prisma.Subject$topicsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubjectFieldRefs {
    readonly id: Prisma.FieldRef<"Subject", 'String'>;
    readonly curriculumId: Prisma.FieldRef<"Subject", 'String'>;
    readonly name: Prisma.FieldRef<"Subject", 'String'>;
    readonly slug: Prisma.FieldRef<"Subject", 'String'>;
    readonly description: Prisma.FieldRef<"Subject", 'String'>;
    readonly translations: Prisma.FieldRef<"Subject", 'Json'>;
    readonly iconKey: Prisma.FieldRef<"Subject", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"Subject", 'Int'>;
    readonly status: Prisma.FieldRef<"Subject", 'ContentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Subject", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subject", 'DateTime'>;
}
export type SubjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
};
export type SubjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type SubjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
    include?: Prisma.SubjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
};
export type SubjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type Subject$topicsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TopicScalarFieldEnum | Prisma.TopicScalarFieldEnum[];
};
export type SubjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
};
