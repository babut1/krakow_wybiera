import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { useAppPage } from "../common/state";
import { Homepage } from "../pages/Homepage";
import { TopBar } from "./TopBar";
import { MapPage } from "../pages/MapPage";
import { Questionaire } from "../pages/Questionaire";
import { ResultsView } from "../pages/ResultsPage";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function KrakowWybiera() {
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
    <ThemeProvider theme={responsiveTheme}>
      <TopBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
