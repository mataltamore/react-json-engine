import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
