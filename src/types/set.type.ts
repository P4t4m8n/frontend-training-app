import { TEntity } from "./app.type";

export type TSet = TEntity & {
  reps: number;
  weight: number;
  rest: number;
  setType: TSetType;
};

export type TSetDto = TSet & {
  trainingId?: string;
  traineeSetsId?: string;
  trainerSetsId?: string;
};

export type TSetFilter = {
  reps?: number;
  weight?: number;
  rest?: number;
  setType?: TSetType;
  trainingId?: string;
  traineeSetsId?: string;
  trainerSetsId?: string;
};

export const SET_TYPES = [
  "DEFAULT",
  "USER_HISTORY",
  "TRAINER",
  "TRAINER_HISTORY",
] as const;

export type TSetType = (typeof SET_TYPES)[number];
