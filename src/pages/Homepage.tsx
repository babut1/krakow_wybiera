import { Box, Typography, Button, useTheme, useMediaQuery, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  function handleStartClick() {
    navigate("/instrukcja");
  }

  return (
    <Box
      minHeight={"500px"}
      justifyContent={"center"}
      textAlign={"center"}
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      p={isSmallScreen ? 2 : 8}
    >
      <Box sx={{ minHeight: "500px" }}>
        <Typography variant="h1">Kraków wybiera</Typography>
        <Typography variant="h5" padding={"20px"}>
          Weźże zrób nasz test i zobacz, który komitet widzi Kraków tak jak Ty! A później wyjdź na pole i ciesz się
          naszym pięknym miastem!
        </Typography>
        <Box padding={"20px"}>
          <Button sx={{ backgroundColor: "black" }} color="primary" variant="contained" onClick={handleStartClick}>
            <Typography variant="h6">Rozpocznij test</Typography>
          </Button>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7} textAlign={"left"}>
          <Typography variant="h3" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
            Kraków wybiera to...
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            narzędzie, które pozwala Ci porównać twoje poglądy na to jak powinien wyglądać Kraków z programami
            wyborczymi komitetami, którym udało się zarejestrować kandydatów do Rady Miasta Krakowa i na Prezydenta
            Miasta. Wystarczy, że uzupełnisz nasz test, a algorytm pokażę, do którego komitetu jest Ci najbliżej.
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Test składa się z 20 stwierdzeń, które dotyczą kwestii takich jak klimat i środowisko, transport publiczny,
            planowanie przestrzenne, społeczność lokalna, gospodarka, kultura i edukacja, czy bezpieczeństwo.
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Kraków Wybiera jest społecznym, oddolnym i niezależnym projektem. Chcemy pomóc Ci w świadomym wyborze!{" "}
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h4">Jak powstało nasze narzędzie?</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3} textAlign={"center"}>
          <Typography variant="h1" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
            1
          </Typography>
          <Typography>
            Wybraliśmy różne kluczowe dla Krakowa tematy i stworzyliśmy kwestionariusz. W opracowaniu testu wsparło nas
            Koło Naukowe Socjologii UJ Sekcja Badawcza oraz Koło Naukowe Nauk Politycznych UJ.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 1} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3} textAlign={"center"}>
          <Typography variant="h1" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
            2
          </Typography>
          <Typography>
            Przekazaliśmy komitetom, które zarejestrowały kandydatów do władz samorządowych w Krakowie kwestionariusz.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 1} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3} textAlign={"center"}>
          <Typography variant="h1" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
            3
          </Typography>
          <Typography>
            Przygotowaliśmy stronę internetową i algorytm, który oblicza zbieżność twoich poglądów z programem
            politycznym komitetów. Szczegółowy sposób działania algorytmu możesz zobaczyć na końcu naszego testu.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5} />
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7} textAlign={"left"}>
          <Typography variant="h3" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
            Kto przygotował narzędzie?
          </Typography>
          <Typography variant="h4" padding={"15px 0px 15px 0px"} fontWeight={"bold"}>
            O Stowarzyszeniu
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Kraków Wybiera to projekt przygotowany przez Stowarzyszenie Twój Wybór. Stowarzyszenie to działająca od 2018
            roku krakowska, młodzieżowa organizacja pozarządowa (potencjalnie do wykreślenia:zrzeszająca edukatorów,
            studentów, uczniów szkół średnich oraz aktywistów, którzy wspólnie działają dla świadomego społeczeństwa
            obywatelskiego). Cele organizacji to budowanie społeczności młodych ludzi zaangażowanych w sprawy publiczne,
            działanie na rzecz świadomości obywatelskiej i demokracji uczestniczącej, a także wspieranie reformy systemu
            kształcenia obywatelskiego.
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Kraków Wybiera jest społecznym, oddolnym i niezależnym projektem. Chcemy pomóc Ci w świadomym wyborze!
          </Typography>
          <Typography variant="h4" padding={"15px 0px 15px 0px"} fontWeight={"bold"}>
            Autorzy projektu
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Koordynacja projektu: Franciszek Bednarek
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Programowanie strony internetowej: Jakub Kościelniak
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Grafika, UX/UI design: Olga Kowalska
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Współpraca z komitetami: Jan Przewięźlikowski
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Opracowanie kwestionariusza: Koło Naukowe Socjologii UJ, Koło Naukowe Publicystyki Politycznej, Franciszek
            Bednarek, Mikołaj Sazonov, Jan Przewięźlikowski, Olga Kowalska
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Opracowanie algorytmu: Jakub Kościelniak, Franciszek Bednarek, Koło Naukowe Socjologii UJ
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"}>
            Koordynatorzy medialni: Łukasz Śliz, Aleksandra Fijałek, Franciszek Rychlak
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
