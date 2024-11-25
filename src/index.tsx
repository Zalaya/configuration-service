import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppLayout from "@/AppLayout";

import "@/styles/index.css";

const Wrapper = import.meta.env.VITE_REACT_STRICT_MODE === "true" ? StrictMode : Fragment;

createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </Wrapper>
);
