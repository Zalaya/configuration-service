import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "@/contexts/auth/AuthProvider";

import appRoutes from "@/routes/routes";

const router = createBrowserRouter(appRoutes);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
