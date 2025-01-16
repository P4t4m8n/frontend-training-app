import { TProgram } from "../../../types/program.type";
import ProgramPreview from "../../Program/ProgramPreview";
import ItemList from "../../UI/ItemList";
import LinkCmp from "../../UI/Link";

interface Props {
  programs: TProgram[];
  traineeId: string;
}
export default function TraineeDetailsPrograms({ programs, traineeId }: Props) {
  return (
    <div className="border rounded p-4 w-full flex flex-col h-[calc(50%-9rem)] gap-2 ">
      <LinkCmp
        to={"program/edit"}
        styleMode="secondary"
        styleSize="medium"
        className="self-end border h-12 flex items-center p-2 font-title rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Program
      </LinkCmp>
      <ItemList
        listStyle=" h-[calc(100%-3.5rem)] overflow-auto grid gap-2"
        items={programs || []}
        renderItem={(program) => (
          <ProgramPreview program={program} traineeId={traineeId} />
        )}
      />
    </div>
  );
}
