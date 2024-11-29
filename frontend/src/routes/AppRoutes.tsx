import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    ...authRoutes,
    ...dashboardRoutes
  ])

  return routes;
};

export default AppRoutes;
