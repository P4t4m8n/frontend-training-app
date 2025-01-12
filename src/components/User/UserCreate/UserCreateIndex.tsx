import { useUser } from "../../../hooks/useUser";
import { userUtil } from "../../../utils/user.util";
import { traineeUtil } from "../../../utils/trainee.util";
import { useState } from "react";
import { userService } from "../../../services/user.service";
import MagicLink from "../../MagicLink/MagicLink";
import Button from "../../UI/Button";
import Input from "../../UI/Form/Input";

export default function UserCreateIndex() {
  const [isLoading, setIsLoading] = useState(false);
  const [magicLink, setMagicLink] = useState<string | null>(null);
  const { user } = useUser();

  const trainerId = user?.id;
  const userInput = userUtil.getInputs();
  const traineeInput = traineeUtil.getInputs(trainerId!);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);

      const _magicLink = await userService.create(formData);
      setMagicLink(_magicLink);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <header>User Create</header>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {userInput.map((input, index) => (
            <Input key={index} {...input} />
          ))}
          {traineeInput.map((input, index) => (
            <Input key={index} {...input} />
          ))}
        </div>
        <Button
          styleMode="none"
          styleSize="none"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </form>
      {magicLink && <MagicLink magicLink={magicLink} />}
    </div>
  );
}
