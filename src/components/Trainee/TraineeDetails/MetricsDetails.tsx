import { TTraineeMetrics } from "../../../types/trainee.type";
import Button from "../../UI/Button";

interface Props {
  metrics: TTraineeMetrics;
}
export default function MetricsDetails({ metrics }: Props) {
  const {
    heartRate,
    weight,
    height,
    age,
    bloodPressureSystole,
    bloodPressureDiastole,
    date,
  } = metrics;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const formattedDate = formatDate(date || "");
  return (
    <div className="border rounded p-2 flex flex-col justify-between h-36">
      <div className="grid grid-cols-2 gap-y-1 gap-x-8  w-full">
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        <p>Age: {age}</p>
        <p>Heart Rate: {heartRate}</p>
        <span>
          Blood Pressure: {bloodPressureSystole}/{bloodPressureDiastole}
        </span>
        <p>Date: {formattedDate}</p>
      </div>
      <div className="col-span-2 flex justify-around h-8">
        <Button styleMode="secondary" styleSize="small">
          History
        </Button>
        <Button styleMode="secondary" styleSize="small">
          Add
        </Button>
      </div>
    </div>
  );
}
