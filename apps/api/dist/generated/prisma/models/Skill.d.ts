import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SkillModel = runtime.Types.Result.DefaultSelection<Prisma.$SkillPayload>;
export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null;
    _avg: SkillAvgAggregateOutputType | null;
    _sum: SkillSumAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
};
export type SkillAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type SkillSumAggregateOutputType = {
    orderIndex: number | null;
};
export type SkillMinAggregateOutputType = {
    id: string | null;
    topicId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SkillMaxAggregateOutputType = {
    id: string | null;
    topicId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    orderIndex: number | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SkillCountAggregateOutputType = {
    id: number;
    topicId: number;
    name: number;
    slug: number;
    description: number;
    translations: number;
    orderIndex: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SkillAvgAggregateInputType = {
    orderIndex?: true;
};
export type SkillSumAggregateInputType = {
    orderIndex?: true;
};
export type SkillMinAggregateInputType = {
    id?: true;
    topicId?: true;
    name?: true;
    slug?: true;
    description?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SkillMaxAggregateInputType = {
    id?: true;
    topicId?: true;
    name?: true;
    slug?: true;
    description?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SkillCountAggregateInputType = {
    id?: true;
    topicId?: true;
    name?: true;
    slug?: true;
    description?: true;
    translations?: true;
    orderIndex?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SkillCountAggregateInputType;
    _avg?: SkillAvgAggregateInputType;
    _sum?: SkillSumAggregateInputType;
    _min?: SkillMinAggregateInputType;
    _max?: SkillMaxAggregateInputType;
};
export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
    [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSkill[P]> : Prisma.GetScalarType<T[P], AggregateSkill[P]>;
};
export type SkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithAggregationInput | Prisma.SkillOrderByWithAggregationInput[];
    by: Prisma.SkillScalarFieldEnum[] | Prisma.SkillScalarFieldEnum;
    having?: Prisma.SkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SkillCountAggregateInputType | true;
    _avg?: SkillAvgAggregateInputType;
    _sum?: SkillSumAggregateInputType;
    _min?: SkillMinAggregateInputType;
    _max?: SkillMaxAggregateInputType;
};
export type SkillGroupByOutputType = {
    id: string;
    topicId: string;
    name: string;
    slug: string;
    description: string | null;
    translations: runtime.JsonValue | null;
    orderIndex: number;
    status: $Enums.ContentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: SkillCountAggregateOutputType | null;
    _avg: SkillAvgAggregateOutputType | null;
    _sum: SkillSumAggregateOutputType | null;
    _min: SkillMinAggregateOutputType | null;
    _max: SkillMaxAggregateOutputType | null;
};
export type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SkillGroupByOutputType[P]>;
}>>;
export type SkillWhereInput = {
    AND?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    OR?: Prisma.SkillWhereInput[];
    NOT?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    id?: Prisma.StringFilter<"Skill"> | string;
    topicId?: Prisma.StringFilter<"Skill"> | string;
    name?: Prisma.StringFilter<"Skill"> | string;
    slug?: Prisma.StringFilter<"Skill"> | string;
    description?: Prisma.StringNullableFilter<"Skill"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Skill">;
    orderIndex?: Prisma.IntFilter<"Skill"> | number;
    status?: Prisma.EnumContentStatusFilter<"Skill"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
    topic?: Prisma.XOR<Prisma.TopicScalarRelationFilter, Prisma.TopicWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
    questions?: Prisma.QuestionListRelationFilter;
    masteries?: Prisma.SkillMasteryListRelationFilter;
};
export type SkillOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    translations?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topic?: Prisma.TopicOrderByWithRelationInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
    questions?: Prisma.QuestionOrderByRelationAggregateInput;
    masteries?: Prisma.SkillMasteryOrderByRelationAggregateInput;
};
export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    topicId_slug?: Prisma.SkillTopicIdSlugCompoundUniqueInput;
    AND?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    OR?: Prisma.SkillWhereInput[];
    NOT?: Prisma.SkillWhereInput | Prisma.SkillWhereInput[];
    topicId?: Prisma.StringFilter<"Skill"> | string;
    name?: Prisma.StringFilter<"Skill"> | string;
    slug?: Prisma.StringFilter<"Skill"> | string;
    description?: Prisma.StringNullableFilter<"Skill"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Skill">;
    orderIndex?: Prisma.IntFilter<"Skill"> | number;
    status?: Prisma.EnumContentStatusFilter<"Skill"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
    topic?: Prisma.XOR<Prisma.TopicScalarRelationFilter, Prisma.TopicWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
    questions?: Prisma.QuestionListRelationFilter;
    masteries?: Prisma.SkillMasteryListRelationFilter;
}, "id" | "topicId_slug">;
export type SkillOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    translations?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SkillCountOrderByAggregateInput;
    _avg?: Prisma.SkillAvgOrderByAggregateInput;
    _max?: Prisma.SkillMaxOrderByAggregateInput;
    _min?: Prisma.SkillMinOrderByAggregateInput;
    _sum?: Prisma.SkillSumOrderByAggregateInput;
};
export type SkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.SkillScalarWhereWithAggregatesInput | Prisma.SkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.SkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SkillScalarWhereWithAggregatesInput | Prisma.SkillScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
    topicId?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Skill"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Skill"> | string | null;
    translations?: Prisma.JsonNullableWithAggregatesFilter<"Skill">;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Skill"> | number;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"Skill"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Skill"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Skill"> | Date | string;
};
export type SkillCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topic: Prisma.TopicCreateNestedOneWithoutSkillsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateInput = {
    id?: string;
    topicId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topic?: Prisma.TopicUpdateOneRequiredWithoutSkillsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topicId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateManyInput = {
    id?: string;
    topicId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topicId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillListRelationFilter = {
    every?: Prisma.SkillWhereInput;
    some?: Prisma.SkillWhereInput;
    none?: Prisma.SkillWhereInput;
};
export type SkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SkillTopicIdSlugCompoundUniqueInput = {
    topicId: string;
    slug: string;
};
export type SkillCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    translations?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type SkillMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type SkillScalarRelationFilter = {
    is?: Prisma.SkillWhereInput;
    isNot?: Prisma.SkillWhereInput;
};
export type SkillCreateNestedManyWithoutTopicInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput> | Prisma.SkillCreateWithoutTopicInput[] | Prisma.SkillUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutTopicInput | Prisma.SkillCreateOrConnectWithoutTopicInput[];
    createMany?: Prisma.SkillCreateManyTopicInputEnvelope;
    connect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
};
export type SkillUncheckedCreateNestedManyWithoutTopicInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput> | Prisma.SkillCreateWithoutTopicInput[] | Prisma.SkillUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutTopicInput | Prisma.SkillCreateOrConnectWithoutTopicInput[];
    createMany?: Prisma.SkillCreateManyTopicInputEnvelope;
    connect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
};
export type SkillUpdateManyWithoutTopicNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput> | Prisma.SkillCreateWithoutTopicInput[] | Prisma.SkillUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutTopicInput | Prisma.SkillCreateOrConnectWithoutTopicInput[];
    upsert?: Prisma.SkillUpsertWithWhereUniqueWithoutTopicInput | Prisma.SkillUpsertWithWhereUniqueWithoutTopicInput[];
    createMany?: Prisma.SkillCreateManyTopicInputEnvelope;
    set?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    disconnect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    delete?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    connect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    update?: Prisma.SkillUpdateWithWhereUniqueWithoutTopicInput | Prisma.SkillUpdateWithWhereUniqueWithoutTopicInput[];
    updateMany?: Prisma.SkillUpdateManyWithWhereWithoutTopicInput | Prisma.SkillUpdateManyWithWhereWithoutTopicInput[];
    deleteMany?: Prisma.SkillScalarWhereInput | Prisma.SkillScalarWhereInput[];
};
export type SkillUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput> | Prisma.SkillCreateWithoutTopicInput[] | Prisma.SkillUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutTopicInput | Prisma.SkillCreateOrConnectWithoutTopicInput[];
    upsert?: Prisma.SkillUpsertWithWhereUniqueWithoutTopicInput | Prisma.SkillUpsertWithWhereUniqueWithoutTopicInput[];
    createMany?: Prisma.SkillCreateManyTopicInputEnvelope;
    set?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    disconnect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    delete?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    connect?: Prisma.SkillWhereUniqueInput | Prisma.SkillWhereUniqueInput[];
    update?: Prisma.SkillUpdateWithWhereUniqueWithoutTopicInput | Prisma.SkillUpdateWithWhereUniqueWithoutTopicInput[];
    updateMany?: Prisma.SkillUpdateManyWithWhereWithoutTopicInput | Prisma.SkillUpdateManyWithWhereWithoutTopicInput[];
    deleteMany?: Prisma.SkillScalarWhereInput | Prisma.SkillScalarWhereInput[];
};
export type SkillCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutLessonsInput, Prisma.SkillUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutLessonsInput, Prisma.SkillUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.SkillUpsertWithoutLessonsInput;
    connect?: Prisma.SkillWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SkillUpdateToOneWithWhereWithoutLessonsInput, Prisma.SkillUpdateWithoutLessonsInput>, Prisma.SkillUncheckedUpdateWithoutLessonsInput>;
};
export type SkillCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutQuestionsInput, Prisma.SkillUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutQuestionsInput, Prisma.SkillUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.SkillUpsertWithoutQuestionsInput;
    connect?: Prisma.SkillWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SkillUpdateToOneWithWhereWithoutQuestionsInput, Prisma.SkillUpdateWithoutQuestionsInput>, Prisma.SkillUncheckedUpdateWithoutQuestionsInput>;
};
export type SkillCreateNestedOneWithoutMasteriesInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutMasteriesInput, Prisma.SkillUncheckedCreateWithoutMasteriesInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutMasteriesInput;
    connect?: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateOneRequiredWithoutMasteriesNestedInput = {
    create?: Prisma.XOR<Prisma.SkillCreateWithoutMasteriesInput, Prisma.SkillUncheckedCreateWithoutMasteriesInput>;
    connectOrCreate?: Prisma.SkillCreateOrConnectWithoutMasteriesInput;
    upsert?: Prisma.SkillUpsertWithoutMasteriesInput;
    connect?: Prisma.SkillWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SkillUpdateToOneWithWhereWithoutMasteriesInput, Prisma.SkillUpdateWithoutMasteriesInput>, Prisma.SkillUncheckedUpdateWithoutMasteriesInput>;
};
export type SkillCreateWithoutTopicInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutTopicInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutTopicInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput>;
};
export type SkillCreateManyTopicInputEnvelope = {
    data: Prisma.SkillCreateManyTopicInput | Prisma.SkillCreateManyTopicInput[];
    skipDuplicates?: boolean;
};
export type SkillUpsertWithWhereUniqueWithoutTopicInput = {
    where: Prisma.SkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.SkillUpdateWithoutTopicInput, Prisma.SkillUncheckedUpdateWithoutTopicInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutTopicInput, Prisma.SkillUncheckedCreateWithoutTopicInput>;
};
export type SkillUpdateWithWhereUniqueWithoutTopicInput = {
    where: Prisma.SkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutTopicInput, Prisma.SkillUncheckedUpdateWithoutTopicInput>;
};
export type SkillUpdateManyWithWhereWithoutTopicInput = {
    where: Prisma.SkillScalarWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateManyMutationInput, Prisma.SkillUncheckedUpdateManyWithoutTopicInput>;
};
export type SkillScalarWhereInput = {
    AND?: Prisma.SkillScalarWhereInput | Prisma.SkillScalarWhereInput[];
    OR?: Prisma.SkillScalarWhereInput[];
    NOT?: Prisma.SkillScalarWhereInput | Prisma.SkillScalarWhereInput[];
    id?: Prisma.StringFilter<"Skill"> | string;
    topicId?: Prisma.StringFilter<"Skill"> | string;
    name?: Prisma.StringFilter<"Skill"> | string;
    slug?: Prisma.StringFilter<"Skill"> | string;
    description?: Prisma.StringNullableFilter<"Skill"> | string | null;
    translations?: Prisma.JsonNullableFilter<"Skill">;
    orderIndex?: Prisma.IntFilter<"Skill"> | number;
    status?: Prisma.EnumContentStatusFilter<"Skill"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Skill"> | Date | string;
};
export type SkillCreateWithoutLessonsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topic: Prisma.TopicCreateNestedOneWithoutSkillsInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutLessonsInput = {
    id?: string;
    topicId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutLessonsInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutLessonsInput, Prisma.SkillUncheckedCreateWithoutLessonsInput>;
};
export type SkillUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.SkillUpdateWithoutLessonsInput, Prisma.SkillUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutLessonsInput, Prisma.SkillUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.SkillWhereInput;
};
export type SkillUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.SkillWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutLessonsInput, Prisma.SkillUncheckedUpdateWithoutLessonsInput>;
};
export type SkillUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topic?: Prisma.TopicUpdateOneRequiredWithoutSkillsNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topicId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topic: Prisma.TopicCreateNestedOneWithoutSkillsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    topicId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutSkillInput;
    masteries?: Prisma.SkillMasteryUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutQuestionsInput, Prisma.SkillUncheckedCreateWithoutQuestionsInput>;
};
export type SkillUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.SkillUpdateWithoutQuestionsInput, Prisma.SkillUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutQuestionsInput, Prisma.SkillUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.SkillWhereInput;
};
export type SkillUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.SkillWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutQuestionsInput, Prisma.SkillUncheckedUpdateWithoutQuestionsInput>;
};
export type SkillUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topic?: Prisma.TopicUpdateOneRequiredWithoutSkillsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topicId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateWithoutMasteriesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    topic: Prisma.TopicCreateNestedOneWithoutSkillsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionCreateNestedManyWithoutSkillInput;
};
export type SkillUncheckedCreateWithoutMasteriesInput = {
    id?: string;
    topicId: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutSkillInput;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutSkillInput;
};
export type SkillCreateOrConnectWithoutMasteriesInput = {
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateWithoutMasteriesInput, Prisma.SkillUncheckedCreateWithoutMasteriesInput>;
};
export type SkillUpsertWithoutMasteriesInput = {
    update: Prisma.XOR<Prisma.SkillUpdateWithoutMasteriesInput, Prisma.SkillUncheckedUpdateWithoutMasteriesInput>;
    create: Prisma.XOR<Prisma.SkillCreateWithoutMasteriesInput, Prisma.SkillUncheckedCreateWithoutMasteriesInput>;
    where?: Prisma.SkillWhereInput;
};
export type SkillUpdateToOneWithWhereWithoutMasteriesInput = {
    where?: Prisma.SkillWhereInput;
    data: Prisma.XOR<Prisma.SkillUpdateWithoutMasteriesInput, Prisma.SkillUncheckedUpdateWithoutMasteriesInput>;
};
export type SkillUpdateWithoutMasteriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topic?: Prisma.TopicUpdateOneRequiredWithoutSkillsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutMasteriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topicId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillCreateManyTopicInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: number;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillUpdateWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutSkillNestedInput;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutSkillNestedInput;
    masteries?: Prisma.SkillMasteryUncheckedUpdateManyWithoutSkillNestedInput;
};
export type SkillUncheckedUpdateManyWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    translations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillCountOutputType = {
    lessons: number;
    questions: number;
    masteries: number;
};
export type SkillCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | SkillCountOutputTypeCountLessonsArgs;
    questions?: boolean | SkillCountOutputTypeCountQuestionsArgs;
    masteries?: boolean | SkillCountOutputTypeCountMasteriesArgs;
};
export type SkillCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillCountOutputTypeSelect<ExtArgs> | null;
};
export type SkillCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type SkillCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
};
export type SkillCountOutputTypeCountMasteriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillMasteryWhereInput;
};
export type SkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topicId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Skill$lessonsArgs<ExtArgs>;
    questions?: boolean | Prisma.Skill$questionsArgs<ExtArgs>;
    masteries?: boolean | Prisma.Skill$masteriesArgs<ExtArgs>;
    _count?: boolean | Prisma.SkillCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topicId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topicId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skill"]>;
export type SkillSelectScalar = {
    id?: boolean;
    topicId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    translations?: boolean;
    orderIndex?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "topicId" | "name" | "slug" | "description" | "translations" | "orderIndex" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>;
export type SkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Skill$lessonsArgs<ExtArgs>;
    questions?: boolean | Prisma.Skill$questionsArgs<ExtArgs>;
    masteries?: boolean | Prisma.Skill$masteriesArgs<ExtArgs>;
    _count?: boolean | Prisma.SkillCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
};
export type SkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    topic?: boolean | Prisma.TopicDefaultArgs<ExtArgs>;
};
export type $SkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Skill";
    objects: {
        topic: Prisma.$TopicPayload<ExtArgs>;
        lessons: Prisma.$LessonPayload<ExtArgs>[];
        questions: Prisma.$QuestionPayload<ExtArgs>[];
        masteries: Prisma.$SkillMasteryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        topicId: string;
        name: string;
        slug: string;
        description: string | null;
        translations: runtime.JsonValue | null;
        orderIndex: number;
        status: $Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["skill"]>;
    composites: {};
};
export type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SkillPayload, S>;
export type SkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SkillCountAggregateInputType | true;
};
export interface SkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Skill'];
        meta: {
            name: 'Skill';
        };
    };
    findUnique<T extends SkillFindUniqueArgs>(args: Prisma.SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SkillFindFirstArgs>(args?: Prisma.SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SkillFindManyArgs>(args?: Prisma.SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SkillCreateArgs>(args: Prisma.SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SkillCreateManyArgs>(args?: Prisma.SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SkillDeleteArgs>(args: Prisma.SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SkillUpdateArgs>(args: Prisma.SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SkillUpdateManyArgs>(args: Prisma.SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SkillUpsertArgs>(args: Prisma.SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SkillCountArgs>(args?: Prisma.Subset<T, SkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SkillCountAggregateOutputType> : number>;
    aggregate<T extends SkillAggregateArgs>(args: Prisma.Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>;
    groupBy<T extends SkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SkillGroupByArgs['orderBy'];
    } : {
        orderBy?: SkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SkillFieldRefs;
}
export interface Prisma__SkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    topic<T extends Prisma.TopicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TopicDefaultArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.Skill$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Skill$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    questions<T extends Prisma.Skill$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Skill$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    masteries<T extends Prisma.Skill$masteriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Skill$masteriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SkillFieldRefs {
    readonly id: Prisma.FieldRef<"Skill", 'String'>;
    readonly topicId: Prisma.FieldRef<"Skill", 'String'>;
    readonly name: Prisma.FieldRef<"Skill", 'String'>;
    readonly slug: Prisma.FieldRef<"Skill", 'String'>;
    readonly description: Prisma.FieldRef<"Skill", 'String'>;
    readonly translations: Prisma.FieldRef<"Skill", 'Json'>;
    readonly orderIndex: Prisma.FieldRef<"Skill", 'Int'>;
    readonly status: Prisma.FieldRef<"Skill", 'ContentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Skill", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Skill", 'DateTime'>;
}
export type SkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillCreateInput, Prisma.SkillUncheckedCreateInput>;
};
export type SkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SkillCreateManyInput | Prisma.SkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    data: Prisma.SkillCreateManyInput | Prisma.SkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillUpdateInput, Prisma.SkillUncheckedUpdateInput>;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SkillUpdateManyMutationInput, Prisma.SkillUncheckedUpdateManyInput>;
    where?: Prisma.SkillWhereInput;
    limit?: number;
};
export type SkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillUpdateManyMutationInput, Prisma.SkillUncheckedUpdateManyInput>;
    where?: Prisma.SkillWhereInput;
    limit?: number;
    include?: Prisma.SkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillCreateInput, Prisma.SkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SkillUpdateInput, Prisma.SkillUncheckedUpdateInput>;
};
export type SkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where: Prisma.SkillWhereUniqueInput;
};
export type SkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
    limit?: number;
};
export type Skill$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Skill$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Skill$masteriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillSelect<ExtArgs> | null;
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    include?: Prisma.SkillInclude<ExtArgs> | null;
};
