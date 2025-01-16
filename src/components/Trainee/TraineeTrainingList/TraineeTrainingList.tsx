import { useState } from "react";
import {  TTrainingToTrainee } from "../../../types/training.type";

interface Props {
  trainingProps: TTrainingToTrainee[];
}
export default function TraineeTrainingList({ trainingProps }: Props) {
  const [trainings, setTrainings] = useState(trainingProps);
  return <div>ProgramTrainingList</div>;
}
