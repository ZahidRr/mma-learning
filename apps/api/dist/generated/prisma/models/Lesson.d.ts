import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonPayload>;
export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type LessonAvgAggregateOutputType = {
    orderIndex: number | null;
    xpReward: number | null;
};
export type LessonSumAggregateOutputType = {
    orderIndex: number | null;
    xpReward: number | null;
};
export type LessonMinAggregateOutputType = {
    id: string | null;
    skillId: string | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    orderIndex: number | null;
    xpReward: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonMaxAggregateOutputType = {
    id: string | null;
    skillId: string | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    orderIndex: number | null;
    xpReward: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonCountAggregateOutputType = {
    id: number;
    skillId: number;
    title: number;
    slug: number;
    description: number;
    orderIndex: number;
    xpReward: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonAvgAggregateInputType = {
    orderIndex?: true;
    xpReward?: true;
};
export type LessonSumAggregateInputType = {
    orderIndex?: true;
    xpReward?: true;
};
export type LessonMinAggregateInputType = {
    id?: true;
    skillId?: true;
    title?: true;
    slug?: true;
    description?: true;
    orderIndex?: true;
    xpReward?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonMaxAggregateInputType = {
    id?: true;
    skillId?: true;
    title?: true;
    slug?: true;
    description?: true;
    orderIndex?: true;
    xpReward?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonCountAggregateInputType = {
    id?: true;
    skillId?: true;
    title?: true;
    slug?: true;
    description?: true;
    orderIndex?: true;
    xpReward?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonCountAggregateInputType;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson[P]> : Prisma.GetScalarType<T[P], AggregateLesson[P]>;
};
export type LessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithAggregationInput | Prisma.LessonOrderByWithAggregationInput[];
    by: Prisma.LessonScalarFieldEnum[] | Prisma.LessonScalarFieldEnum;
    having?: Prisma.LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type LessonGroupByOutputType = {
    id: string;
    skillId: string;
    title: string;
    slug: string;
    description: string | null;
    orderIndex: number;
    xpReward: number;
    status: $Enums.ContentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]>;
}>>;
export type LessonWhereInput = {
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    skillId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    slug?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
    xpReward?: Prisma.IntFilter<"Lesson"> | number;
    status?: Prisma.EnumContentStatusFilter<"Lesson"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
    questions?: Prisma.QuestionListRelationFilter;
    sessions?: Prisma.LessonSessionListRelationFilter;
};
export type LessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    skill?: Prisma.SkillOrderByWithRelationInput;
    questions?: Prisma.QuestionOrderByRelationAggregateInput;
    sessions?: Prisma.LessonSessionOrderByRelationAggregateInput;
};
export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    skillId_slug?: Prisma.LessonSkillIdSlugCompoundUniqueInput;
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    skillId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    slug?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
    xpReward?: Prisma.IntFilter<"Lesson"> | number;
    status?: Prisma.EnumContentStatusFilter<"Lesson"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
    questions?: Prisma.QuestionListRelationFilter;
    sessions?: Prisma.LessonSessionListRelationFilter;
}, "id" | "skillId_slug">;
export type LessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonCountOrderByAggregateInput;
    _avg?: Prisma.LessonAvgOrderByAggregateInput;
    _max?: Prisma.LessonMaxOrderByAggregateInput;
    _min?: Prisma.LessonMinOrderByAggregateInput;
    _sum?: Prisma.LessonSumOrderByAggregateInput;
};
export type LessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Lesson"> | string | null;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    xpReward?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"Lesson"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
};
export type LessonCreateInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skill: Prisma.SkillCreateNestedOneWithoutLessonsInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutLessonInput;
    sessions?: Prisma.LessonSessionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateInput = {
    id?: string;
    skillId: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutLessonInput;
    sessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skill?: Prisma.SkillUpdateOneRequiredWithoutLessonsNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutLessonNestedInput;
    sessions?: Prisma.LessonSessionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutLessonNestedInput;
    sessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyInput = {
    id?: string;
    skillId: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonListRelationFilter = {
    every?: Prisma.LessonWhereInput;
    some?: Prisma.LessonWhereInput;
    none?: Prisma.LessonWhereInput;
};
export type LessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonSkillIdSlugCompoundUniqueInput = {
    skillId: string;
    slug: string;
};
export type LessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
};
export type LessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
    xpReward?: Prisma.SortOrder;
};
export type LessonScalarRelationFilter = {
    is?: Prisma.LessonWhereInput;
    isNot?: Prisma.LessonWhereInput;
};
export type LessonCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput> | Prisma.LessonCreateWithoutSkillInput[] | Prisma.LessonUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSkillInput | Prisma.LessonCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.LessonCreateManySkillInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput> | Prisma.LessonCreateWithoutSkillInput[] | Prisma.LessonUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSkillInput | Prisma.LessonCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.LessonCreateManySkillInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput> | Prisma.LessonCreateWithoutSkillInput[] | Prisma.LessonUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSkillInput | Prisma.LessonCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutSkillInput | Prisma.LessonUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.LessonCreateManySkillInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutSkillInput | Prisma.LessonUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutSkillInput | Prisma.LessonUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput> | Prisma.LessonCreateWithoutSkillInput[] | Prisma.LessonUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSkillInput | Prisma.LessonCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutSkillInput | Prisma.LessonUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.LessonCreateManySkillInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutSkillInput | Prisma.LessonUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutSkillInput | Prisma.LessonUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutQuestionsInput, Prisma.LessonUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutQuestionsInput, Prisma.LessonUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.LessonUpsertWithoutQuestionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutQuestionsInput, Prisma.LessonUpdateWithoutQuestionsInput>, Prisma.LessonUncheckedUpdateWithoutQuestionsInput>;
};
export type LessonCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSessionsInput, Prisma.LessonUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSessionsInput, Prisma.LessonUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.LessonUpsertWithoutSessionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutSessionsInput, Prisma.LessonUpdateWithoutSessionsInput>, Prisma.LessonUncheckedUpdateWithoutSessionsInput>;
};
export type LessonCreateWithoutSkillInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuestionCreateNestedManyWithoutLessonInput;
    sessions?: Prisma.LessonSessionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutSkillInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutLessonInput;
    sessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutSkillInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput>;
};
export type LessonCreateManySkillInputEnvelope = {
    data: Prisma.LessonCreateManySkillInput | Prisma.LessonCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutSkillInput, Prisma.LessonUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSkillInput, Prisma.LessonUncheckedCreateWithoutSkillInput>;
};
export type LessonUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutSkillInput, Prisma.LessonUncheckedUpdateWithoutSkillInput>;
};
export type LessonUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutSkillInput>;
};
export type LessonScalarWhereInput = {
    AND?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    OR?: Prisma.LessonScalarWhereInput[];
    NOT?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    skillId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    slug?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    orderIndex?: Prisma.IntFilter<"Lesson"> | number;
    xpReward?: Prisma.IntFilter<"Lesson"> | number;
    status?: Prisma.EnumContentStatusFilter<"Lesson"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
};
export type LessonCreateWithoutQuestionsInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skill: Prisma.SkillCreateNestedOneWithoutLessonsInput;
    sessions?: Prisma.LessonSessionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    skillId: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.LessonSessionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutQuestionsInput, Prisma.LessonUncheckedCreateWithoutQuestionsInput>;
};
export type LessonUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutQuestionsInput, Prisma.LessonUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutQuestionsInput, Prisma.LessonUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutQuestionsInput, Prisma.LessonUncheckedUpdateWithoutQuestionsInput>;
};
export type LessonUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skill?: Prisma.SkillUpdateOneRequiredWithoutLessonsNestedInput;
    sessions?: Prisma.LessonSessionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutSessionsInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skill: Prisma.SkillCreateNestedOneWithoutLessonsInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutSessionsInput = {
    id?: string;
    skillId: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutSessionsInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSessionsInput, Prisma.LessonUncheckedCreateWithoutSessionsInput>;
};
export type LessonUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutSessionsInput, Prisma.LessonUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSessionsInput, Prisma.LessonUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutSessionsInput, Prisma.LessonUncheckedUpdateWithoutSessionsInput>;
};
export type LessonUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skill?: Prisma.SkillUpdateOneRequiredWithoutLessonsNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManySkillInput = {
    id?: string;
    title: string;
    slug: string;
    description?: string | null;
    orderIndex?: number;
    xpReward?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuestionUpdateManyWithoutLessonNestedInput;
    sessions?: Prisma.LessonSessionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutLessonNestedInput;
    sessions?: Prisma.LessonSessionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    xpReward?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCountOutputType = {
    questions: number;
    sessions: number;
};
export type LessonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | LessonCountOutputTypeCountQuestionsArgs;
    sessions?: boolean | LessonCountOutputTypeCountSessionsArgs;
};
export type LessonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCountOutputTypeSelect<ExtArgs> | null;
};
export type LessonCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
};
export type LessonCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonSessionWhereInput;
};
export type LessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    skillId?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    xpReward?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.Lesson$questionsArgs<ExtArgs>;
    sessions?: boolean | Prisma.Lesson$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    skillId?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    xpReward?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    skillId?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    xpReward?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectScalar = {
    id?: boolean;
    skillId?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    xpReward?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "skillId" | "title" | "slug" | "description" | "orderIndex" | "xpReward" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>;
export type LessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.Lesson$questionsArgs<ExtArgs>;
    sessions?: boolean | Prisma.Lesson$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LessonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type LessonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $LessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lesson";
    objects: {
        skill: Prisma.$SkillPayload<ExtArgs>;
        questions: Prisma.$QuestionPayload<ExtArgs>[];
        sessions: Prisma.$LessonSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        skillId: string;
        title: string;
        slug: string;
        description: string | null;
        orderIndex: number;
        xpReward: number;
        status: $Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lesson"]>;
    composites: {};
};
export type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonPayload, S>;
export type LessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
};
export interface LessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
        meta: {
            name: 'Lesson';
        };
    };
    findUnique<T extends LessonFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonCreateArgs>(args: Prisma.SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonDeleteArgs>(args: Prisma.SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonUpdateArgs>(args: Prisma.SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonUpsertArgs>(args: Prisma.SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonCountArgs>(args?: Prisma.Subset<T, LessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCountAggregateOutputType> : number>;
    aggregate<T extends LessonAggregateArgs>(args: Prisma.Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>;
    groupBy<T extends LessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonFieldRefs;
}
export interface Prisma__LessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    questions<T extends Prisma.Lesson$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.Lesson$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonFieldRefs {
    readonly id: Prisma.FieldRef<"Lesson", 'String'>;
    readonly skillId: Prisma.FieldRef<"Lesson", 'String'>;
    readonly title: Prisma.FieldRef<"Lesson", 'String'>;
    readonly slug: Prisma.FieldRef<"Lesson", 'String'>;
    readonly description: Prisma.FieldRef<"Lesson", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly xpReward: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly status: Prisma.FieldRef<"Lesson", 'ContentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Lesson", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lesson", 'DateTime'>;
}
export type LessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type LessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type LessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type LessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
};
export type LessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type LessonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
    include?: Prisma.LessonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
};
export type LessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type Lesson$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
export type Lesson$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
};
