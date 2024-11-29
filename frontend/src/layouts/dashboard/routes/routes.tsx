import { RouteObject } from "react-router-dom";

import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

import Modules from "@/layouts/dashboard/pages/Modules";
import Properties from "@/layouts/dashboard/pages/Properties";
import ProtectedRoute from "@/components/Navigation/ProtectedRoute";

const dashboardRoutes: RouteObject = {
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
};

export default dashboardRoutes;
