import { RouteObject } from "react-router-dom";

import { AppLayout } from "@/layouts/AppLayout.tsx";

import { Modules } from "@/pages/Modules.tsx";
import { Properties } from "@/pages/Properties.tsx";
import { Settings } from "@/pages/Settings.tsx";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "modules", element: <Modules /> },
      { path: "properties", element: <Properties /> },
      { path: "settings", element: <Settings /> }
    ]
  }
];
