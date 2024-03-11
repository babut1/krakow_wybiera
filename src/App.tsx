import React from "react";
import "./App.css";
import { Questionaire } from "./pages/Questionaire";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Homepage } from "./pages/Homepage";
import { useAppPage } from "./common/state";
import { MapPage } from "./pages/MapPage";
import { ResultsView } from "./pages/ResultsPage";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { Contact } from "./pages/ContactPage";

function App() {
  const state = useAppPage();
  let responsiveTheme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Lato"].join(","),
      body1: {
        fontFamily: "Lato",
      },
      body2: {
        fontFamily: "Lato",
      },
      button: {
        fontFamily: "Lato",
      },
    },
  });
  responsiveTheme = responsiveFontSizes(responsiveTheme);

  return (
    <div className="App">
      <ThemeProvider theme={responsiveTheme}>
        <TopBar></TopBar>
        {state === "homepage" && <Homepage></Homepage>}
        {state === "map" && <MapPage></MapPage>}
        {state === "quiz" && <Questionaire></Questionaire>}
        {state === "results" && <ResultsView></ResultsView>}
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
