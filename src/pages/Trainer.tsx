import { Outlet } from "react-router";
import NavLinks from "../components/UI/NavLinks";

export default function TrainerPage() {
  return (
    <div className="p-4 h-full w-full ">
      <NavLinks
        navStyle="flex w-full justify-between h-12 items-center text-sm font-semibold"
        itemStyle="px-2 border items-center flex h-full rounded bg-black text-white  hover:bg-white hover:text-black transition-colors duration-300"
        navLinks={NAV_LINKS}
      />
      <Outlet />
    </div>
  );
}

const NAV_LINKS = [
  {
    to: "trainees",
    text: "Trainees",
  },
  {
    to: "training",
    text: "training",
  },
  {
    to: "trainees/create",
    text: "Create Trainee",
  },
  {
    to: "training/edit",
    text: "Create Training",
  },
];
