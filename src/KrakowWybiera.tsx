import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

export function KrakowWybiera() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1050));
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
      <div style={{ marginTop: isSmallScreen ? "80px" : "64px" }}>
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
