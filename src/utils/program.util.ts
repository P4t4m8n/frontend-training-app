import { TProgramDto } from "../types/program.type";

const getEmpty = (trainerId: string, traineeId: string): TProgramDto => {
  return {
    name: "",
    startDate: new Date().toString(),
    endDate: new Date().toString(),
    isActive: true,
    trainerId,
    traineeId,
  };
};

export const programUtil = {
  getEmpty,
};
