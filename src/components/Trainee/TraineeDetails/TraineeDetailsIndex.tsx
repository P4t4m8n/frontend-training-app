import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { traineeService } from "../../../services/trainee.service";

import { TTrainee } from "../../../types/trainee.type";

import MetricsDetails from "./MetricsDetails";
import TraineeUserDetails from "./TraineeUserDetails";
import TraineeDetailsPrograms from "./TraineeDetailsPrograms";
import TraineeDetailsTraining from "./TraineeDetailsTraining";

export default function TraineeDetailsIndex() {
  const [trainee, setTrainee] = useState<TTrainee | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    loadTrainee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadTrainee = async () => {
    try {
      if (!id) {
        console.warn("No id provided");
        return;
      }
      setIsLoading(true);
      const _trainee = await traineeService.get(id);
      setTrainee(_trainee);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !trainee) {
    return <div>Loading...</div>;
  }
  const { user, metrics, programs, trainings } = trainee;
  const lastMetrics = metrics?.[metrics.length - 1];
  return (
    <div className="flex flex-col gap-4 pt-4 h-trainer-outlet">
      <TraineeUserDetails user={user} />
      <MetricsDetails metrics={lastMetrics || {}} />
      <TraineeDetailsPrograms programs={programs || []} traineeId={id!} />
      <TraineeDetailsTraining trainings={trainings || []} />
    </div>
  );
}
