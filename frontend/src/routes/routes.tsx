import { Navigate, RouteObject } from "react-router-dom";

import authRoutes from "@/layouts/auth/routes/routes";
import dashboardRoutes from "@/layouts/dashboard/routes/routes";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/dashboard/modules" replace />
  },
  ...authRoutes,
  ...dashboardRoutes
];

export default appRoutes;
