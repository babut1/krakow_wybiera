import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SiteRouterProvider } from "./components/SiteRouterProvider";
import ReactGA from "react-ga";
ReactGA.initialize("G-FS43YKJPDG");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SiteRouterProvider />
  </React.StrictMode>
);
