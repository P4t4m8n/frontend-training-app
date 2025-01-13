import { TProgram } from "../../types/program.type";

interface Props {
  program: TProgram;
}
export default function ProgramPreview({ program }: Props) {
  return <div>{JSON.stringify(program)}</div>;
}
