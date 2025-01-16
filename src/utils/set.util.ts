import { TSet, TSetType } from "../types/set.type";

const getEmpty = (setType: TSetType): TSet => {
  return {
    reps: 1,
    weight: 1,
    rest: 30,
    setType,
  };
};

export const setUtil = {
  getEmpty,
};
