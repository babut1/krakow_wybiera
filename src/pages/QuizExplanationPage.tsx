import { Box, Button, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function QuizExplanationPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1000));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = async () => {
    navigate("/");
  };

  const handleStart = async () => {
    navigate("/test");
  };

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7.3} textAlign={isSmallScreen ? "center" : "left"}>
          <Typography
            variant={"h3"}
            fontWeight={"900"}
            marginBottom={isSmallScreen ? "20px" : "30px"}
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Jak wypełnić test?
          </Typography>
          <Typography variant={"h6"}>1. Kwestionariusz składa się z 20 stwierdzeń.</Typography>
          <Typography variant={"h6"} marginTop={"10px"}>
            2. Po przeczytaniu każdego stwierdzenia oraz jego wyjaśnienia odpowiedz, czy się z nim zgadzasz. Odpowiadaj
            zgodnie ze swoimi przekonaniami.
          </Typography>
          <Typography variant={"h6"} marginTop={"10px"}>
            3. Przy określaniu ważności poruszanych tematów kieruj się poniższymi wskazówkami:
          </Typography>
          <Typography variant={"h6"} marginLeft={isSmallScreen ? "0px" : "25px"}>
            <strong>„mało ważne”</strong> - w mojej ocenie miasto może, ale nie musi podjąć działania w danym obszarze i
            dany temat jest dla mnie mało istotny
          </Typography>
          <Typography variant={"h6"} marginLeft={isSmallScreen ? "0px" : "25px"}>
            <strong>„średnio ważne”</strong> - w mojej ocenie miasto powinno podjąć działania w danym obszarze i dany
            temat jest dla mnie częściowo istotny
          </Typography>
          <Typography variant={"h6"} marginLeft={isSmallScreen ? "0px" : "25px"}>
            <strong>„bardzo ważne”</strong> - w mojej ocenie ten temat powinien być priorytetowy dla miasta, miasto
            powinno się podjąć jego realizacji w pierwszej kolejności i/lub ma on dla mnie istotne znaczenie
          </Typography>
          <Typography variant={"h6"} marginTop={"10px"}>
            4. Po wypełnieniu testu zobaczysz zgodność swoich odpowiedzi z odpowiedziami komitetu/kandydata na
            prezydenta.
          </Typography>
        </Grid>
        <Grid item sm={isSmallScreen ? 0 : 0.7}></Grid>
        <Grid item sm={isSmallScreen ? 12 : 4}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "lightgrey",
              borderRadius: "15px",
              width: "100",
              marginTop: isSmallScreen ? "20px" : "0px",
            }}
          >
            <Box p={3} textAlign={isSmallScreen ? "center" : "left"}>
              <Typography variant="h5" paddingBottom={"20px"} fontWeight={"bold"}>
                Pamiętaj!
              </Typography>
              <Typography variant="h6">
                Nasze narzędzie jest tylko wskazówką, pomocą, a nie gotową odpowiedzią na to na kogo masz głosować w
                nadchodzących wyborach. Zachęcamy Cię do zapoznania się z komentarzami komitetów oraz programami
                poszczególnych kandydatów.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginTop: "20px", marginBottom: "10px" }} />
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
            width: isSmallScreen ? "48%" : "180px",
          }}
        >
          <Typography variant="body1">Strona główna</Typography>
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
            width: isSmallScreen ? "48%" : "180px",
          }}
        >
          <Typography variant="body1">Rozpocznij test</Typography>
        </Button>
      </Box>
    </Box>
  );
}
