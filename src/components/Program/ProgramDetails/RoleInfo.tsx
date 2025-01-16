interface Props {
  firstName?: string;
  isTrainer: boolean;
}
export default function RoleInfo({ firstName, isTrainer }: Props) {
  const role = isTrainer ? "Trainer" : "Trainee";
  return (
    <div className="flex gap-1">
      <h2>{role}</h2>
      <p>{firstName}</p>
    </div>
  );
}
