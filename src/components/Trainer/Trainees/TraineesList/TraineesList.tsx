import { useEffect, useState } from "react";
import TraineeFilter from "./TraineeFilter";
import { traineeService } from "../../../../services/trainee.service";
import { TTrainee, TTraineeFilter } from "../../../../types/trainee.type";
import ItemList from "../../../UI/ItemList";
import TraineePreviewIndex from "./TraineePreview/TraineePreview";
import { traineeUtil } from "../../../../utils/trainee.util";

export default function TraineesList() {
  const [trainees, setTrainees] = useState<TTrainee[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<TTraineeFilter>(
    traineeUtil.getEmptyFilter()
  );

  useEffect(() => {
    loadTrainees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const loadTrainees = async () => {
    try {
      setIsLoading(true);
      const trainees = await traineeService.list(filter);
      setTrainees(trainees);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !trainees) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-2 grid gap-4">
      <TraineeFilter filter={filter} setFilter={setFilter} loadTrainees={loadTrainees} />
      <ItemList
        items={trainees}
        listStyle="grid gap-2"
        renderItem={(trainee) => <TraineePreviewIndex trainee={trainee} />}
      />
    </div>
  );
}
