import { TUser } from "../../../types/user.type";
import Button from "../../UI/Button";

interface Props {
  user: TUser;
}
export default function TraineeUserDetails({ user }: Props) {
  const { firstName, lastName, phone, email } = user;

  return (
    <div className="border rounded  h-24 flex justify-between p-2 ">
      <div className="">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <Button styleMode="secondary" styleSize="medium">
        Edit Details
      </Button>
    </div>
  );
}
