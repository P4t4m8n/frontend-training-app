import { TProgram } from "../../../types/program.type";
import { dateUtil } from "../../../utils/date.util";
import { ActiveSvg, CancelSvg } from "../../UI/Icons/IconsSvg";

interface Props {
  program: TProgram;
}
export default function ProgramInfo({ program }: Props) {
  const { days, name, endDate, startDate, isActive } = program;
  const formatStartDate = dateUtil.formatDateForPreview(startDate);
  const formatEndDate = dateUtil.formatDateForPreview(endDate);
  return (
    <div>
      <span>
        <h1>{name}</h1>
        {isActive ? <ActiveSvg /> : <CancelSvg />}
      </span>
      <span>
        {formatStartDate} - {formatEndDate}
      </span>
      <div>
        <h2>Repeat on days:</h2>
        <ul>
          {days?.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
