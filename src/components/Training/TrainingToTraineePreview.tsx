import { TTrainingToTrainee } from "../../types/training.type";

interface Props {
  training: TTrainingToTrainee;
}

export default function TrainingToTraineePreview({ training }: Props) {
  return <div>{JSON.stringify(training)}</div>;
}
