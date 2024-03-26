import { Box, Button, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function QuizExplanationPage() {
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
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7.7}>
          <Typography variant={"h4"} fontWeight={"bold"} marginBottom={isSmallScreen ? "20px" : "30px"}>
            Instrukcja uzupełnienia testu
          </Typography>
          <Typography variant={"h6"}>
            1. Kwestionariusz składa się z 20 stwierdzeń dot. różnych kwestii funkcjonowania, zarządzania i rozwoju
            Krakowa.
          </Typography>
          <Typography variant={"h6"}>
            2. Po przeczytaniu każdego stwierdzenia oraz jego wyjaśnienia odpowiedz czy zgadzasz się, nie zgadzasz się z
            danym stwierdzeniem lub czy nie masz zdania na jego temat. Następnie określ czy zagadnienie, które jest
            poruszane w stwierdzeniu jest dla Ciebie nieważne, średnio ważne lub ważne.
          </Typography>
          <Typography variant={"h6"}>
            3. Przy określaniu ważności poruszanych tematów kieruj się poniższymi wskazówkami:
          </Typography>
          <Typography variant={"h6"} fontWeight={"bold"} marginLeft={"25px"}>
            „nieważne”- w mojej ocenie miasto może, ale nie musi podjąć działania w danym obszarze i dany temat nie jest
            dla mnie istotny
          </Typography>
          <Typography variant={"h6"} fontWeight={"bold"} marginLeft={"25px"}>
            „średnio ważne”- w mojej ocenie miasto powinno podjąć działania w danym obszarze i dany temat jest dla mnie
            częściowo istotny
          </Typography>
          <Typography variant={"h6"} fontWeight={"bold"} marginLeft={"25px"}>
            „ważne”- w mojej ocenie ten temat powinien być priorytetowy dla miasta, miasto powinno się podjąć jego
            realizacji w pierwszej kolejności i/lub ma on dla mnie istotne znaczenie
          </Typography>
          <Typography variant={"h6"}>
            4. Przy udzielaniu odpowiedzi dokładnie rozważ, które odpowiedzi w sposób najpełniejszy odzwierciedlają
            twoje przekonania. Szczególnie uważnie podejdź do określania ważności danego zagadnienia.
          </Typography>
          <Typography variant={"h6"}>
            5. Po wypełnieniu testu zobaczysz swoją procentową zgodność z odpowiedziami komitetu/kandydata na
            prezydenta.
          </Typography>
        </Grid>
        <Grid item sm={isSmallScreen ? 0 : 0.3}></Grid>
        <Grid item sm={isSmallScreen ? 12 : 4}>
          <Paper elevation={4} sx={{ backgroundColor: "lightgrey", borderRadius: "15px", width: "100" }}>
            <Box p={3} textAlign={"left"}>
              <Typography variant="h4" paddingBottom={"20px"}>
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
