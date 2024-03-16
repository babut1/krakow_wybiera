import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DistrictSelectorManager } from "../components/DistrictSelector";

export function MapPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1000));

  const handleGoBack = async () => {
    navigate("/");
  };

  const handleStart = async () => {
    navigate("/test");
  };

  return (
    <Box p={isSmallScreen ? 2 : 8} boxShadow={3} mx="auto">
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 4}>
          <Typography
            variant="h3"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
            fontWeight={"bold"}
          >
            Najpierw wybierz swój okręg wyborczy
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Zaznacz swój okręg wyborczy klikając numerek na mapie
          </Typography>
          {!isSmallScreen && (
            <>
              <Divider
                orientation="horizontal"
                sx={{ marginTop: "30px", marginBottom: "30px" }}
              />
              <Paper
                elevation={4}
                sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}
              >
                <Box p={4} textAlign={"left"}>
                  <Grid container alignItems="center" marginBottom={"30px"}>
                    <Typography
                      textAlign="right"
                      variant="h5"
                      style={{ flex: "0 0 50%" }}
                    >
                      Wybrany okręg:
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                    </Typography>
                  </Grid>
                  <Grid container alignItems="center">
                    <Typography
                      textAlign="right"
                      variant="h5"
                      style={{ flex: "0 0 50%" }}
                    >
                      Dzielnice:
                    </Typography>
                    <Box>
                      <Typography variant="h5" fontWeight={"bold"}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dupa
                      </Typography>
                      <Typography variant="h5" fontWeight={"bold"}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dupa
                      </Typography>
                      <Typography variant="h5" fontWeight={"bold"}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dupa
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Paper>
              <Divider
                orientation="horizontal"
                sx={{ marginTop: "30px", marginBottom: "30px" }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleGoBack}
                  sx={{
                    margin: "10px",
                    color: "black",
                    borderColor: "black",
                    borderRadius: "15px",
                    height: "50px",
                  }}
                >
                  Powrót do strony głównej
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStart}
                  sx={{
                    margin: "10px",
                    backgroundColor: "black",
                    borderRadius: "15px",
                    height: "50px",
                  }}
                >
                  Rozpocznij test
                </Button>
              </Box>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 8}>
          <img
            src="https://www.poczetkrakowski.pl/data/domains/1/pl/c_descriptive_page/4774/257/images/56-gk-a4.jpg"
            height={"100%"}
            width={"100%"}
          ></img>
        </Grid>
        {isSmallScreen && (
          <>
            <DistrictSelectorManager />
            <Grid container alignItems="center" justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={handleGoBack}
                sx={{
                  width: "48%",
                  color: "black",
                  borderColor: "black",
                  textTransform: "none",
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "50px",
                }}
              >
                Powrót do strony głównej
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleStart}
                sx={{
                  width: "48%",
                  borderColor: "black",
                  backgroundColor: "black",
                  textTransform: "none",
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "50px",
                }}
              >
                Rozpocznij test
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
