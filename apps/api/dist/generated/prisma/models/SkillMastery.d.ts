import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SkillMasteryModel = runtime.Types.Result.DefaultSelection<Prisma.$SkillMasteryPayload>;
export type AggregateSkillMastery = {
    _count: SkillMasteryCountAggregateOutputType | null;
    _avg: SkillMasteryAvgAggregateOutputType | null;
    _sum: SkillMasterySumAggregateOutputType | null;
    _min: SkillMasteryMinAggregateOutputType | null;
    _max: SkillMasteryMaxAggregateOutputType | null;
};
export type SkillMasteryAvgAggregateOutputType = {
    masteryScore: number | null;
    totalAttempts: number | null;
    correctAttempts: number | null;
};
export type SkillMasterySumAggregateOutputType = {
    masteryScore: number | null;
    totalAttempts: number | null;
    correctAttempts: number | null;
};
export type SkillMasteryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    skillId: string | null;
    masteryScore: number | null;
    totalAttempts: number | null;
    correctAttempts: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SkillMasteryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    skillId: string | null;
    masteryScore: number | null;
    totalAttempts: number | null;
    correctAttempts: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SkillMasteryCountAggregateOutputType = {
    id: number;
    userId: number;
    skillId: number;
    masteryScore: number;
    totalAttempts: number;
    correctAttempts: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SkillMasteryAvgAggregateInputType = {
    masteryScore?: true;
    totalAttempts?: true;
    correctAttempts?: true;
};
export type SkillMasterySumAggregateInputType = {
    masteryScore?: true;
    totalAttempts?: true;
    correctAttempts?: true;
};
export type SkillMasteryMinAggregateInputType = {
    id?: true;
    userId?: true;
    skillId?: true;
    masteryScore?: true;
    totalAttempts?: true;
    correctAttempts?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SkillMasteryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    skillId?: true;
    masteryScore?: true;
    totalAttempts?: true;
    correctAttempts?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SkillMasteryCountAggregateInputType = {
    id?: true;
    userId?: true;
    skillId?: true;
    masteryScore?: true;
    totalAttempts?: true;
    correctAttempts?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SkillMasteryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillMasteryWhereInput;
    orderBy?: Prisma.SkillMasteryOrderByWithRelationInput | Prisma.SkillMasteryOrderByWithRelationInput[];
    cursor?: Prisma.SkillMasteryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SkillMasteryCountAggregateInputType;
    _avg?: SkillMasteryAvgAggregateInputType;
    _sum?: SkillMasterySumAggregateInputType;
    _min?: SkillMasteryMinAggregateInputType;
    _max?: SkillMasteryMaxAggregateInputType;
};
export type GetSkillMasteryAggregateType<T extends SkillMasteryAggregateArgs> = {
    [P in keyof T & keyof AggregateSkillMastery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSkillMastery[P]> : Prisma.GetScalarType<T[P], AggregateSkillMastery[P]>;
};
export type SkillMasteryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillMasteryWhereInput;
    orderBy?: Prisma.SkillMasteryOrderByWithAggregationInput | Prisma.SkillMasteryOrderByWithAggregationInput[];
    by: Prisma.SkillMasteryScalarFieldEnum[] | Prisma.SkillMasteryScalarFieldEnum;
    having?: Prisma.SkillMasteryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SkillMasteryCountAggregateInputType | true;
    _avg?: SkillMasteryAvgAggregateInputType;
    _sum?: SkillMasterySumAggregateInputType;
    _min?: SkillMasteryMinAggregateInputType;
    _max?: SkillMasteryMaxAggregateInputType;
};
export type SkillMasteryGroupByOutputType = {
    id: string;
    userId: string;
    skillId: string;
    masteryScore: number;
    totalAttempts: number;
    correctAttempts: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SkillMasteryCountAggregateOutputType | null;
    _avg: SkillMasteryAvgAggregateOutputType | null;
    _sum: SkillMasterySumAggregateOutputType | null;
    _min: SkillMasteryMinAggregateOutputType | null;
    _max: SkillMasteryMaxAggregateOutputType | null;
};
export type GetSkillMasteryGroupByPayload<T extends SkillMasteryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SkillMasteryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SkillMasteryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SkillMasteryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SkillMasteryGroupByOutputType[P]>;
}>>;
export type SkillMasteryWhereInput = {
    AND?: Prisma.SkillMasteryWhereInput | Prisma.SkillMasteryWhereInput[];
    OR?: Prisma.SkillMasteryWhereInput[];
    NOT?: Prisma.SkillMasteryWhereInput | Prisma.SkillMasteryWhereInput[];
    id?: Prisma.StringFilter<"SkillMastery"> | string;
    userId?: Prisma.StringFilter<"SkillMastery"> | string;
    skillId?: Prisma.StringFilter<"SkillMastery"> | string;
    masteryScore?: Prisma.FloatFilter<"SkillMastery"> | number;
    totalAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    correctAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    createdAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
};
export type SkillMasteryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    skill?: Prisma.SkillOrderByWithRelationInput;
};
export type SkillMasteryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_skillId?: Prisma.SkillMasteryUserIdSkillIdCompoundUniqueInput;
    AND?: Prisma.SkillMasteryWhereInput | Prisma.SkillMasteryWhereInput[];
    OR?: Prisma.SkillMasteryWhereInput[];
    NOT?: Prisma.SkillMasteryWhereInput | Prisma.SkillMasteryWhereInput[];
    userId?: Prisma.StringFilter<"SkillMastery"> | string;
    skillId?: Prisma.StringFilter<"SkillMastery"> | string;
    masteryScore?: Prisma.FloatFilter<"SkillMastery"> | number;
    totalAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    correctAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    createdAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
}, "id" | "userId_skillId">;
export type SkillMasteryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SkillMasteryCountOrderByAggregateInput;
    _avg?: Prisma.SkillMasteryAvgOrderByAggregateInput;
    _max?: Prisma.SkillMasteryMaxOrderByAggregateInput;
    _min?: Prisma.SkillMasteryMinOrderByAggregateInput;
    _sum?: Prisma.SkillMasterySumOrderByAggregateInput;
};
export type SkillMasteryScalarWhereWithAggregatesInput = {
    AND?: Prisma.SkillMasteryScalarWhereWithAggregatesInput | Prisma.SkillMasteryScalarWhereWithAggregatesInput[];
    OR?: Prisma.SkillMasteryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SkillMasteryScalarWhereWithAggregatesInput | Prisma.SkillMasteryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SkillMastery"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SkillMastery"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"SkillMastery"> | string;
    masteryScore?: Prisma.FloatWithAggregatesFilter<"SkillMastery"> | number;
    totalAttempts?: Prisma.IntWithAggregatesFilter<"SkillMastery"> | number;
    correctAttempts?: Prisma.IntWithAggregatesFilter<"SkillMastery"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SkillMastery"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SkillMastery"> | Date | string;
};
export type SkillMasteryCreateInput = {
    id?: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSkillMasteriesInput;
    skill: Prisma.SkillCreateNestedOneWithoutMasteriesInput;
};
export type SkillMasteryUncheckedCreateInput = {
    id?: string;
    userId: string;
    skillId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSkillMasteriesNestedInput;
    skill?: Prisma.SkillUpdateOneRequiredWithoutMasteriesNestedInput;
};
export type SkillMasteryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryCreateManyInput = {
    id?: string;
    userId: string;
    skillId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryListRelationFilter = {
    every?: Prisma.SkillMasteryWhereInput;
    some?: Prisma.SkillMasteryWhereInput;
    none?: Prisma.SkillMasteryWhereInput;
};
export type SkillMasteryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SkillMasteryUserIdSkillIdCompoundUniqueInput = {
    userId: string;
    skillId: string;
};
export type SkillMasteryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillMasteryAvgOrderByAggregateInput = {
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
};
export type SkillMasteryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillMasteryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SkillMasterySumOrderByAggregateInput = {
    masteryScore?: Prisma.SortOrder;
    totalAttempts?: Prisma.SortOrder;
    correctAttempts?: Prisma.SortOrder;
};
export type SkillMasteryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput> | Prisma.SkillMasteryCreateWithoutUserInput[] | Prisma.SkillMasteryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutUserInput | Prisma.SkillMasteryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SkillMasteryCreateManyUserInputEnvelope;
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
};
export type SkillMasteryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput> | Prisma.SkillMasteryCreateWithoutUserInput[] | Prisma.SkillMasteryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutUserInput | Prisma.SkillMasteryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SkillMasteryCreateManyUserInputEnvelope;
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
};
export type SkillMasteryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput> | Prisma.SkillMasteryCreateWithoutUserInput[] | Prisma.SkillMasteryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutUserInput | Prisma.SkillMasteryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SkillMasteryUpsertWithWhereUniqueWithoutUserInput | Prisma.SkillMasteryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SkillMasteryCreateManyUserInputEnvelope;
    set?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    disconnect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    delete?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    update?: Prisma.SkillMasteryUpdateWithWhereUniqueWithoutUserInput | Prisma.SkillMasteryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SkillMasteryUpdateManyWithWhereWithoutUserInput | Prisma.SkillMasteryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
};
export type SkillMasteryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput> | Prisma.SkillMasteryCreateWithoutUserInput[] | Prisma.SkillMasteryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutUserInput | Prisma.SkillMasteryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SkillMasteryUpsertWithWhereUniqueWithoutUserInput | Prisma.SkillMasteryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SkillMasteryCreateManyUserInputEnvelope;
    set?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    disconnect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    delete?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    update?: Prisma.SkillMasteryUpdateWithWhereUniqueWithoutUserInput | Prisma.SkillMasteryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SkillMasteryUpdateManyWithWhereWithoutUserInput | Prisma.SkillMasteryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
};
export type SkillMasteryCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput> | Prisma.SkillMasteryCreateWithoutSkillInput[] | Prisma.SkillMasteryUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutSkillInput | Prisma.SkillMasteryCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.SkillMasteryCreateManySkillInputEnvelope;
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
};
export type SkillMasteryUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput> | Prisma.SkillMasteryCreateWithoutSkillInput[] | Prisma.SkillMasteryUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutSkillInput | Prisma.SkillMasteryCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.SkillMasteryCreateManySkillInputEnvelope;
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
};
export type SkillMasteryUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput> | Prisma.SkillMasteryCreateWithoutSkillInput[] | Prisma.SkillMasteryUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutSkillInput | Prisma.SkillMasteryCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.SkillMasteryUpsertWithWhereUniqueWithoutSkillInput | Prisma.SkillMasteryUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.SkillMasteryCreateManySkillInputEnvelope;
    set?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    disconnect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    delete?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    update?: Prisma.SkillMasteryUpdateWithWhereUniqueWithoutSkillInput | Prisma.SkillMasteryUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.SkillMasteryUpdateManyWithWhereWithoutSkillInput | Prisma.SkillMasteryUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
};
export type SkillMasteryUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput> | Prisma.SkillMasteryCreateWithoutSkillInput[] | Prisma.SkillMasteryUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.SkillMasteryCreateOrConnectWithoutSkillInput | Prisma.SkillMasteryCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.SkillMasteryUpsertWithWhereUniqueWithoutSkillInput | Prisma.SkillMasteryUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.SkillMasteryCreateManySkillInputEnvelope;
    set?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    disconnect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    delete?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    connect?: Prisma.SkillMasteryWhereUniqueInput | Prisma.SkillMasteryWhereUniqueInput[];
    update?: Prisma.SkillMasteryUpdateWithWhereUniqueWithoutSkillInput | Prisma.SkillMasteryUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.SkillMasteryUpdateManyWithWhereWithoutSkillInput | Prisma.SkillMasteryUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SkillMasteryCreateWithoutUserInput = {
    id?: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skill: Prisma.SkillCreateNestedOneWithoutMasteriesInput;
};
export type SkillMasteryUncheckedCreateWithoutUserInput = {
    id?: string;
    skillId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryCreateOrConnectWithoutUserInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput>;
};
export type SkillMasteryCreateManyUserInputEnvelope = {
    data: Prisma.SkillMasteryCreateManyUserInput | Prisma.SkillMasteryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SkillMasteryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    update: Prisma.XOR<Prisma.SkillMasteryUpdateWithoutUserInput, Prisma.SkillMasteryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SkillMasteryCreateWithoutUserInput, Prisma.SkillMasteryUncheckedCreateWithoutUserInput>;
};
export type SkillMasteryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateWithoutUserInput, Prisma.SkillMasteryUncheckedUpdateWithoutUserInput>;
};
export type SkillMasteryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SkillMasteryScalarWhereInput;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateManyMutationInput, Prisma.SkillMasteryUncheckedUpdateManyWithoutUserInput>;
};
export type SkillMasteryScalarWhereInput = {
    AND?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
    OR?: Prisma.SkillMasteryScalarWhereInput[];
    NOT?: Prisma.SkillMasteryScalarWhereInput | Prisma.SkillMasteryScalarWhereInput[];
    id?: Prisma.StringFilter<"SkillMastery"> | string;
    userId?: Prisma.StringFilter<"SkillMastery"> | string;
    skillId?: Prisma.StringFilter<"SkillMastery"> | string;
    masteryScore?: Prisma.FloatFilter<"SkillMastery"> | number;
    totalAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    correctAttempts?: Prisma.IntFilter<"SkillMastery"> | number;
    createdAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SkillMastery"> | Date | string;
};
export type SkillMasteryCreateWithoutSkillInput = {
    id?: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSkillMasteriesInput;
};
export type SkillMasteryUncheckedCreateWithoutSkillInput = {
    id?: string;
    userId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryCreateOrConnectWithoutSkillInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput>;
};
export type SkillMasteryCreateManySkillInputEnvelope = {
    data: Prisma.SkillMasteryCreateManySkillInput | Prisma.SkillMasteryCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type SkillMasteryUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    update: Prisma.XOR<Prisma.SkillMasteryUpdateWithoutSkillInput, Prisma.SkillMasteryUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.SkillMasteryCreateWithoutSkillInput, Prisma.SkillMasteryUncheckedCreateWithoutSkillInput>;
};
export type SkillMasteryUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.SkillMasteryWhereUniqueInput;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateWithoutSkillInput, Prisma.SkillMasteryUncheckedUpdateWithoutSkillInput>;
};
export type SkillMasteryUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.SkillMasteryScalarWhereInput;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateManyMutationInput, Prisma.SkillMasteryUncheckedUpdateManyWithoutSkillInput>;
};
export type SkillMasteryCreateManyUserInput = {
    id?: string;
    skillId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skill?: Prisma.SkillUpdateOneRequiredWithoutMasteriesNestedInput;
};
export type SkillMasteryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryCreateManySkillInput = {
    id?: string;
    userId: string;
    masteryScore?: number;
    totalAttempts?: number;
    correctAttempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SkillMasteryUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSkillMasteriesNestedInput;
};
export type SkillMasteryUncheckedUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasteryUncheckedUpdateManyWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    masteryScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SkillMasterySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    skillId?: boolean;
    masteryScore?: boolean;
    totalAttempts?: boolean;
    correctAttempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skillMastery"]>;
export type SkillMasterySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    skillId?: boolean;
    masteryScore?: boolean;
    totalAttempts?: boolean;
    correctAttempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skillMastery"]>;
export type SkillMasterySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    skillId?: boolean;
    masteryScore?: boolean;
    totalAttempts?: boolean;
    correctAttempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skillMastery"]>;
export type SkillMasterySelectScalar = {
    id?: boolean;
    userId?: boolean;
    skillId?: boolean;
    masteryScore?: boolean;
    totalAttempts?: boolean;
    correctAttempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SkillMasteryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "skillId" | "masteryScore" | "totalAttempts" | "correctAttempts" | "createdAt" | "updatedAt", ExtArgs["result"]["skillMastery"]>;
export type SkillMasteryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type SkillMasteryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type SkillMasteryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $SkillMasteryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SkillMastery";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        skillId: string;
        masteryScore: number;
        totalAttempts: number;
        correctAttempts: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["skillMastery"]>;
    composites: {};
};
export type SkillMasteryGetPayload<S extends boolean | null | undefined | SkillMasteryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload, S>;
export type SkillMasteryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SkillMasteryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SkillMasteryCountAggregateInputType | true;
};
export interface SkillMasteryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SkillMastery'];
        meta: {
            name: 'SkillMastery';
        };
    };
    findUnique<T extends SkillMasteryFindUniqueArgs>(args: Prisma.SelectSubset<T, SkillMasteryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SkillMasteryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SkillMasteryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SkillMasteryFindFirstArgs>(args?: Prisma.SelectSubset<T, SkillMasteryFindFirstArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SkillMasteryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SkillMasteryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SkillMasteryFindManyArgs>(args?: Prisma.SelectSubset<T, SkillMasteryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SkillMasteryCreateArgs>(args: Prisma.SelectSubset<T, SkillMasteryCreateArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SkillMasteryCreateManyArgs>(args?: Prisma.SelectSubset<T, SkillMasteryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SkillMasteryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SkillMasteryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SkillMasteryDeleteArgs>(args: Prisma.SelectSubset<T, SkillMasteryDeleteArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SkillMasteryUpdateArgs>(args: Prisma.SelectSubset<T, SkillMasteryUpdateArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SkillMasteryDeleteManyArgs>(args?: Prisma.SelectSubset<T, SkillMasteryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SkillMasteryUpdateManyArgs>(args: Prisma.SelectSubset<T, SkillMasteryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SkillMasteryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SkillMasteryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SkillMasteryUpsertArgs>(args: Prisma.SelectSubset<T, SkillMasteryUpsertArgs<ExtArgs>>): Prisma.Prisma__SkillMasteryClient<runtime.Types.Result.GetResult<Prisma.$SkillMasteryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SkillMasteryCountArgs>(args?: Prisma.Subset<T, SkillMasteryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SkillMasteryCountAggregateOutputType> : number>;
    aggregate<T extends SkillMasteryAggregateArgs>(args: Prisma.Subset<T, SkillMasteryAggregateArgs>): Prisma.PrismaPromise<GetSkillMasteryAggregateType<T>>;
    groupBy<T extends SkillMasteryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SkillMasteryGroupByArgs['orderBy'];
    } : {
        orderBy?: SkillMasteryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SkillMasteryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillMasteryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SkillMasteryFieldRefs;
}
export interface Prisma__SkillMasteryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SkillMasteryFieldRefs {
    readonly id: Prisma.FieldRef<"SkillMastery", 'String'>;
    readonly userId: Prisma.FieldRef<"SkillMastery", 'String'>;
    readonly skillId: Prisma.FieldRef<"SkillMastery", 'String'>;
    readonly masteryScore: Prisma.FieldRef<"SkillMastery", 'Float'>;
    readonly totalAttempts: Prisma.FieldRef<"SkillMastery", 'Int'>;
    readonly correctAttempts: Prisma.FieldRef<"SkillMastery", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"SkillMastery", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SkillMastery", 'DateTime'>;
}
export type SkillMasteryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    where: Prisma.SkillMasteryWhereUniqueInput;
};
export type SkillMasteryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    where: Prisma.SkillMasteryWhereUniqueInput;
};
export type SkillMasteryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillMasteryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillMasteryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SkillMasteryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillMasteryCreateInput, Prisma.SkillMasteryUncheckedCreateInput>;
};
export type SkillMasteryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SkillMasteryCreateManyInput | Prisma.SkillMasteryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SkillMasteryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    data: Prisma.SkillMasteryCreateManyInput | Prisma.SkillMasteryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SkillMasteryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SkillMasteryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateInput, Prisma.SkillMasteryUncheckedUpdateInput>;
    where: Prisma.SkillMasteryWhereUniqueInput;
};
export type SkillMasteryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SkillMasteryUpdateManyMutationInput, Prisma.SkillMasteryUncheckedUpdateManyInput>;
    where?: Prisma.SkillMasteryWhereInput;
    limit?: number;
};
export type SkillMasteryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SkillMasteryUpdateManyMutationInput, Prisma.SkillMasteryUncheckedUpdateManyInput>;
    where?: Prisma.SkillMasteryWhereInput;
    limit?: number;
    include?: Prisma.SkillMasteryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SkillMasteryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    where: Prisma.SkillMasteryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SkillMasteryCreateInput, Prisma.SkillMasteryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SkillMasteryUpdateInput, Prisma.SkillMasteryUncheckedUpdateInput>;
};
export type SkillMasteryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
    where: Prisma.SkillMasteryWhereUniqueInput;
};
export type SkillMasteryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillMasteryWhereInput;
    limit?: number;
};
export type SkillMasteryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SkillMasterySelect<ExtArgs> | null;
    omit?: Prisma.SkillMasteryOmit<ExtArgs> | null;
    include?: Prisma.SkillMasteryInclude<ExtArgs> | null;
};
