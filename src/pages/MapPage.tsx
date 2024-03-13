import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeSelectedQuestion } from "../common/state";

export function MapPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleGoBack = async () => {
    navigate("/");
  };

  const handleStart = async () => {
    navigate("/test");
  };

  return (
    <Box p={isSmallScreen ? 3 : 8} boxShadow={3} mx="auto">
      <Typography variant="h6" gutterBottom textAlign="left">
        Najpierw wybeirz swój okręg wyborczy
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 5}>
          <Typography
            variant="h5"
            gutterBottom
            textAlign="left"
            sx={{ minHeight: isSmallScreen ? "0px" : "200px" }}
          >
            Lorem ipsum dupdapafjiosefhnius ifjsiuoef hse fhsuiefb siuefbi
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleGoBack}
              sx={{ margin: "10px", color: "black", borderColor: "black" }}
            >
              Powrót do strony głównej
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStart}
              sx={{ margin: "10px", backgroundColor: "black" }}
            >
              Rozpocznij test
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7}>
          <img
            src="https://www.poczetkrakowski.pl/data/domains/1/pl/c_descriptive_page/4774/257/images/56-gk-a4.jpg"
            height={"100%"}
            width={"100%"}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}
