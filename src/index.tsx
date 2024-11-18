import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "@/contexts/User/UserProvider";
import AppLayout from "@/AppLayout";

import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppLayout />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
