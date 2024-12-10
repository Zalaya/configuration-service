import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { appRoutes } from "@/routes/routes.tsx";

const router = createBrowserRouter(appRoutes);

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
