import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import App57 from "./App57.jsx";

createRoot(document.getElementById("root")).render(
  // strict mode : 렌더링할 때, 모든 컴포넌트를 [마운트->언마운트->마운트] 과정을 수행한다.
  // <StrictMode>
  <App57 />,
  // </StrictMode>,
);
