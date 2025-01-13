import { TProgram } from "../../../types/program.type";
import ProgramPreview from "../../Program/ProgramPreview";
import ItemList from "../../UI/ItemList";
import LinkCmp from "../../UI/Link";

interface Props {
  programs: TProgram[];
}
export default function TraineeDetailsPrograms({ programs }: Props) {
  return (
    <div className="border rounded p-4 w-full flex flex-col h-[calc(50%-9rem)]">
      <LinkCmp
        to={"program/edit"}
        styleMode="secondary"
        styleSize="medium"
        className="self-end border p-2 font-title rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Program
      </LinkCmp>
      <ItemList
        items={programs || []}
        renderItem={(program) => <ProgramPreview program={program} />}
      />
    </div>
  );
}
