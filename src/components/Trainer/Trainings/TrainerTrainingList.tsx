import { useEffect, useState } from "react";
import { TTraining } from "../../../types/training.type";
import { trainingService } from "../../../services/training.service";
import ItemList from "../../UI/ItemList";
import TrainingPreview from "./TrainingPreview";

export default function TrainerTrainingList() {
  const [trainings, setTrainings] = useState<TTraining[] | null>(null);
  console.log("trainings:", trainings);

  useEffect(() => {
    getTrainings();
  }, []);

  async function getTrainings() {
    try {
      const _trainings = await trainingService.get({});
      setTrainings(_trainings);
    } catch (error) {
      console.error(error);
    }
  }

  if (!trainings) return <div>...Loading</div>;
  return (
    <div className="flex flex-col gap-4 pt-4">
      <header className="training-preview-item mb-2 border-b">
        <p>name</p>
        <p>sets</p>
        <p></p>
      </header>
      <ItemList
        listStyle="flex flex-col gap-2"
        items={trainings}
        renderItem={(training) => <TrainingPreview training={training} />}
      />
    </div>
  );
}
