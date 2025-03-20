import { atom } from 'jotai';

export interface Goal {
  id: string;
  subGoals: Goal[];
}

export const goalsAtom = atom<Goal[]>([]);
