import { RouteObject } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Home from "@/pages/Home";
import Modules from "@/pages/Modules";
import Properties from "@/pages/Properties";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "modules", element: <Modules /> },
      { path: "properties", element: <Properties /> }
    ]
  }
];

export default appRoutes;
