import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SiteRouterProvider } from "./components/SiteRouterProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SiteRouterProvider />
  </React.StrictMode>
);
