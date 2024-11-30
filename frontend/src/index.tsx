import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";

import "@/styles/index.css";

const Wrapper = import.meta.env.VITE_STRICT_MODE === "true" ? StrictMode : Fragment;

createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <App />
  </Wrapper>
);
