import { TTraining } from "../../../types/training.type";
import { WeightsSvg } from "../../UI/Icons/training.icons";
import LinkCmp from "../../UI/Link";

interface Props {
  training: TTraining;
}
export default function TrainingPreview({ training }: Props) {
  return (
    <li>
      <LinkCmp
        styleMode="none"
        styleSize="none"
        className="training-preview-item border bg-slate-50 rounded"
        to={`/training/${training.id}`}
      >
        <p>{training?.name}</p>
        <p>{training.defaultSets.length}</p>
        <WeightsSvg className="w-full aspect-auto" />
      </LinkCmp>
    </li>
  );
}
