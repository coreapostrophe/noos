import { atom } from "jotai";

export interface Task {
  id: string;
  title: string;
}

export const tasksAtom = atom<Task[]>([
  { id: "1", title: "Get groceries" },
  { id: "2", title: "Wash the dishes" },
  { id: "3", title: "Do the laundry" },
  { id: "4", title: "Pay bills" },
]);
