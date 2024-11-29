import { RouteObject } from "react-router-dom";

import authRoutes from "@/layouts/auth/routes/routes";
import dashboardRoutes from "@/layouts/dashboard/routes/routes";

const appRoutes: RouteObject[] = [
  ...authRoutes,
  ...dashboardRoutes
];

export default appRoutes;
