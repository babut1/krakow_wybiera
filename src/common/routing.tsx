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
        path: "konfederacjaibezpartyjnisamorzadowcy",
        element: <CommitteeAnswers committeeName="konfederacjaibezpartyjnisamorzadowcy" />,
      },
      {
        path: "krakowdlamieszkancow",
        element: <CommitteeAnswers committeeName="krakowdlamieszkancow" />,
      },
      {
        path: "zjednoczenidlakrakowa",
        element: <CommitteeAnswers committeeName="zjednoczenidlakrakowa" />,
      },
      {
        path: "prawoisprawiedliwosc",
        element: <CommitteeAnswers committeeName="prawoisprawiedliwosc" />,
      },
      {
        path: "trzeciadroga",
        element: <CommitteeAnswers committeeName="trzeciadroga" />,
      },
      {
        path: "kuprzyszlosci",
        element: <CommitteeAnswers committeeName="kuprzyszlosci" />,
      },
      {
        path: "stanislawmazur",
        element: <CommitteeAnswers committeeName="stanislawmazur" />,
      },
      {
        path: "koalicjaobywatelska",
        element: <CommitteeAnswers committeeName="koalicjaobywatelska" />,
      },
      {
        path: "samorzadnykrakow",
        element: <CommitteeAnswers committeeName="samorzadnykrakow" />,
      },
      {
        path: "instrukcja",
        element: <QuizExplanationPage />,
      },
      {
        path: "algorytm",
        element: <AlorithmPage />,
      },
    ],
  },
];
