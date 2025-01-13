import { Route } from "react-router";
import { RouteConfig } from "./types/app.type";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import Registry from "./pages/Registry";
import TraineesList from "./components/Trainer/Trainees/TraineesList/TraineesList";
import TraineeCreateIndex from "./components/Trainee/TraineeCreateIndex";
import TraineeDetails from "./components/Trainee/TraineeDetails/TraineeDetails";
import ProgramEdit from "./components/Program/ProgramEdit/ProgramEdit";

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
  { path: "/registry", element: <Registry /> },
  {
    path: "/trainer",
    element: <Trainer />,
    children: [
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
        element: <TraineeDetails />,
      },
      {
        path: "trainees/:userId/program/edit",
        element: <ProgramEdit />,
      },
      {
        path: "trainees/:userId/program/edit/:id",
        element: <ProgramEdit />,
      },
    ],
  },
];
