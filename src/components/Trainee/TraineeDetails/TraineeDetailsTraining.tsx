import { TTrainingToTrainee } from "../../../types/training.type";
import TrainingToTraineePreview from "../../Training/TrainingToTraineePreview";
import ItemList from "../../UI/ItemList";
import LinkCmp from "../../UI/Link";

interface Props {
  trainings: TTrainingToTrainee[];
}
export default function TraineeDetailsTraining({ trainings }: Props) {
  return (
    <div className="border rounded p-4 w-full flex flex-col h-[calc(50%-9rem)]">
      <LinkCmp
        to={"training/edit"}
        styleMode="secondary"
        styleSize="medium"
        className="self-end border p-2 font-title rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Training
      </LinkCmp>
      <ItemList
        items={trainings || []}
        renderItem={(training) => (
          <TrainingToTraineePreview training={training} />
        )}
      />
    </div>
  );
}
