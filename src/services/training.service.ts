import { TTraining, TTrainingFilter } from "../types/training.type";
import { apiService } from "./api.service";

const BASE_URL = "training";

async function get(filter: TTrainingFilter): Promise<TTraining[]> {
  let query = "?";
  Object.entries(filter).forEach(([key, value]) => {
    query += `${key}=${value}&`;
  });
  const trainings = await apiService.get<TTraining[]>(`${BASE_URL}${query}`);
  return trainings;
}

async function getById(id: string): Promise<TTraining> {
  return await apiService.get<TTraining>(`${BASE_URL}/${id}`);
}

async function create(training: TTraining): Promise<string> {
  return await apiService.post<TTraining, string>(`${BASE_URL}/edit`, training);
}

export const trainingService = {
  getById,
  create,
  get,
};
