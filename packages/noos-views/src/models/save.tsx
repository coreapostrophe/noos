import { atom } from 'jotai';
import { Goal, goalsAtom } from './goal-atom';

export interface Save {
  goals: Goal[];
}

export const saveAtom = atom<Save, [update: Save], void>(
  (get) => ({ goals: get(goalsAtom) }),
  (_, set, update: Save) => {
    set(goalsAtom, update.goals);
  },
);
