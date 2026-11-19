import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TopicModel = runtime.Types.Result.DefaultSelection<Prisma.$TopicPayload>;
export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null;
    _avg: TopicAvgAggregateOutputType | null;
    _sum: TopicSumAggregateOutputType | null;
    _min: TopicMinAggregateOutputType | null;
    _max: TopicMaxAggregateOutputType | null;
};
export type TopicAvgAggregateOutputType = {
    gradeLevel: number | null;
    orderIndex: number | null;
};
export type TopicSumAggregateOutputType = {
    gradeLevel: number | null;
    orderIndex: number | null;
};
export type TopicMinAggregateOutputType = {
    id: string | null;
    subjectId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    gradeLevel: number | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TopicMaxAggregateOutputType = {
    id: string | null;
    subjectId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    gradeLevel: number | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TopicCountAggregateOutputType = {
    id: number;
    subjectId: number;
    name: number;
    slug: number;
    description: number;
    gradeLevel: number;
    orderIndex: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TopicAvgAggregateInputType = {
    gradeLevel?: true;
    orderIndex?: true;
};
export type TopicSumAggregateInputType = {
    gradeLevel?: true;
    orderIndex?: true;
};
export type TopicMinAggregateInputType = {
    id?: true;
    subjectId?: true;
    name?: true;
    slug?: true;
    description?: true;
    gradeLevel?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TopicMaxAggregateInputType = {
    id?: true;
    subjectId?: true;
    name?: true;
    slug?: true;
    description?: true;
    gradeLevel?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TopicCountAggregateInputType = {
    id?: true;
    subjectId?: true;
    name?: true;
    slug?: true;
    description?: true;
    gradeLevel?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TopicAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TopicCountAggregateInputType;
    _avg?: TopicAvgAggregateInputType;
    _sum?: TopicSumAggregateInputType;
    _min?: TopicMinAggregateInputType;
    _max?: TopicMaxAggregateInputType;
};
export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
    [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTopic[P]> : Prisma.GetScalarType<T[P], AggregateTopic[P]>;
};
export type TopicGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithAggregationInput | Prisma.TopicOrderByWithAggregationInput[];
    by: Prisma.TopicScalarFieldEnum[] | Prisma.TopicScalarFieldEnum;
    having?: Prisma.TopicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TopicCountAggregateInputType | true;
    _avg?: TopicAvgAggregateInputType;
    _sum?: TopicSumAggregateInputType;
    _min?: TopicMinAggregateInputType;
    _max?: TopicMaxAggregateInputType;
};
export type TopicGroupByOutputType = {
    id: string;
    subjectId: string;
    name: string;
    slug: string;
    description: string | null;
    gradeLevel: number;
    orderIndex: number;
    status: $Enums.ContentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: TopicCountAggregateOutputType | null;
    _avg: TopicAvgAggregateOutputType | null;
    _sum: TopicSumAggregateOutputType | null;
    _min: TopicMinAggregateOutputType | null;
    _max: TopicMaxAggregateOutputType | null;
};
export type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TopicGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TopicGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TopicGroupByOutputType[P]>;
}>>;
export type TopicWhereInput = {
    AND?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    OR?: Prisma.TopicWhereInput[];
    NOT?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    id?: Prisma.StringFilter<"Topic"> | string;
    subjectId?: Prisma.StringFilter<"Topic"> | string;
    name?: Prisma.StringFilter<"Topic"> | string;
    slug?: Prisma.StringFilter<"Topic"> | string;
    description?: Prisma.StringNullableFilter<"Topic"> | string | null;
    gradeLevel?: Prisma.IntFilter<"Topic"> | number;
    orderIndex?: Prisma.IntFilter<"Topic"> | number;
    status?: Prisma.EnumContentStatusFilter<"Topic"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    skills?: Prisma.SkillListRelationFilter;
};
export type TopicOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    skills?: Prisma.SkillOrderByRelationAggregateInput;
};
export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    subjectId_gradeLevel_slug?: Prisma.TopicSubjectIdGradeLevelSlugCompoundUniqueInput;
    AND?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    OR?: Prisma.TopicWhereInput[];
    NOT?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    subjectId?: Prisma.StringFilter<"Topic"> | string;
    name?: Prisma.StringFilter<"Topic"> | string;
    slug?: Prisma.StringFilter<"Topic"> | string;
    description?: Prisma.StringNullableFilter<"Topic"> | string | null;
    gradeLevel?: Prisma.IntFilter<"Topic"> | number;
    orderIndex?: Prisma.IntFilter<"Topic"> | number;
    status?: Prisma.EnumContentStatusFilter<"Topic"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    skills?: Prisma.SkillListRelationFilter;
}, "id" | "subjectId_gradeLevel_slug">;
export type TopicOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TopicCountOrderByAggregateInput;
    _avg?: Prisma.TopicAvgOrderByAggregateInput;
    _max?: Prisma.TopicMaxOrderByAggregateInput;
    _min?: Prisma.TopicMinOrderByAggregateInput;
    _sum?: Prisma.TopicSumOrderByAggregateInput;
};
export type TopicScalarWhereWithAggregatesInput = {
    AND?: Prisma.TopicScalarWhereWithAggregatesInput | Prisma.TopicScalarWhereWithAggregatesInput[];
    OR?: Prisma.TopicScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TopicScalarWhereWithAggregatesInput | Prisma.TopicScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Topic"> | string | null;
    gradeLevel?: Prisma.IntWithAggregatesFilter<"Topic"> | number;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Topic"> | number;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"Topic"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Topic"> | Date | string;
};
export type TopicCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: Prisma.SubjectCreateNestedOneWithoutTopicsInput;
    skills?: Prisma.SkillCreateNestedManyWithoutTopicInput;
};
export type TopicUncheckedCreateInput = {
    id?: string;
    subjectId: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutTopicInput;
};
export type TopicUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTopicsNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutTopicNestedInput;
};
export type TopicUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutTopicNestedInput;
};
export type TopicCreateManyInput = {
    id?: string;
    subjectId: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TopicUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TopicUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TopicListRelationFilter = {
    every?: Prisma.TopicWhereInput;
    some?: Prisma.TopicWhereInput;
    none?: Prisma.TopicWhereInput;
};
export type TopicOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TopicSubjectIdGradeLevelSlugCompoundUniqueInput = {
    subjectId: string;
    gradeLevel: number;
    slug: string;
};
export type TopicCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TopicAvgOrderByAggregateInput = {
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type TopicMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TopicMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TopicSumOrderByAggregateInput = {
    gradeLevel?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type TopicScalarRelationFilter = {
    is?: Prisma.TopicWhereInput;
    isNot?: Prisma.TopicWhereInput;
};
export type TopicCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput> | Prisma.TopicCreateWithoutSubjectInput[] | Prisma.TopicUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSubjectInput | Prisma.TopicCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TopicCreateManySubjectInputEnvelope;
    connect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
};
export type TopicUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput> | Prisma.TopicCreateWithoutSubjectInput[] | Prisma.TopicUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSubjectInput | Prisma.TopicCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TopicCreateManySubjectInputEnvelope;
    connect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
};
export type TopicUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput> | Prisma.TopicCreateWithoutSubjectInput[] | Prisma.TopicUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSubjectInput | Prisma.TopicCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TopicUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TopicUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TopicCreateManySubjectInputEnvelope;
    set?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    disconnect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    delete?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    connect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    update?: Prisma.TopicUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TopicUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TopicUpdateManyWithWhereWithoutSubjectInput | Prisma.TopicUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TopicScalarWhereInput | Prisma.TopicScalarWhereInput[];
};
export type TopicUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput> | Prisma.TopicCreateWithoutSubjectInput[] | Prisma.TopicUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSubjectInput | Prisma.TopicCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TopicUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TopicUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TopicCreateManySubjectInputEnvelope;
    set?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    disconnect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    delete?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    connect?: Prisma.TopicWhereUniqueInput | Prisma.TopicWhereUniqueInput[];
    update?: Prisma.TopicUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TopicUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TopicUpdateManyWithWhereWithoutSubjectInput | Prisma.TopicUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TopicScalarWhereInput | Prisma.TopicScalarWhereInput[];
};
export type TopicCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSkillsInput, Prisma.TopicUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.TopicWhereUniqueInput;
};
export type TopicUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutSkillsInput, Prisma.TopicUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.TopicUpsertWithoutSkillsInput;
    connect?: Prisma.TopicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TopicUpdateToOneWithWhereWithoutSkillsInput, Prisma.TopicUpdateWithoutSkillsInput>, Prisma.TopicUncheckedUpdateWithoutSkillsInput>;
};
export type TopicCreateWithoutSubjectInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.SkillCreateNestedManyWithoutTopicInput;
};
export type TopicUncheckedCreateWithoutSubjectInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutTopicInput;
};
export type TopicCreateOrConnectWithoutSubjectInput = {
    where: Prisma.TopicWhereUniqueInput;
    create: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput>;
};
export type TopicCreateManySubjectInputEnvelope = {
    data: Prisma.TopicCreateManySubjectInput | Prisma.TopicCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type TopicUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TopicWhereUniqueInput;
    update: Prisma.XOR<Prisma.TopicUpdateWithoutSubjectInput, Prisma.TopicUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.TopicCreateWithoutSubjectInput, Prisma.TopicUncheckedCreateWithoutSubjectInput>;
};
export type TopicUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TopicWhereUniqueInput;
    data: Prisma.XOR<Prisma.TopicUpdateWithoutSubjectInput, Prisma.TopicUncheckedUpdateWithoutSubjectInput>;
};
export type TopicUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.TopicScalarWhereInput;
    data: Prisma.XOR<Prisma.TopicUpdateManyMutationInput, Prisma.TopicUncheckedUpdateManyWithoutSubjectInput>;
};
export type TopicScalarWhereInput = {
    AND?: Prisma.TopicScalarWhereInput | Prisma.TopicScalarWhereInput[];
    OR?: Prisma.TopicScalarWhereInput[];
    NOT?: Prisma.TopicScalarWhereInput | Prisma.TopicScalarWhereInput[];
    id?: Prisma.StringFilter<"Topic"> | string;
    subjectId?: Prisma.StringFilter<"Topic"> | string;
    name?: Prisma.StringFilter<"Topic"> | string;
    slug?: Prisma.StringFilter<"Topic"> | string;
    description?: Prisma.StringNullableFilter<"Topic"> | string | null;
    gradeLevel?: Prisma.IntFilter<"Topic"> | number;
    orderIndex?: Prisma.IntFilter<"Topic"> | number;
    status?: Prisma.EnumContentStatusFilter<"Topic"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
};
export type TopicCreateWithoutSkillsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: Prisma.SubjectCreateNestedOneWithoutTopicsInput;
};
export type TopicUncheckedCreateWithoutSkillsInput = {
    id?: string;
    subjectId: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TopicCreateOrConnectWithoutSkillsInput = {
    where: Prisma.TopicWhereUniqueInput;
    create: Prisma.XOR<Prisma.TopicCreateWithoutSkillsInput, Prisma.TopicUncheckedCreateWithoutSkillsInput>;
};
export type TopicUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.TopicUpdateWithoutSkillsInput, Prisma.TopicUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.TopicCreateWithoutSkillsInput, Prisma.TopicUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.TopicWhereInput;
};
export type TopicUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.TopicWhereInput;
    data: Prisma.XOR<Prisma.TopicUpdateWithoutSkillsInput, Prisma.TopicUncheckedUpdateWithoutSkillsInput>;
};
export type TopicUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTopicsNestedInput;
};
export type TopicUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TopicCreateManySubjectInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    gradeLevel: number;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TopicUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SkillUpdateManyWithoutTopicNestedInput;
};
export type TopicUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutTopicNestedInput;
};
export type TopicUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TopicCountOutputType = {
    skills: number;
};
export type TopicCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | TopicCountOutputTypeCountSkillsArgs;
};
export type TopicCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicCountOutputTypeSelect<ExtArgs> | null;
};
export type TopicCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
};
export type TopicSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    gradeLevel?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Topic$skillsArgs<ExtArgs>;
    _count?: boolean | Prisma.TopicCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    gradeLevel?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    gradeLevel?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectScalar = {
    id?: boolean;
    subjectId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    gradeLevel?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TopicOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subjectId" | "name" | "slug" | "description" | "gradeLevel" | "orderIndex" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>;
export type TopicInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.Topic$skillsArgs<ExtArgs>;
    _count?: boolean | Prisma.TopicCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TopicIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
};
export type TopicIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
};
export type $TopicPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Topic";
    objects: {
        subject: Prisma.$SubjectPayload<ExtArgs>;
        skills: Prisma.$SkillPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subjectId: string;
        name: string;
        slug: string;
        description: string | null;
        gradeLevel: number;
        orderIndex: number;
        status: $Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["topic"]>;
    composites: {};
};
export type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TopicPayload, S>;
export type TopicCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TopicCountAggregateInputType | true;
};
export interface TopicDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Topic'];
        meta: {
            name: 'Topic';
        };
    };
    findUnique<T extends TopicFindUniqueArgs>(args: Prisma.SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TopicFindFirstArgs>(args?: Prisma.SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TopicFindManyArgs>(args?: Prisma.SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TopicCreateArgs>(args: Prisma.SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TopicCreateManyArgs>(args?: Prisma.SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TopicDeleteArgs>(args: Prisma.SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TopicUpdateArgs>(args: Prisma.SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TopicDeleteManyArgs>(args?: Prisma.SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TopicUpdateManyArgs>(args: Prisma.SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TopicUpsertArgs>(args: Prisma.SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TopicCountArgs>(args?: Prisma.Subset<T, TopicCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TopicCountAggregateOutputType> : number>;
    aggregate<T extends TopicAggregateArgs>(args: Prisma.Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>;
    groupBy<T extends TopicGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TopicGroupByArgs['orderBy'];
    } : {
        orderBy?: TopicGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TopicFieldRefs;
}
export interface Prisma__TopicClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.Topic$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Topic$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TopicFieldRefs {
    readonly id: Prisma.FieldRef<"Topic", 'String'>;
    readonly subjectId: Prisma.FieldRef<"Topic", 'String'>;
    readonly name: Prisma.FieldRef<"Topic", 'String'>;
    readonly slug: Prisma.FieldRef<"Topic", 'String'>;
    readonly description: Prisma.FieldRef<"Topic", 'String'>;
    readonly gradeLevel: Prisma.FieldRef<"Topic", 'Int'>;
    readonly orderIndex: Prisma.FieldRef<"Topic", 'Int'>;
    readonly status: Prisma.FieldRef<"Topic", 'ContentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Topic", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Topic", 'DateTime'>;
}
export type TopicFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TopicFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TopicFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TopicCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicCreateInput, Prisma.TopicUncheckedCreateInput>;
};
export type TopicCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TopicCreateManyInput | Prisma.TopicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TopicCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    data: Prisma.TopicCreateManyInput | Prisma.TopicCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TopicIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TopicUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicUpdateInput, Prisma.TopicUncheckedUpdateInput>;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TopicUpdateManyMutationInput, Prisma.TopicUncheckedUpdateManyInput>;
    where?: Prisma.TopicWhereInput;
    limit?: number;
};
export type TopicUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicUpdateManyMutationInput, Prisma.TopicUncheckedUpdateManyInput>;
    where?: Prisma.TopicWhereInput;
    limit?: number;
    include?: Prisma.TopicIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TopicUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
    create: Prisma.XOR<Prisma.TopicCreateInput, Prisma.TopicUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TopicUpdateInput, Prisma.TopicUncheckedUpdateInput>;
};
export type TopicDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    limit?: number;
};
export type Topic$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillScalarFieldEnum | Prisma.SkillScalarFieldEnum[];
};
export type TopicDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
};
