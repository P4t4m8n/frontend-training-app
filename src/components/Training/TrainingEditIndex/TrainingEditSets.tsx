import { TSet } from "../../../types/set.type";
import { TTraining } from "../../../types/training.type";
import { toRomanNumeral } from "../../../utils/general.util";
import { setUtil } from "../../../utils/set.util";
import Button from "../../UI/Button";
import Input from "../../UI/Form/Input";
import Label from "../../UI/Form/Label";
import { DeleteSvg } from "../../UI/Icons/IconsSvg";

interface Props {
  defaultSets: TSet[];
  setTrainingToEdit: React.Dispatch<React.SetStateAction<TTraining | null>>;
}
export default function TrainingEditSets({
  defaultSets,
  setTrainingToEdit,
}: Props) {
  function onAddSet(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const set = setUtil.getEmpty("DEFAULT");
    setTrainingToEdit((prev) => ({
      ...prev!,
      defaultSets: [...prev!.defaultSets, set],
    }));
  }

  function onRemoveSet(e: React.MouseEvent<HTMLButtonElement>, idx: number) {
    e.preventDefault();
    setTrainingToEdit((prev) => ({
      ...prev!,
      defaultSets: prev!.defaultSets.filter((_, index) => index !== idx),
    }));
  }

  function onSetChange(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    setTrainingToEdit((prev) => ({
      ...prev!,
      defaultSets: prev!.defaultSets.map((set, index) =>
        index === idx ? { ...set, [name]: value } : set
      ),
    }));
  }
  return (
    <>
      {" "}
      <div className="flex gap-4 items-center justify-between">
        <span className="flex gap-1 items-center">
          <p>Number of sets:</p>
          <p>{defaultSets.length}</p>
        </span>
        <Button
          styleMode="none"
          styleSize="none"
          type="button"
          onClick={onAddSet}
          className="py-1 px-2 border border-black rounded"
        >
          Add Set
        </Button>
      </div>
      <ul>
        {defaultSets.map((set, index) => (
          <li key={index} className="trainer-edit-set">
            <p className="font-bold text-lg">{toRomanNumeral(index + 1)}</p>
            <div>
              <Label htmlFor="reps">Reps</Label>
              <Input
                id="reps"
                type="number"
                name="reps"
                onChange={(e) => onSetChange(e, index)}
                value={set.reps}
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                name="weight"
                onChange={(e) => onSetChange(e, index)}
                value={set.weight}
              />
            </div>
            <div>
              <Label htmlFor="rest">Rest</Label>
              <Input
                id="rest"
                type="number"
                name="rest"
                onChange={(e) => onSetChange(e, index)}
                value={set.rest}
              />
            </div>

            <Button
              type="button"
              styleMode="none"
              styleSize="none"
              className=" "
              onClick={(e) => onRemoveSet(e, index)}
            >
              <DeleteSvg className="h-8 aspect-square" />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
