import { ContactPage } from "../pages/ContactPage";
import { KrakowWybiera } from "../KrakowWybiera";
import { Homepage } from "../pages/Homepage";
import { RouteObject } from "react-router-dom";
import { ResultsView } from "../pages/ResultsPage";
import { Questionaire } from "../pages/Questionaire";
import { CommitteeAnswers } from "../pages/CommitteeAnswers";
import { QuizExplanationPage } from "../pages/QuizExplanationPage";
import { AlorithmPage } from "../pages/AlgorithmPage";

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
        element: <QuizExplanationPage />,
      },
      {
        path: "algorytm",
        element: <AlorithmPage />,
      },
      {
        path: "a",
        element: <CommitteeAnswers />,
      },
    ],
  },
];
