type AdditionWithinLimitConfig = {
    aMin: number;
    aMax: number;
    bMin: number;
    bMax: number;
    sumMax: number;
};
export type GeneratedAdditionQuestion = {
    prompt: string;
    correctAnswer: string;
    explanation: string;
    variables: {
        a: number;
        b: number;
    };
};
export declare function generateAdditionWithinLimit(promptTemplate: string, config: AdditionWithinLimitConfig): GeneratedAdditionQuestion;
export {};
