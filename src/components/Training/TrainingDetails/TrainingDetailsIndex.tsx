import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { TTraining } from "../../../types/training.type";

import { trainingService } from "../../../services/training.service";

import ItemList from "../../UI/ItemList";
import TrainingDetailsSet from "./TrainingDetailsSet";

export default function TrainingDetailsIndex() {
  const [training, setTraining] = useState<TTraining | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    loadTraining();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function loadTraining() {
    try {
      if (!id) {
        //TODO handle error
        throw new Error("Id is required");
      }
      const _training = await trainingService.getById(id);
      setTraining(_training);
    } catch (error) {
      console.error(error);
    }
  }

  if (!training) {
    return <div>Loading...</div>;
  }

  const { name, defaultSets } = training;
  return (
    <div className="pt-4 flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-center">{name}</h1>
      <ItemList
        listStyle="flex flex-col gap-4"
        items={defaultSets}
        renderItem={(set) => <TrainingDetailsSet set={set} />}
      />
    </div>
  );
}
