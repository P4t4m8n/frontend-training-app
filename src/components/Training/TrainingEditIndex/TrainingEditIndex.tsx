import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { TTraining } from "../../../types/training.type";
import { trainingService } from "../../../services/training.service";
import { trainingUtil } from "../../../utils/training.util";
import Input from "../../UI/Form/Input";
import Button from "../../UI/Button";
import TrainingEditSets from "./TrainingEditSets";

export default function TrainingEditIndex() {
  const { id } = useParams<{ id: string }>();
  const [trainingToEdit, setTrainingToEdit] = useState<TTraining | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadTraining();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function loadTraining() {
    try {
      const training = !id
        ? trainingUtil.getEmpty()
        : await trainingService.getById(id);
      setTrainingToEdit(training);
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const trainingName = formData.get("name") as string;
      const id = await trainingService.create({
        ...trainingToEdit!,
        name: trainingName,
      });
      if (!id) throw new Error("No id returned");
      navigate("/trainer/training");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (!trainingToEdit) return <div>...Loading</div>;
  return (
    <form onSubmit={onSubmit} className="flex flex-col pt-4 gap-4">
      <Input
        type="text"
        name="name"
        defaultValue={trainingToEdit?.name}
        placeholder="Name"
      />
      <TrainingEditSets
        defaultSets={trainingToEdit.defaultSets}
        setTrainingToEdit={setTrainingToEdit}
      />
      <Button
        styleMode="primary"
        styleSize="large"
        type="submit"
        disabled={isLoading}
      >
        Submit
      </Button>
    </form>
  );
}
