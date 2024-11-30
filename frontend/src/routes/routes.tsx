import { RouteObject } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Modules from "@/pages/Modules";
import Properties from "@/pages/Properties";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "modules", element: <Modules /> },
      { path: "properties", element: <Properties /> }
    ]
  }
];

export default appRoutes;
