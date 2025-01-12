import { Route } from "react-router";
import { RouteConfig } from "./types/app.type";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import TraineesIndex from "./components/Trainer/Trainees/TraineesIndex";
import UserCreateIndex from "./components/User/UserCreate/UserCreateIndex";
import Registry from "./pages/Registry";

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
        element: <TraineesIndex />,
      },
      {
        path: "trainees/create",
        element: <UserCreateIndex />,
      },
    ],
  },
];
