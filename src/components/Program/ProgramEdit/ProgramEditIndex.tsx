import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { TProgram } from "../../../types/program.type";

import { useUser } from "../../../hooks/useUser";

import { programUtil } from "../../../utils/program.util";
import { programService } from "../../../services/program.service";

import Input from "../../UI/Form/Input";
import ProgramEditDays from "./ProgramEditDays";
import ProgramEditDates from "./ProgramEditDates";
import Button from "../../UI/Button";

export default function ProgramEditIndex() {
  const { id: programId, traineeId } = useParams<{ traineeId: string; id: string }>();

  const trainerId = useUser().getCurrentUserNoRender()?.trainer?.id;
  const [programToEdit, setProgramToEdit] = useState<TProgram | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadProgram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programId]);

  const loadProgram = async () => {
    try {
      if (!programId) {
        const _program = programUtil.getEmpty(trainerId!, traineeId!);
        setProgramToEdit(_program);
        return;
      }

      setIsLoading(true);
      const _program = await programService.get(programId);
      setProgramToEdit(_program);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      //TODO add ids and data validation
      const id = await programService.create(formData, traineeId!, trainerId!);
      navigate(`/programs/${traineeId}/${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!programToEdit) return <div>Loading...</div>;

  const { name, days, startDate, endDate } = programToEdit;
  return (
    <form
      className="pt-4 flex flex-col gap-4  h-trainer-outlet"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        placeholder="Name"
        defaultValue={name}
        name="name"
        divStyle="h-10"
      />
      <ProgramEditDays days={days || []} />
      <ProgramEditDates startDate={startDate} endDate={endDate} />
      <Button
        styleMode="secondary"
        styleSize="large"
        type="submit"
        className=""
        disabled={isLoading}
      >
        Save
      </Button>
    </form>
  );
}
