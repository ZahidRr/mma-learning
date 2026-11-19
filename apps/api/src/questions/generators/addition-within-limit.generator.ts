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

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateAdditionWithinLimit(
  promptTemplate: string,
  config: AdditionWithinLimitConfig,
): GeneratedAdditionQuestion {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const a = randomInt(config.aMin, config.aMax);

    const allowedBMax = Math.min(
      config.bMax,
      config.sumMax - a,
    );

    if (allowedBMax < config.bMin) {
      continue;
    }

    const b = randomInt(config.bMin, allowedBMax);

    const answer = a + b;

    const prompt = promptTemplate
      .replaceAll('{a}', String(a))
      .replaceAll('{b}', String(b));

    return {
      prompt,
      correctAnswer: String(answer),
      explanation: `${a} + ${b} = ${answer}`,
      variables: {
        a,
        b,
      },
    };
  }

  throw new Error(
    'Unable to generate addition question with the provided configuration',
  );
}