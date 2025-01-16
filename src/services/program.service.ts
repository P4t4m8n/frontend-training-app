import { TDaysOfWeek, TProgram, TProgramDto } from "../types/program.type";
import { apiService } from "./api.service";

async function get(id: string): Promise<TProgram> {
  return await apiService.get<TProgram>(`program/${id}`);
}

async function create(
  formData: FormData,
  userId: string,
  trainerId: string
): Promise<string> {
  const programDto = fromDataToCreateDto(formData);
  programDto.traineeId = userId;
  programDto.trainerId = trainerId;

  const id = await apiService.post<TProgramDto, string>(
    "program/edit",
    programDto
  );

  return id;
}

const fromDataToCreateDto = (formData: FormData): TProgramDto => {
  const data = Object.fromEntries(formData.entries());
  const days = Object.keys(data)
    .filter((key) => key.startsWith("days-"))
    .map((key) => data[key]) as TDaysOfWeek[];
  return {
    name: data.name as string,
    startDate: data.startDate as string,
    endDate: data.endDate as string,
    days,
  };
};
export const programService = {
  get,
  create,
};
