import { TTrainee, TTraineeDto, TTraineeFilter } from "../types/trainee.type";
import { apiService } from "./api.service";
import { userService } from "./user.service";

async function create(formData: FormData) {
  const dto = formDataToTraineeDto(formData);
  const { url } = await apiService.post<TTraineeDto, { url: string }>(
    "auth/create/trainee",
    dto
  );

  return url;
}

async function list(filter: TTraineeFilter): Promise<TTrainee[]> {
  let query = "?";
  Object.entries(filter).forEach(([key, value]) => {
    query += `${key}=${value}&`;
  });
  const trainees = await apiService.get<TTrainee[]>(`trainee${query}`);
  return trainees;
}

async function get(id: string): Promise<TTrainee> {
  return await apiService.get<TTrainee>(`trainee/${id}`);
}

const formDataToTraineeDto = (formData: FormData): TTraineeDto => {
  const traineeDto: TTraineeDto = {
    userDto: userService.formDataToCreateDto(formData),
    trainerId: formData.get("trainerId") as string,
    metricsDto: {
      heartRate: +(formData.get("heartRate") || 0),
      weight: parseFloat((formData.get("weight") as string) || "0"),
      height: +(formData.get("height") || 0),
      age: +(formData.get("age") || 0),
      bloodPressureSystole: +(formData.get("bloodPressureSystole") || 0),
      bloodPressureDiastole: +(formData.get("bloodPressureDiastole") || 0),
    },
  };
  return traineeDto;
};

export const traineeService = {
  create,
  list,
  get,
};
