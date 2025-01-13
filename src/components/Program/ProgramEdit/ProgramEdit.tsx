import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { TProgram } from "../../../types/program.type";

import { useUser } from "../../../hooks/useUser";

import { programUtil } from "../../../utils/program.util";
import { programService } from "../../../services/program.service";

import Input from "../../UI/Form/Input";
import ProgramEditDays from "./ProgramEditDays";
import ProgramEditDates from "./ProgramEditDates";
import Button from "../../UI/Button";

export default function ProgramEdit() {
  const { id: programId, userId } = useParams<{ userId: string; id: string }>();

  const trainerId = useUser().getCurrentUserNoRender()?.trainer?.id;
  const [programToEdit, setProgramToEdit] = useState<TProgram | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadProgram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programId]);

  const loadProgram = async () => {
    try {
      if (!programId) {
        const _program = programUtil.getEmpty(trainerId!, userId!);
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
    try {
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !programToEdit) return <div>Loading...</div>;

  const { name, days, startDate, endDate } = programToEdit;
  return (
    <form className="" onSubmit={onSubmit}>
      <Input type="hidden" name="id" defaultValue={programId} />

      <Input type="text" placeholder="Name" defaultValue={name} name="name" />
      <ProgramEditDays days={days || []} />
      <ProgramEditDates startDate={startDate} endDate={endDate} />
      <Button styleMode="secondary" styleSize="large" type="submit">
        Save
      </Button>
    </form>
  );
}
