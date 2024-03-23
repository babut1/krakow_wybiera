import { Box, Button, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function QuizExplanationPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700));

  const handleGoBack = async () => {
    navigate("/");
  };

  const handleStart = async () => {
    navigate("/test");
  };

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7}>
          <Typography variant={"h3"}>Jak obliczamy wyniki?</Typography>
          <Typography variant={"h6"}></Typography>
        </Grid>
        <Grid item sm={isSmallScreen ? 0 : 0.5}></Grid>
        <Grid item sm={isSmallScreen ? 12 : 4.5}>
          <Paper elevation={4} sx={{ backgroundColor: "lightgrey", borderRadius: "15px", width: "100" }}>
            <Box p={3} textAlign={"left"}>
              <Typography variant="h5" paddingBottom={"15px"}>
                Pamiętaj
              </Typography>
              <Typography variant="body1">DUPD DUPA DUPA DAWFSEAFSEFSEFSE ESF SE FSE SE SEGSEVES VSE</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginTop: "30px", marginBottom: "30px" }} />
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
            textTransform: "none",
            width: "180px",
          }}
        >
          <Typography variant="h6">Strona główna</Typography>
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
            textTransform: "none",
            width: "180px",
          }}
        >
          <Typography variant="h6">Rozpocznij test</Typography>
        </Button>
      </Box>
    </Box>
  );
}
