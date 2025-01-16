import { useEffect, useState } from "react";
import { TProgram } from "../../../types/program.type";
import { useParams } from "react-router";
import { programService } from "../../../services/program.service";

import ProgramInfo from "./ProgramInfo";
import RoleInfo from "./RoleInfo";

export default function ProgramDetailsIndex() {
  const [program, setProgram] = useState<TProgram | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    loadProgram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function loadProgram() {
    try {
      if (!id) {
        console.error("No id provided");
        //TODO: handle error
        return;
      }
      const _program = await programService.get(id);
      console.log("_program:", _program);
      setProgram(_program);
    } catch (error) {
      console.error(error);
    }
  }

  if (!program) return <div>Loading...</div>;
  const { trainee, trainer, trainings } = program;

  return (
    <div className="p-2">
      <ProgramInfo program={program} />
      <RoleInfo firstName={trainer?.user?.firstName} isTrainer={true} />
      <RoleInfo firstName={trainee?.user?.firstName} isTrainer={false} />
    </div>
  );
}
