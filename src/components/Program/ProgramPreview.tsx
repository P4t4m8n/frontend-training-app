import { Link } from "react-router";
import { TProgram } from "../../types/program.type";
import { ActiveSvg, CancelSvg } from "../UI/Icons/IconsSvg";

interface Props {
  program: TProgram;
  traineeId: string;
}
export default function ProgramPreview({ program, traineeId }: Props) {
  const { id, startDate, endDate, isActive, name } = program;
  console.log("program:", program);

  const url = `/programs/${traineeId}/${id}`;

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  return (
    <li className="w-full">
      <Link to={url} className="trainee-details-program-preview w-full ">
        <p>{name}</p>
        <span>
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
        {isActive ? <ActiveSvg /> : <CancelSvg />}
      </Link>
    </li>
  );
}
