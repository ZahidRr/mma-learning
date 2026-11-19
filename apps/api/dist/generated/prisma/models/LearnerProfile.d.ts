import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LearnerProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$LearnerProfilePayload>;
export type AggregateLearnerProfile = {
    _count: LearnerProfileCountAggregateOutputType | null;
    _avg: LearnerProfileAvgAggregateOutputType | null;
    _sum: LearnerProfileSumAggregateOutputType | null;
    _min: LearnerProfileMinAggregateOutputType | null;
    _max: LearnerProfileMaxAggregateOutputType | null;
};
export type LearnerProfileAvgAggregateOutputType = {
    gradeLevel: number | null;
    totalXp: number | null;
};
export type LearnerProfileSumAggregateOutputType = {
    gradeLevel: number | null;
    totalXp: number | null;
};
export type LearnerProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    displayName: string | null;
    gradeLevel: number | null;
    avatarKey: string | null;
    totalXp: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LearnerProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    displayName: string | null;
    gradeLevel: number | null;
    avatarKey: string | null;
    totalXp: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LearnerProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    displayName: number;
    gradeLevel: number;
    avatarKey: number;
    totalXp: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LearnerProfileAvgAggregateInputType = {
    gradeLevel?: true;
    totalXp?: true;
};
export type LearnerProfileSumAggregateInputType = {
    gradeLevel?: true;
    totalXp?: true;
};
export type LearnerProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    displayName?: true;
    gradeLevel?: true;
    avatarKey?: true;
    totalXp?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LearnerProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    displayName?: true;
    gradeLevel?: true;
    avatarKey?: true;
    totalXp?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LearnerProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    displayName?: true;
    gradeLevel?: true;
    avatarKey?: true;
    totalXp?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LearnerProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearnerProfileWhereInput;
    orderBy?: Prisma.LearnerProfileOrderByWithRelationInput | Prisma.LearnerProfileOrderByWithRelationInput[];
    cursor?: Prisma.LearnerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LearnerProfileCountAggregateInputType;
    _avg?: LearnerProfileAvgAggregateInputType;
    _sum?: LearnerProfileSumAggregateInputType;
    _min?: LearnerProfileMinAggregateInputType;
    _max?: LearnerProfileMaxAggregateInputType;
};
export type GetLearnerProfileAggregateType<T extends LearnerProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateLearnerProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLearnerProfile[P]> : Prisma.GetScalarType<T[P], AggregateLearnerProfile[P]>;
};
export type LearnerProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearnerProfileWhereInput;
    orderBy?: Prisma.LearnerProfileOrderByWithAggregationInput | Prisma.LearnerProfileOrderByWithAggregationInput[];
    by: Prisma.LearnerProfileScalarFieldEnum[] | Prisma.LearnerProfileScalarFieldEnum;
    having?: Prisma.LearnerProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LearnerProfileCountAggregateInputType | true;
    _avg?: LearnerProfileAvgAggregateInputType;
    _sum?: LearnerProfileSumAggregateInputType;
    _min?: LearnerProfileMinAggregateInputType;
    _max?: LearnerProfileMaxAggregateInputType;
};
export type LearnerProfileGroupByOutputType = {
    id: string;
    userId: string;
    displayName: string;
    gradeLevel: number;
    avatarKey: string | null;
    totalXp: number;
    createdAt: Date;
    updatedAt: Date;
    _count: LearnerProfileCountAggregateOutputType | null;
    _avg: LearnerProfileAvgAggregateOutputType | null;
    _sum: LearnerProfileSumAggregateOutputType | null;
    _min: LearnerProfileMinAggregateOutputType | null;
    _max: LearnerProfileMaxAggregateOutputType | null;
};
export type GetLearnerProfileGroupByPayload<T extends LearnerProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LearnerProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LearnerProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LearnerProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LearnerProfileGroupByOutputType[P]>;
}>>;
export type LearnerProfileWhereInput = {
    AND?: Prisma.LearnerProfileWhereInput | Prisma.LearnerProfileWhereInput[];
    OR?: Prisma.LearnerProfileWhereInput[];
    NOT?: Prisma.LearnerProfileWhereInput | Prisma.LearnerProfileWhereInput[];
    id?: Prisma.StringFilter<"LearnerProfile"> | string;
    userId?: Prisma.StringFilter<"LearnerProfile"> | string;
    displayName?: Prisma.StringFilter<"LearnerProfile"> | string;
    gradeLevel?: Prisma.IntFilter<"LearnerProfile"> | number;
    avatarKey?: Prisma.StringNullableFilter<"LearnerProfile"> | string | null;
    totalXp?: Prisma.IntFilter<"LearnerProfile"> | number;
    createdAt?: Prisma.DateTimeFilter<"LearnerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LearnerProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type LearnerProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    avatarKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type LearnerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.LearnerProfileWhereInput | Prisma.LearnerProfileWhereInput[];
    OR?: Prisma.LearnerProfileWhereInput[];
    NOT?: Prisma.LearnerProfileWhereInput | Prisma.LearnerProfileWhereInput[];
    displayName?: Prisma.StringFilter<"LearnerProfile"> | string;
    gradeLevel?: Prisma.IntFilter<"LearnerProfile"> | number;
    avatarKey?: Prisma.StringNullableFilter<"LearnerProfile"> | string | null;
    totalXp?: Prisma.IntFilter<"LearnerProfile"> | number;
    createdAt?: Prisma.DateTimeFilter<"LearnerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LearnerProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type LearnerProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    avatarKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LearnerProfileCountOrderByAggregateInput;
    _avg?: Prisma.LearnerProfileAvgOrderByAggregateInput;
    _max?: Prisma.LearnerProfileMaxOrderByAggregateInput;
    _min?: Prisma.LearnerProfileMinOrderByAggregateInput;
    _sum?: Prisma.LearnerProfileSumOrderByAggregateInput;
};
export type LearnerProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.LearnerProfileScalarWhereWithAggregatesInput | Prisma.LearnerProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.LearnerProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LearnerProfileScalarWhereWithAggregatesInput | Prisma.LearnerProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LearnerProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"LearnerProfile"> | string;
    displayName?: Prisma.StringWithAggregatesFilter<"LearnerProfile"> | string;
    gradeLevel?: Prisma.IntWithAggregatesFilter<"LearnerProfile"> | number;
    avatarKey?: Prisma.StringNullableWithAggregatesFilter<"LearnerProfile"> | string | null;
    totalXp?: Prisma.IntWithAggregatesFilter<"LearnerProfile"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LearnerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LearnerProfile"> | Date | string;
};
export type LearnerProfileCreateInput = {
    id?: string;
    displayName: string;
    gradeLevel: number;
    avatarKey?: string | null;
    totalXp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLearnerProfileInput;
};
export type LearnerProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    displayName: string;
    gradeLevel: number;
    avatarKey?: string | null;
    totalXp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LearnerProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLearnerProfileNestedInput;
};
export type LearnerProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearnerProfileCreateManyInput = {
    id?: string;
    userId: string;
    displayName: string;
    gradeLevel: number;
    avatarKey?: string | null;
    totalXp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LearnerProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearnerProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearnerProfileNullableScalarRelationFilter = {
    is?: Prisma.LearnerProfileWhereInput | null;
    isNot?: Prisma.LearnerProfileWhereInput | null;
};
export type LearnerProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    avatarKey?: Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearnerProfileAvgOrderByAggregateInput = {
    gradeLevel?: Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
};
export type LearnerProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    avatarKey?: Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearnerProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    gradeLevel?: Prisma.SortOrder;
    avatarKey?: Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearnerProfileSumOrderByAggregateInput = {
    gradeLevel?: Prisma.SortOrder;
    totalXp?: Prisma.SortOrder;
};
export type LearnerProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LearnerProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LearnerProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LearnerProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.LearnerProfileUpsertWithoutUserInput;
    disconnect?: Prisma.LearnerProfileWhereInput | boolean;
    delete?: Prisma.LearnerProfileWhereInput | boolean;
    connect?: Prisma.LearnerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LearnerProfileUpdateToOneWithWhereWithoutUserInput, Prisma.LearnerProfileUpdateWithoutUserInput>, Prisma.LearnerProfileUncheckedUpdateWithoutUserInput>;
};
export type LearnerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LearnerProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.LearnerProfileUpsertWithoutUserInput;
    disconnect?: Prisma.LearnerProfileWhereInput | boolean;
    delete?: Prisma.LearnerProfileWhereInput | boolean;
    connect?: Prisma.LearnerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LearnerProfileUpdateToOneWithWhereWithoutUserInput, Prisma.LearnerProfileUpdateWithoutUserInput>, Prisma.LearnerProfileUncheckedUpdateWithoutUserInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type LearnerProfileCreateWithoutUserInput = {
    id?: string;
    displayName: string;
    gradeLevel: number;
    avatarKey?: string | null;
    totalXp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LearnerProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    displayName: string;
    gradeLevel: number;
    avatarKey?: string | null;
    totalXp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LearnerProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.LearnerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
};
export type LearnerProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.LearnerProfileUpdateWithoutUserInput, Prisma.LearnerProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LearnerProfileCreateWithoutUserInput, Prisma.LearnerProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.LearnerProfileWhereInput;
};
export type LearnerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.LearnerProfileWhereInput;
    data: Prisma.XOR<Prisma.LearnerProfileUpdateWithoutUserInput, Prisma.LearnerProfileUncheckedUpdateWithoutUserInput>;
};
export type LearnerProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearnerProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    avatarKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalXp?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearnerProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    displayName?: boolean;
    gradeLevel?: boolean;
    avatarKey?: boolean;
    totalXp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learnerProfile"]>;
export type LearnerProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    displayName?: boolean;
    gradeLevel?: boolean;
    avatarKey?: boolean;
    totalXp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learnerProfile"]>;
export type LearnerProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    displayName?: boolean;
    gradeLevel?: boolean;
    avatarKey?: boolean;
    totalXp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learnerProfile"]>;
export type LearnerProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    displayName?: boolean;
    gradeLevel?: boolean;
    avatarKey?: boolean;
    totalXp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LearnerProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "displayName" | "gradeLevel" | "avatarKey" | "totalXp" | "createdAt" | "updatedAt", ExtArgs["result"]["learnerProfile"]>;
export type LearnerProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LearnerProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LearnerProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LearnerProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LearnerProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        displayName: string;
        gradeLevel: number;
        avatarKey: string | null;
        totalXp: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["learnerProfile"]>;
    composites: {};
};
export type LearnerProfileGetPayload<S extends boolean | null | undefined | LearnerProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload, S>;
export type LearnerProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LearnerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LearnerProfileCountAggregateInputType | true;
};
export interface LearnerProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LearnerProfile'];
        meta: {
            name: 'LearnerProfile';
        };
    };
    findUnique<T extends LearnerProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, LearnerProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LearnerProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LearnerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LearnerProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, LearnerProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LearnerProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LearnerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LearnerProfileFindManyArgs>(args?: Prisma.SelectSubset<T, LearnerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LearnerProfileCreateArgs>(args: Prisma.SelectSubset<T, LearnerProfileCreateArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LearnerProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, LearnerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LearnerProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LearnerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LearnerProfileDeleteArgs>(args: Prisma.SelectSubset<T, LearnerProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LearnerProfileUpdateArgs>(args: Prisma.SelectSubset<T, LearnerProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LearnerProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, LearnerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LearnerProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, LearnerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LearnerProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LearnerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LearnerProfileUpsertArgs>(args: Prisma.SelectSubset<T, LearnerProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__LearnerProfileClient<runtime.Types.Result.GetResult<Prisma.$LearnerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LearnerProfileCountArgs>(args?: Prisma.Subset<T, LearnerProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LearnerProfileCountAggregateOutputType> : number>;
    aggregate<T extends LearnerProfileAggregateArgs>(args: Prisma.Subset<T, LearnerProfileAggregateArgs>): Prisma.PrismaPromise<GetLearnerProfileAggregateType<T>>;
    groupBy<T extends LearnerProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LearnerProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: LearnerProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LearnerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearnerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LearnerProfileFieldRefs;
}
export interface Prisma__LearnerProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LearnerProfileFieldRefs {
    readonly id: Prisma.FieldRef<"LearnerProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"LearnerProfile", 'String'>;
    readonly displayName: Prisma.FieldRef<"LearnerProfile", 'String'>;
    readonly gradeLevel: Prisma.FieldRef<"LearnerProfile", 'Int'>;
    readonly avatarKey: Prisma.FieldRef<"LearnerProfile", 'String'>;
    readonly totalXp: Prisma.FieldRef<"LearnerProfile", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"LearnerProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LearnerProfile", 'DateTime'>;
}
export type LearnerProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where?: Prisma.LearnerProfileWhereInput;
    orderBy?: Prisma.LearnerProfileOrderByWithRelationInput | Prisma.LearnerProfileOrderByWithRelationInput[];
    cursor?: Prisma.LearnerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LearnerProfileScalarFieldEnum | Prisma.LearnerProfileScalarFieldEnum[];
};
export type LearnerProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where?: Prisma.LearnerProfileWhereInput;
    orderBy?: Prisma.LearnerProfileOrderByWithRelationInput | Prisma.LearnerProfileOrderByWithRelationInput[];
    cursor?: Prisma.LearnerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LearnerProfileScalarFieldEnum | Prisma.LearnerProfileScalarFieldEnum[];
};
export type LearnerProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where?: Prisma.LearnerProfileWhereInput;
    orderBy?: Prisma.LearnerProfileOrderByWithRelationInput | Prisma.LearnerProfileOrderByWithRelationInput[];
    cursor?: Prisma.LearnerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LearnerProfileScalarFieldEnum | Prisma.LearnerProfileScalarFieldEnum[];
};
export type LearnerProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearnerProfileCreateInput, Prisma.LearnerProfileUncheckedCreateInput>;
};
export type LearnerProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LearnerProfileCreateManyInput | Prisma.LearnerProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LearnerProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    data: Prisma.LearnerProfileCreateManyInput | Prisma.LearnerProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LearnerProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LearnerProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearnerProfileUpdateInput, Prisma.LearnerProfileUncheckedUpdateInput>;
    where: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LearnerProfileUpdateManyMutationInput, Prisma.LearnerProfileUncheckedUpdateManyInput>;
    where?: Prisma.LearnerProfileWhereInput;
    limit?: number;
};
export type LearnerProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearnerProfileUpdateManyMutationInput, Prisma.LearnerProfileUncheckedUpdateManyInput>;
    where?: Prisma.LearnerProfileWhereInput;
    limit?: number;
    include?: Prisma.LearnerProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LearnerProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where: Prisma.LearnerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LearnerProfileCreateInput, Prisma.LearnerProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LearnerProfileUpdateInput, Prisma.LearnerProfileUncheckedUpdateInput>;
};
export type LearnerProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
    where: Prisma.LearnerProfileWhereUniqueInput;
};
export type LearnerProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearnerProfileWhereInput;
    limit?: number;
};
export type LearnerProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearnerProfileSelect<ExtArgs> | null;
    omit?: Prisma.LearnerProfileOmit<ExtArgs> | null;
    include?: Prisma.LearnerProfileInclude<ExtArgs> | null;
};
