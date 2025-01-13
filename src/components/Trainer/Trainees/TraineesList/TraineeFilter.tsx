import { ChangeEvent, Dispatch } from "react";
import Input from "../../../UI/Form/Input";
import { TTraineeFilter } from "../../../../types/trainee.type";
import Button from "../../../UI/Button";

interface Props {
  filter: TTraineeFilter;
  setFilter: Dispatch<React.SetStateAction<TTraineeFilter>>;
  loadTrainees: () => void;
}

export default function TraineeFilter({
  filter,
  setFilter,
  loadTrainees,
}: Props) {
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadTrainees();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-warp gap-3">
      {Object.keys(filter).map((key) => (
        <Input
          key={key}
          type="text"
          placeholder={key.toUpperCase()}
          onChange={onFilterChange}
        ></Input>
      ))}
      <Button styleMode="secondary" styleSize="medium" type="submit">
        Search
      </Button>
    </form>
  );
}
