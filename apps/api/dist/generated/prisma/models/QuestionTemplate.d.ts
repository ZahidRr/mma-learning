import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuestionTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionTemplatePayload>;
export type AggregateQuestionTemplate = {
    _count: QuestionTemplateCountAggregateOutputType | null;
    _min: QuestionTemplateMinAggregateOutputType | null;
    _max: QuestionTemplateMaxAggregateOutputType | null;
};
export type QuestionTemplateMinAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    template: string | null;
    generatorKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuestionTemplateMaxAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    template: string | null;
    generatorKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuestionTemplateCountAggregateOutputType = {
    id: number;
    questionId: number;
    template: number;
    generatorKey: number;
    config: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QuestionTemplateMinAggregateInputType = {
    id?: true;
    questionId?: true;
    template?: true;
    generatorKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuestionTemplateMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    template?: true;
    generatorKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuestionTemplateCountAggregateInputType = {
    id?: true;
    questionId?: true;
    template?: true;
    generatorKey?: true;
    config?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QuestionTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionTemplateWhereInput;
    orderBy?: Prisma.QuestionTemplateOrderByWithRelationInput | Prisma.QuestionTemplateOrderByWithRelationInput[];
    cursor?: Prisma.QuestionTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionTemplateCountAggregateInputType;
    _min?: QuestionTemplateMinAggregateInputType;
    _max?: QuestionTemplateMaxAggregateInputType;
};
export type GetQuestionTemplateAggregateType<T extends QuestionTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestionTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestionTemplate[P]> : Prisma.GetScalarType<T[P], AggregateQuestionTemplate[P]>;
};
export type QuestionTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionTemplateWhereInput;
    orderBy?: Prisma.QuestionTemplateOrderByWithAggregationInput | Prisma.QuestionTemplateOrderByWithAggregationInput[];
    by: Prisma.QuestionTemplateScalarFieldEnum[] | Prisma.QuestionTemplateScalarFieldEnum;
    having?: Prisma.QuestionTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionTemplateCountAggregateInputType | true;
    _min?: QuestionTemplateMinAggregateInputType;
    _max?: QuestionTemplateMaxAggregateInputType;
};
export type QuestionTemplateGroupByOutputType = {
    id: string;
    questionId: string;
    template: string;
    generatorKey: string;
    config: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: QuestionTemplateCountAggregateOutputType | null;
    _min: QuestionTemplateMinAggregateOutputType | null;
    _max: QuestionTemplateMaxAggregateOutputType | null;
};
export type GetQuestionTemplateGroupByPayload<T extends QuestionTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionTemplateGroupByOutputType[P]>;
}>>;
export type QuestionTemplateWhereInput = {
    AND?: Prisma.QuestionTemplateWhereInput | Prisma.QuestionTemplateWhereInput[];
    OR?: Prisma.QuestionTemplateWhereInput[];
    NOT?: Prisma.QuestionTemplateWhereInput | Prisma.QuestionTemplateWhereInput[];
    id?: Prisma.StringFilter<"QuestionTemplate"> | string;
    questionId?: Prisma.StringFilter<"QuestionTemplate"> | string;
    template?: Prisma.StringFilter<"QuestionTemplate"> | string;
    generatorKey?: Prisma.StringFilter<"QuestionTemplate"> | string;
    config?: Prisma.JsonFilter<"QuestionTemplate">;
    createdAt?: Prisma.DateTimeFilter<"QuestionTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QuestionTemplate"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
};
export type QuestionTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    generatorKey?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    question?: Prisma.QuestionOrderByWithRelationInput;
};
export type QuestionTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    questionId?: string;
    AND?: Prisma.QuestionTemplateWhereInput | Prisma.QuestionTemplateWhereInput[];
    OR?: Prisma.QuestionTemplateWhereInput[];
    NOT?: Prisma.QuestionTemplateWhereInput | Prisma.QuestionTemplateWhereInput[];
    template?: Prisma.StringFilter<"QuestionTemplate"> | string;
    generatorKey?: Prisma.StringFilter<"QuestionTemplate"> | string;
    config?: Prisma.JsonFilter<"QuestionTemplate">;
    createdAt?: Prisma.DateTimeFilter<"QuestionTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QuestionTemplate"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
}, "id" | "questionId">;
export type QuestionTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    generatorKey?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QuestionTemplateCountOrderByAggregateInput;
    _max?: Prisma.QuestionTemplateMaxOrderByAggregateInput;
    _min?: Prisma.QuestionTemplateMinOrderByAggregateInput;
};
export type QuestionTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionTemplateScalarWhereWithAggregatesInput | Prisma.QuestionTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionTemplateScalarWhereWithAggregatesInput | Prisma.QuestionTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuestionTemplate"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuestionTemplate"> | string;
    template?: Prisma.StringWithAggregatesFilter<"QuestionTemplate"> | string;
    generatorKey?: Prisma.StringWithAggregatesFilter<"QuestionTemplate"> | string;
    config?: Prisma.JsonWithAggregatesFilter<"QuestionTemplate">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QuestionTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"QuestionTemplate"> | Date | string;
};
export type QuestionTemplateCreateInput = {
    id?: string;
    template: string;
    generatorKey: string;
    config: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutTemplateInput;
};
export type QuestionTemplateUncheckedCreateInput = {
    id?: string;
    questionId: string;
    template: string;
    generatorKey: string;
    config: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuestionTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutTemplateNestedInput;
};
export type QuestionTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionTemplateCreateManyInput = {
    id?: string;
    questionId: string;
    template: string;
    generatorKey: string;
    config: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuestionTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionTemplateNullableScalarRelationFilter = {
    is?: Prisma.QuestionTemplateWhereInput | null;
    isNot?: Prisma.QuestionTemplateWhereInput | null;
};
export type QuestionTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    generatorKey?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuestionTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    generatorKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuestionTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    generatorKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuestionTemplateCreateNestedOneWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
    connectOrCreate?: Prisma.QuestionTemplateCreateOrConnectWithoutQuestionInput;
    connect?: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateUncheckedCreateNestedOneWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
    connectOrCreate?: Prisma.QuestionTemplateCreateOrConnectWithoutQuestionInput;
    connect?: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateUpdateOneWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
    connectOrCreate?: Prisma.QuestionTemplateCreateOrConnectWithoutQuestionInput;
    upsert?: Prisma.QuestionTemplateUpsertWithoutQuestionInput;
    disconnect?: Prisma.QuestionTemplateWhereInput | boolean;
    delete?: Prisma.QuestionTemplateWhereInput | boolean;
    connect?: Prisma.QuestionTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionTemplateUpdateToOneWithWhereWithoutQuestionInput, Prisma.QuestionTemplateUpdateWithoutQuestionInput>, Prisma.QuestionTemplateUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionTemplateUncheckedUpdateOneWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
    connectOrCreate?: Prisma.QuestionTemplateCreateOrConnectWithoutQuestionInput;
    upsert?: Prisma.QuestionTemplateUpsertWithoutQuestionInput;
    disconnect?: Prisma.QuestionTemplateWhereInput | boolean;
    delete?: Prisma.QuestionTemplateWhereInput | boolean;
    connect?: Prisma.QuestionTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionTemplateUpdateToOneWithWhereWithoutQuestionInput, Prisma.QuestionTemplateUpdateWithoutQuestionInput>, Prisma.QuestionTemplateUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionTemplateCreateWithoutQuestionInput = {
    id?: string;
    template: string;
    generatorKey: string;
    config: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuestionTemplateUncheckedCreateWithoutQuestionInput = {
    id?: string;
    template: string;
    generatorKey: string;
    config: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuestionTemplateCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuestionTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
};
export type QuestionTemplateUpsertWithoutQuestionInput = {
    update: Prisma.XOR<Prisma.QuestionTemplateUpdateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionTemplateCreateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedCreateWithoutQuestionInput>;
    where?: Prisma.QuestionTemplateWhereInput;
};
export type QuestionTemplateUpdateToOneWithWhereWithoutQuestionInput = {
    where?: Prisma.QuestionTemplateWhereInput;
    data: Prisma.XOR<Prisma.QuestionTemplateUpdateWithoutQuestionInput, Prisma.QuestionTemplateUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionTemplateUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionTemplateUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.StringFieldUpdateOperationsInput | string;
    generatorKey?: Prisma.StringFieldUpdateOperationsInput | string;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    template?: boolean;
    generatorKey?: boolean;
    config?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionTemplate"]>;
export type QuestionTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    template?: boolean;
    generatorKey?: boolean;
    config?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionTemplate"]>;
export type QuestionTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    template?: boolean;
    generatorKey?: boolean;
    config?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionTemplate"]>;
export type QuestionTemplateSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    template?: boolean;
    generatorKey?: boolean;
    config?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QuestionTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "questionId" | "template" | "generatorKey" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["questionTemplate"]>;
export type QuestionTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type QuestionTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type QuestionTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $QuestionTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuestionTemplate";
    objects: {
        question: Prisma.$QuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        questionId: string;
        template: string;
        generatorKey: string;
        config: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["questionTemplate"]>;
    composites: {};
};
export type QuestionTemplateGetPayload<S extends boolean | null | undefined | QuestionTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload, S>;
export type QuestionTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionTemplateCountAggregateInputType | true;
};
export interface QuestionTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuestionTemplate'];
        meta: {
            name: 'QuestionTemplate';
        };
    };
    findUnique<T extends QuestionTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionTemplateCreateArgs>(args: Prisma.SelectSubset<T, QuestionTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionTemplateDeleteArgs>(args: Prisma.SelectSubset<T, QuestionTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionTemplateUpdateArgs>(args: Prisma.SelectSubset<T, QuestionTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionTemplateUpsertArgs>(args: Prisma.SelectSubset<T, QuestionTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionTemplateClient<runtime.Types.Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionTemplateCountArgs>(args?: Prisma.Subset<T, QuestionTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionTemplateCountAggregateOutputType> : number>;
    aggregate<T extends QuestionTemplateAggregateArgs>(args: Prisma.Subset<T, QuestionTemplateAggregateArgs>): Prisma.PrismaPromise<GetQuestionTemplateAggregateType<T>>;
    groupBy<T extends QuestionTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionTemplateFieldRefs;
}
export interface Prisma__QuestionTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"QuestionTemplate", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuestionTemplate", 'String'>;
    readonly template: Prisma.FieldRef<"QuestionTemplate", 'String'>;
    readonly generatorKey: Prisma.FieldRef<"QuestionTemplate", 'String'>;
    readonly config: Prisma.FieldRef<"QuestionTemplate", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"QuestionTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"QuestionTemplate", 'DateTime'>;
}
export type QuestionTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where?: Prisma.QuestionTemplateWhereInput;
    orderBy?: Prisma.QuestionTemplateOrderByWithRelationInput | Prisma.QuestionTemplateOrderByWithRelationInput[];
    cursor?: Prisma.QuestionTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionTemplateScalarFieldEnum | Prisma.QuestionTemplateScalarFieldEnum[];
};
export type QuestionTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where?: Prisma.QuestionTemplateWhereInput;
    orderBy?: Prisma.QuestionTemplateOrderByWithRelationInput | Prisma.QuestionTemplateOrderByWithRelationInput[];
    cursor?: Prisma.QuestionTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionTemplateScalarFieldEnum | Prisma.QuestionTemplateScalarFieldEnum[];
};
export type QuestionTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where?: Prisma.QuestionTemplateWhereInput;
    orderBy?: Prisma.QuestionTemplateOrderByWithRelationInput | Prisma.QuestionTemplateOrderByWithRelationInput[];
    cursor?: Prisma.QuestionTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionTemplateScalarFieldEnum | Prisma.QuestionTemplateScalarFieldEnum[];
};
export type QuestionTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionTemplateCreateInput, Prisma.QuestionTemplateUncheckedCreateInput>;
};
export type QuestionTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionTemplateCreateManyInput | Prisma.QuestionTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    data: Prisma.QuestionTemplateCreateManyInput | Prisma.QuestionTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionTemplateUpdateInput, Prisma.QuestionTemplateUncheckedUpdateInput>;
    where: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionTemplateUpdateManyMutationInput, Prisma.QuestionTemplateUncheckedUpdateManyInput>;
    where?: Prisma.QuestionTemplateWhereInput;
    limit?: number;
};
export type QuestionTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionTemplateUpdateManyMutationInput, Prisma.QuestionTemplateUncheckedUpdateManyInput>;
    where?: Prisma.QuestionTemplateWhereInput;
    limit?: number;
    include?: Prisma.QuestionTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where: Prisma.QuestionTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionTemplateCreateInput, Prisma.QuestionTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionTemplateUpdateInput, Prisma.QuestionTemplateUncheckedUpdateInput>;
};
export type QuestionTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
    where: Prisma.QuestionTemplateWhereUniqueInput;
};
export type QuestionTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionTemplateWhereInput;
    limit?: number;
};
export type QuestionTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionTemplateSelect<ExtArgs> | null;
    omit?: Prisma.QuestionTemplateOmit<ExtArgs> | null;
    include?: Prisma.QuestionTemplateInclude<ExtArgs> | null;
};
