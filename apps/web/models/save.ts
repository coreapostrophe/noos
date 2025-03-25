import { atom } from "jotai";
import { Task, tasksAtom } from "./task";

export interface Save {
  tasks: Task[];
}

export const saveAtom = atom<Save, [update: Save], void>(
  (get) => ({ tasks: get(tasksAtom) }),
  (_, set, update) => {
    set(tasksAtom, update.tasks);
  }
);
