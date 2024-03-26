import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { routing } from "../common/routing";

export function SiteRouterProvider() {
  const router = createBrowserRouter(routing);

  return <RouterProvider router={router} />;
}
