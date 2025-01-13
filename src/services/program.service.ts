import { TProgram } from "../types/program.type";
import { apiService } from "./api.service";

async function get(id: string): Promise<TProgram> {
  return await apiService.get<TProgram>(`/programs/${id}`);
}

export const programService = {
  get,
};
