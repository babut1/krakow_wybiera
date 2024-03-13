import { ContactPage } from "../pages/ContactPage";
import { KrakowWybiera } from "../components/KrakowWybiera";
import { Homepage } from "../pages/Homepage";
import { RouteObject } from "react-router-dom";
import { ResultsView } from "../pages/ResultsPage";
import { Questionaire } from "../pages/Questionaire";
import { MapPage } from "../pages/MapPage";

export const routing: RouteObject[] = [
  {
    path: "/",
    element: <KrakowWybiera />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "kontakt",
        element: <ContactPage />,
      },
      {
        path: "test",
        element: <Questionaire />,
      },
      {
        path: "wyniki",
        element: <ResultsView />,
      },
      {
        path: "okrag",
        element: <MapPage />,
      },
    ],
  },
];
