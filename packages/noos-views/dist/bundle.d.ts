import { FC } from 'react';

interface FunctionsMap {
}

interface Goal {
    id: string;
    subGoals: Goal[];
}

interface Save {
    goals: Goal[];
}

interface NoosProps {
    functions: FunctionsMap;
    save: Save;
}
declare const Noos: FC<NoosProps>;

export { Noos as default };
export type { NoosProps };
