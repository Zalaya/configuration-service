import { createBrowserRouter, RouterProvider } from "react-router-dom";

import appRoutes from "@/routes/routes";

const router = createBrowserRouter(appRoutes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
