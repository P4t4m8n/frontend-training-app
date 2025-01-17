import { TSet } from "../../../types/set.type";

interface Props {
  set: TSet;
}
export default function TrainingDetailsSet({ set }: Props) {
  const { reps, weight, rest } = set;
  const style =
    "border rounded h-12 aspect-square flex items-center justify-center";
  return (
    <li className="grid grid-cols-3 justify-items-center bg-slate-50">
      <span className="text-center">
        <h5>Reps</h5>
        <p className={style}>{reps}</p>
      </span>
      <span>
        <h5 className="text-center">Weight</h5>
        <p className={style}>{weight}</p>
      </span>

      <span>
        <h5 className="text-center">Rest</h5>
        <p className={style}>{rest}</p>
      </span>
    </li>
  );
}
