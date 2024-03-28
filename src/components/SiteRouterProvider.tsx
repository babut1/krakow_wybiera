import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { routes } from "../common/routing";

export function SiteRouterProvider() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
