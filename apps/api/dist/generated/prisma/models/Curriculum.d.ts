import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CurriculumModel = runtime.Types.Result.DefaultSelection<Prisma.$CurriculumPayload>;
export type AggregateCurriculum = {
    _count: CurriculumCountAggregateOutputType | null;
    _min: CurriculumMinAggregateOutputType | null;
    _max: CurriculumMaxAggregateOutputType | null;
};
export type CurriculumMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CurriculumMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    status: $Enums.ContentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CurriculumCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CurriculumMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CurriculumMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CurriculumCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CurriculumAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurriculumWhereInput;
    orderBy?: Prisma.CurriculumOrderByWithRelationInput | Prisma.CurriculumOrderByWithRelationInput[];
    cursor?: Prisma.CurriculumWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CurriculumCountAggregateInputType;
    _min?: CurriculumMinAggregateInputType;
    _max?: CurriculumMaxAggregateInputType;
};
export type GetCurriculumAggregateType<T extends CurriculumAggregateArgs> = {
    [P in keyof T & keyof AggregateCurriculum]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCurriculum[P]> : Prisma.GetScalarType<T[P], AggregateCurriculum[P]>;
};
export type CurriculumGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurriculumWhereInput;
    orderBy?: Prisma.CurriculumOrderByWithAggregationInput | Prisma.CurriculumOrderByWithAggregationInput[];
    by: Prisma.CurriculumScalarFieldEnum[] | Prisma.CurriculumScalarFieldEnum;
    having?: Prisma.CurriculumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CurriculumCountAggregateInputType | true;
    _min?: CurriculumMinAggregateInputType;
    _max?: CurriculumMaxAggregateInputType;
};
export type CurriculumGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    description: string | null;
    status: $Enums.ContentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: CurriculumCountAggregateOutputType | null;
    _min: CurriculumMinAggregateOutputType | null;
    _max: CurriculumMaxAggregateOutputType | null;
};
export type GetCurriculumGroupByPayload<T extends CurriculumGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CurriculumGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CurriculumGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CurriculumGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CurriculumGroupByOutputType[P]>;
}>>;
export type CurriculumWhereInput = {
    AND?: Prisma.CurriculumWhereInput | Prisma.CurriculumWhereInput[];
    OR?: Prisma.CurriculumWhereInput[];
    NOT?: Prisma.CurriculumWhereInput | Prisma.CurriculumWhereInput[];
    id?: Prisma.StringFilter<"Curriculum"> | string;
    name?: Prisma.StringFilter<"Curriculum"> | string;
    code?: Prisma.StringFilter<"Curriculum"> | string;
    description?: Prisma.StringNullableFilter<"Curriculum"> | string | null;
    status?: Prisma.EnumContentStatusFilter<"Curriculum"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Curriculum"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Curriculum"> | Date | string;
    subjects?: Prisma.SubjectListRelationFilter;
};
export type CurriculumOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    subjects?: Prisma.SubjectOrderByRelationAggregateInput;
};
export type CurriculumWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.CurriculumWhereInput | Prisma.CurriculumWhereInput[];
    OR?: Prisma.CurriculumWhereInput[];
    NOT?: Prisma.CurriculumWhereInput | Prisma.CurriculumWhereInput[];
    name?: Prisma.StringFilter<"Curriculum"> | string;
    description?: Prisma.StringNullableFilter<"Curriculum"> | string | null;
    status?: Prisma.EnumContentStatusFilter<"Curriculum"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFilter<"Curriculum"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Curriculum"> | Date | string;
    subjects?: Prisma.SubjectListRelationFilter;
}, "id" | "code">;
export type CurriculumOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CurriculumCountOrderByAggregateInput;
    _max?: Prisma.CurriculumMaxOrderByAggregateInput;
    _min?: Prisma.CurriculumMinOrderByAggregateInput;
};
export type CurriculumScalarWhereWithAggregatesInput = {
    AND?: Prisma.CurriculumScalarWhereWithAggregatesInput | Prisma.CurriculumScalarWhereWithAggregatesInput[];
    OR?: Prisma.CurriculumScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CurriculumScalarWhereWithAggregatesInput | Prisma.CurriculumScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Curriculum"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Curriculum"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Curriculum"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Curriculum"> | string | null;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"Curriculum"> | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Curriculum"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Curriculum"> | Date | string;
};
export type CurriculumCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: Prisma.SubjectCreateNestedManyWithoutCurriculumInput;
};
export type CurriculumUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: Prisma.SubjectUncheckedCreateNestedManyWithoutCurriculumInput;
};
export type CurriculumUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: Prisma.SubjectUpdateManyWithoutCurriculumNestedInput;
};
export type CurriculumUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: Prisma.SubjectUncheckedUpdateManyWithoutCurriculumNestedInput;
};
export type CurriculumCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CurriculumUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurriculumUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurriculumCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurriculumMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurriculumMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurriculumScalarRelationFilter = {
    is?: Prisma.CurriculumWhereInput;
    isNot?: Prisma.CurriculumWhereInput;
};
export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus;
};
export type CurriculumCreateNestedOneWithoutSubjectsInput = {
    create?: Prisma.XOR<Prisma.CurriculumCreateWithoutSubjectsInput, Prisma.CurriculumUncheckedCreateWithoutSubjectsInput>;
    connectOrCreate?: Prisma.CurriculumCreateOrConnectWithoutSubjectsInput;
    connect?: Prisma.CurriculumWhereUniqueInput;
};
export type CurriculumUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: Prisma.XOR<Prisma.CurriculumCreateWithoutSubjectsInput, Prisma.CurriculumUncheckedCreateWithoutSubjectsInput>;
    connectOrCreate?: Prisma.CurriculumCreateOrConnectWithoutSubjectsInput;
    upsert?: Prisma.CurriculumUpsertWithoutSubjectsInput;
    connect?: Prisma.CurriculumWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurriculumUpdateToOneWithWhereWithoutSubjectsInput, Prisma.CurriculumUpdateWithoutSubjectsInput>, Prisma.CurriculumUncheckedUpdateWithoutSubjectsInput>;
};
export type CurriculumCreateWithoutSubjectsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CurriculumUncheckedCreateWithoutSubjectsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    status?: $Enums.ContentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CurriculumCreateOrConnectWithoutSubjectsInput = {
    where: Prisma.CurriculumWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurriculumCreateWithoutSubjectsInput, Prisma.CurriculumUncheckedCreateWithoutSubjectsInput>;
};
export type CurriculumUpsertWithoutSubjectsInput = {
    update: Prisma.XOR<Prisma.CurriculumUpdateWithoutSubjectsInput, Prisma.CurriculumUncheckedUpdateWithoutSubjectsInput>;
    create: Prisma.XOR<Prisma.CurriculumCreateWithoutSubjectsInput, Prisma.CurriculumUncheckedCreateWithoutSubjectsInput>;
    where?: Prisma.CurriculumWhereInput;
};
export type CurriculumUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: Prisma.CurriculumWhereInput;
    data: Prisma.XOR<Prisma.CurriculumUpdateWithoutSubjectsInput, Prisma.CurriculumUncheckedUpdateWithoutSubjectsInput>;
};
export type CurriculumUpdateWithoutSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurriculumUncheckedUpdateWithoutSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurriculumCountOutputType = {
    subjects: number;
};
export type CurriculumCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subjects?: boolean | CurriculumCountOutputTypeCountSubjectsArgs;
};
export type CurriculumCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumCountOutputTypeSelect<ExtArgs> | null;
};
export type CurriculumCountOutputTypeCountSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
};
export type CurriculumSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    subjects?: boolean | Prisma.Curriculum$subjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurriculumCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["curriculum"]>;
export type CurriculumSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["curriculum"]>;
export type CurriculumSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["curriculum"]>;
export type CurriculumSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CurriculumOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["curriculum"]>;
export type CurriculumInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subjects?: boolean | Prisma.Curriculum$subjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurriculumCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CurriculumIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CurriculumIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CurriculumPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Curriculum";
    objects: {
        subjects: Prisma.$SubjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        status: $Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["curriculum"]>;
    composites: {};
};
export type CurriculumGetPayload<S extends boolean | null | undefined | CurriculumDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CurriculumPayload, S>;
export type CurriculumCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CurriculumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CurriculumCountAggregateInputType | true;
};
export interface CurriculumDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Curriculum'];
        meta: {
            name: 'Curriculum';
        };
    };
    findUnique<T extends CurriculumFindUniqueArgs>(args: Prisma.SelectSubset<T, CurriculumFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CurriculumFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CurriculumFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CurriculumFindFirstArgs>(args?: Prisma.SelectSubset<T, CurriculumFindFirstArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CurriculumFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CurriculumFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CurriculumFindManyArgs>(args?: Prisma.SelectSubset<T, CurriculumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CurriculumCreateArgs>(args: Prisma.SelectSubset<T, CurriculumCreateArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CurriculumCreateManyArgs>(args?: Prisma.SelectSubset<T, CurriculumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CurriculumCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CurriculumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CurriculumDeleteArgs>(args: Prisma.SelectSubset<T, CurriculumDeleteArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CurriculumUpdateArgs>(args: Prisma.SelectSubset<T, CurriculumUpdateArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CurriculumDeleteManyArgs>(args?: Prisma.SelectSubset<T, CurriculumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CurriculumUpdateManyArgs>(args: Prisma.SelectSubset<T, CurriculumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CurriculumUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CurriculumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CurriculumUpsertArgs>(args: Prisma.SelectSubset<T, CurriculumUpsertArgs<ExtArgs>>): Prisma.Prisma__CurriculumClient<runtime.Types.Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CurriculumCountArgs>(args?: Prisma.Subset<T, CurriculumCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CurriculumCountAggregateOutputType> : number>;
    aggregate<T extends CurriculumAggregateArgs>(args: Prisma.Subset<T, CurriculumAggregateArgs>): Prisma.PrismaPromise<GetCurriculumAggregateType<T>>;
    groupBy<T extends CurriculumGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CurriculumGroupByArgs['orderBy'];
    } : {
        orderBy?: CurriculumGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CurriculumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CurriculumFieldRefs;
}
export interface Prisma__CurriculumClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subjects<T extends Prisma.Curriculum$subjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Curriculum$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CurriculumFieldRefs {
    readonly id: Prisma.FieldRef<"Curriculum", 'String'>;
    readonly name: Prisma.FieldRef<"Curriculum", 'String'>;
    readonly code: Prisma.FieldRef<"Curriculum", 'String'>;
    readonly description: Prisma.FieldRef<"Curriculum", 'String'>;
    readonly status: Prisma.FieldRef<"Curriculum", 'ContentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Curriculum", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Curriculum", 'DateTime'>;
}
export type CurriculumFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where: Prisma.CurriculumWhereUniqueInput;
};
export type CurriculumFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where: Prisma.CurriculumWhereUniqueInput;
};
export type CurriculumFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where?: Prisma.CurriculumWhereInput;
    orderBy?: Prisma.CurriculumOrderByWithRelationInput | Prisma.CurriculumOrderByWithRelationInput[];
    cursor?: Prisma.CurriculumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurriculumScalarFieldEnum | Prisma.CurriculumScalarFieldEnum[];
};
export type CurriculumFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where?: Prisma.CurriculumWhereInput;
    orderBy?: Prisma.CurriculumOrderByWithRelationInput | Prisma.CurriculumOrderByWithRelationInput[];
    cursor?: Prisma.CurriculumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurriculumScalarFieldEnum | Prisma.CurriculumScalarFieldEnum[];
};
export type CurriculumFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where?: Prisma.CurriculumWhereInput;
    orderBy?: Prisma.CurriculumOrderByWithRelationInput | Prisma.CurriculumOrderByWithRelationInput[];
    cursor?: Prisma.CurriculumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurriculumScalarFieldEnum | Prisma.CurriculumScalarFieldEnum[];
};
export type CurriculumCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurriculumCreateInput, Prisma.CurriculumUncheckedCreateInput>;
};
export type CurriculumCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CurriculumCreateManyInput | Prisma.CurriculumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurriculumCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    data: Prisma.CurriculumCreateManyInput | Prisma.CurriculumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurriculumUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurriculumUpdateInput, Prisma.CurriculumUncheckedUpdateInput>;
    where: Prisma.CurriculumWhereUniqueInput;
};
export type CurriculumUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CurriculumUpdateManyMutationInput, Prisma.CurriculumUncheckedUpdateManyInput>;
    where?: Prisma.CurriculumWhereInput;
    limit?: number;
};
export type CurriculumUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurriculumUpdateManyMutationInput, Prisma.CurriculumUncheckedUpdateManyInput>;
    where?: Prisma.CurriculumWhereInput;
    limit?: number;
};
export type CurriculumUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where: Prisma.CurriculumWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurriculumCreateInput, Prisma.CurriculumUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CurriculumUpdateInput, Prisma.CurriculumUncheckedUpdateInput>;
};
export type CurriculumDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
    where: Prisma.CurriculumWhereUniqueInput;
};
export type CurriculumDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurriculumWhereInput;
    limit?: number;
};
export type Curriculum$subjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CurriculumDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurriculumSelect<ExtArgs> | null;
    omit?: Prisma.CurriculumOmit<ExtArgs> | null;
    include?: Prisma.CurriculumInclude<ExtArgs> | null;
};
