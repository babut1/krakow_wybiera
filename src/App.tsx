import React from "react";
import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Homepage } from "./components/Homepage";
import { useAppPage } from "./common/state";
import { MapPage } from "./components/MapPage";
import { ResultsView } from "./components/ResultsView";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

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
        {state === "homepage" && <ResultsView></ResultsView>}
        {/* {state === "homepage" && <Homepage></Homepage>} */}
        {state === "map" && <MapPage></MapPage>}
        {state === "quiz" && <Questionaire></Questionaire>}
        {state === "results" && <ResultsView></ResultsView>}
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
