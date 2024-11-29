import { RouteObject } from "react-router-dom";

import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

import ProtectedRoute from "@/components/Navigation/ProtectedRoute";

import Modules from "@/layouts/dashboard/pages/Modules";
import Properties from "@/layouts/dashboard/pages/Properties";

const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "modules", element: <Modules /> },
      { path: "properties", element: <Properties /> },
    ]
  }
];

export default dashboardRoutes;
