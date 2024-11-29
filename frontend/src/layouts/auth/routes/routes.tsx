import { RouteObject } from "react-router-dom";

import AuthLayout from "@/layouts/auth/AuthLayout";

import Register from "@/layouts/auth/pages/Register";
import Login from "@/layouts/auth/pages/Login";

const appRoutes: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]
};

export default appRoutes;
