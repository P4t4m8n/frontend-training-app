import { Link } from "react-router";
import { TTrainee } from "../../../../../types/trainee.type";
import { EmailSvg, PhoneSvg } from "../../../../UI/Icons/IconsSvg";
import Button from "../../../../UI/Button";
import { MouseEvent } from "react";

interface Props {
  trainee: TTrainee;
}
//TODO: when moving to native implement the call feature for the phone
export default function TraineePreview({ trainee }: Props) {
  const { user, id } = trainee;
  const { firstName, lastName, email } = user;

  const onEmail = (e: MouseEvent) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`);
  };
  return (
    <li>
      <Link
        className="w-full h-full trainee-preview-item"
        to={`${id}`}
      >
        <p>{firstName}</p>
        <p>{lastName}</p>
        <Button styleMode="none" styleSize="none" onClick={onEmail}>
          <EmailSvg className="h-6 aspect-square" />
        </Button>
        <p>
          <PhoneSvg className="h-6 aspect-square fill-none" />
        </p>
      </Link>
    </li>
  );
}
