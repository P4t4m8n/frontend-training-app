import {
  TTrainee,
  TTraineeFilter,
  TTraineeMetrics,
} from "../types/trainee.type";
import { TTrainer } from "../types/trainer.type";
import { userUtil } from "./user.util";

const getEmpty = (trainer: TTrainer): TTrainee => {
  return {
    programs: [],
    trainings: [],
    trainer,
    metrics: [getEmptyMetrics()],
    user: userUtil.getEmpty(),
  };
};

const getInputs = (trainerId: string, metrics?: TTraineeMetrics) => {
  return [
    {
      type: "text",
      name: "trainerId",
      readOnly: true,
      hidden: true,
      defaultValue: trainerId,
      className: "hidden",
      divStyle: "hidden",
    },

    {
      type: "number",
      name: "heartRate",
      placeholder: "Heart Rate",
      defaultValue: metrics?.heartRate,
    },
    {
      type: "number",
      name: "weight",
      placeholder: "Weight",
      defaultValue: metrics?.weight,
    },

    {
      type: "number",
      name: "height",
      placeholder: "Height",
      defaultValue: metrics?.height,
    },

    {
      type: "number",
      name: "age",
      placeholder: "Age",
      defaultValue: metrics?.age,
    },

    {
      type: "number",
      name: "bloodPressureSystole",
      placeholder: "Blood Pressure Systole",
      defaultValue: metrics?.bloodPressureSystole,
    },

    {
      type: "number",
      name: "bloodPressureDiastole",
      placeholder: "Blood Pressure Diastole",
      defaultValue: metrics?.bloodPressureDiastole,
    },
  ];
};

const getEmptyMetrics = (): TTraineeMetrics => {
  return {
    heartRate: 0,
    weight: 0,
    height: 0,
    age: 0,
    bloodPressureSystole: 0,
    bloodPressureDiastole: 0,
  };
};

const getEmptyFilter = (): TTraineeFilter => {
  return {
    firstName: "",
    lastName: "",
    email: "",
  };
};
export const traineeUtil = {
  getEmpty,
  getInputs,
  getEmptyFilter,
};
