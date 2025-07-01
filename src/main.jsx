import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import App16 from "./App16.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App16 />
  </StrictMode>,
);
