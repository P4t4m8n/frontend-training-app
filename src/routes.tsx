import { Route } from "react-router";
import { RouteConfig } from "./types/app.type";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import Registry from "./pages/Registry";
import TraineesList from "./components/Trainer/Trainees/TraineesList/TraineesList";
import TraineeCreateIndex from "./components/Trainee/TraineeCreateIndex";
import TraineeDetailsIndex from "./components/Trainee/TraineeDetails/TraineeDetailsIndex";
import ProgramEditIndex from "./components/Program/ProgramEdit/ProgramEditIndex";
import ProgramDetailsIndex from "./components/Program/ProgramDetails/ProgramDetailsIndex";
import TrainingEditIndex from "./components/Training/TrainingEditIndex/TrainingEditIndex";
import TrainerTrainingList from "./components/Trainer/Trainings/TrainerTrainingList";
import TrainingDetailsIndex from "./components/Training/TrainingDetails/TrainingDetailsIndex";

export const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programs/:userId/:id",
    element: <ProgramDetailsIndex />,
  },
  {
    path: "/training/:id",
    element: <TrainingDetailsIndex />,
  },
  { path: "/registry", element: <Registry /> },
  {
    path: "/trainer",
    element: <Trainer />,
    children: [
      {
        path: "training",
        element: <TrainerTrainingList />,
      },
      {
        path: "training/edit",
        element: <TrainingEditIndex />,
      },
      {
        path: "trainees",
        element: <TraineesList />,
      },
      {
        path: "trainees/create",
        element: <TraineeCreateIndex />,
      },
      {
        path: "trainees/:id",
        element: <TraineeDetailsIndex />,
      },
      {
        path: "trainees/:traineeId/program/edit",
        element: <ProgramEditIndex />,
      },
      {
        path: "trainees/:traineeId/program/edit/:id",
        element: <ProgramEditIndex />,
      },
    ],
  },
];
