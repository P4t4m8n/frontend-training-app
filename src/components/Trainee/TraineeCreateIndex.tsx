import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { userUtil } from "../../utils/user.util";
import { traineeUtil } from "../../utils/trainee.util";
import Input from "../UI/Form/Input";
import MagicLink from "../MagicLink/MagicLink";
import Button from "../UI/Button";
import { traineeService } from "../../services/trainee.service";

export default function TraineeCreateIndex() {
  const [isLoading, setIsLoading] = useState(false);
  const [magicLink, setMagicLink] = useState<string | null>(null);
  const { user } = useUser();

  const trainerId = user?.trainer?.id;
  const userInput = userUtil.getInputs();
  const traineeInput = traineeUtil.getInputs(trainerId!);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);

      const _magicLink = await traineeService.create(formData);
      setMagicLink(_magicLink);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="pt-4 h-[calc(100%-3rem)]">
      <header className="text-center text-lg font-semibold underline h-8">
        User Create
      </header>
      <form onSubmit={onSubmit} className="grid gap-4 h-[calc(100%-2rem)]">
        <div className=" grid grid-cols-1 gap-4 ">
          <div className="grid grid-cols-1 gap-4">
            <h1 className="">User Details</h1>
            <ul className="grid gap-2 px-2">
              {userInput.map((input, index) => (
                <Input key={index} {...input} />
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h1>Metrics</h1>
            <ul className="grid grid-cols-2 gap-2 px-2">
              {traineeInput.map((input, index) => (
                <Input key={index} {...input} />
              ))}
            </ul>
          </div>
        </div>

        {magicLink && <MagicLink magicLink={magicLink} />}

        <Button
          styleMode="none"
          styleSize="none"
          className="px-3 py-2 w-full self-end border rounded bg-black text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </form>
    </div>
  );
}
