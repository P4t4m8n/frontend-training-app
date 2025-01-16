import { TTraining } from "../types/training.type";
import { setUtil } from "./set.util";

const getEmpty = (): TTraining => {
  return {
    set: 1,
    name: "",
    defaultSets: [setUtil.getEmpty("DEFAULT")],
  };
};

export const trainingUtil = {
  getEmpty,
};
