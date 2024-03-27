import { Box, Typography, Button, useTheme, useMediaQuery, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(800));
  function handleStartClick() {
    navigate("/instrukcja");
  }
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Box
      minHeight={"500px"}
      justifyContent={"center"}
      textAlign={"center"}
      display="flex"
      alignItems="center"
      flexDirection={"column"}
    >
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#FFE299",
          paddingLeft: isSmallScreen ? "20px" : "50px",
          paddingRight: isSmallScreen ? "20px" : "50px",
          paddingBottom: "0px",
          paddingTop: "100px", // Adjust padding here
          width: isSmallScreen ? "calc(100% - 40px)" : "calc(100% - 100px)", // Adjust width to account for the padding
        }}
      >
        <Typography variant="h1" fontWeight={"bold"}>
          Kraków wybiera
        </Typography>
        <Typography variant="h5" padding={"20px"}>
          Uzupełnij nasz test i zobacz, który komitet widzi Kraków tak jak Ty. A później wyjdź na pole i ciesz się
          naszym pięknym miastem!
        </Typography>
        <Box padding={"20px"}>
          <Button
            sx={{ backgroundColor: "black", borderRadius: "15px", width: "220px", height: "70px" }}
            color="primary"
            variant="contained"
            onClick={handleStartClick}
          >
            <Typography variant="h5" textTransform={"none"}>
              Rozpocznij test
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "40vw",
          backgroundColor: "#FFE299",
          backgroundImage: "url('graphics/test_grafika.png')",
          backgroundSize: "100% 100%", // Make the background image cover the entire container
          backgroundRepeat: "no-repeat", // Prevent the background image from repeating
          backgroundPosition: "bottom", // Center the background image
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // Align items to the top
          paddingTop: "20vh", // Add padding to the top to create space
        }}
      ></Box>
      <Grid
        container
        sx={{
          backgroundColor: "#222222",
          color: "white",
          textAlign: "center",
          paddingBottom: "100px",
          paddingLeft: isSmallScreen ? "20px" : "0px",
          paddingRight: isSmallScreen ? "20px" : "0px",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: isSmallScreen ? "100%" : "50%",
            margin: "auto",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ padding: "15px 0" }}>
            Kraków wybiera to...
          </Typography>
          <Typography variant="body1" sx={{ padding: "15px 0" }} textAlign={"justify"}>
            narzędzie, które pozwala Ci porównać twoje poglądy na to jak powinien wyglądać Kraków z programami
            wyborczymi komitetów, którym udało się zarejestrować kandydatów do Rady Miasta Krakowa i na Prezydenta
            Miasta. Wystarczy, że uzupełnisz nasz test, a algorytm pokażę, do którego komitetu jest Ci najbliżej.
          </Typography>
          <Typography variant="body1" sx={{ padding: "15px 0" }} textAlign={"justify"}>
            Test składa się z 20 stwierdzeń, które dotyczą kwestii takich jak klimat i środowisko, transport publiczny,
            planowanie przestrzenne, społeczność lokalna, gospodarka, kultura i edukacja, czy bezpieczeństwo.
          </Typography>
          <Typography variant="body1" sx={{ padding: "15px 0" }} textAlign={"justify"}>
            Kraków Wybiera jest społecznym, oddolnym i niezależnym projektem. Chcemy pomóc Ci w świadomym wyborze!
          </Typography>
        </Grid>
      </Grid>
      <Box
        marginTop={"40px"}
        marginBottom={"40px"}
        paddingLeft={isSmallScreen ? "20px" : "0px"}
        paddingRight={isSmallScreen ? "20px" : "0px"}
      >
        <Box>
          <Typography variant="h4" fontWeight={"bold"} marginBottom={"30px"} marginTop={"30px"}>
            Jak powstało nasze narzędzie?
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5} />
          <Grid item xs={12} sm={isSmallScreen ? 12 : 3} textAlign={"center"}>
            <Typography variant="h1" fontWeight={"bold"} padding={"15px 0px 15px 0px"}>
              1
            </Typography>
            <Typography>
              Wybraliśmy różne kluczowe dla Krakowa tematy i stworzyliśmy kwestionariusz. W opracowaniu testu wsparło
              nas Koło Naukowe Socjologii UJ Sekcja Badawcza oraz Koło Naukowe Nauk Politycznych UJ.
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
      </Box>
      <Box sx={{ backgroundColor: "lightgrey" }} width={"100%"} marginTop={"50px"} paddingTop={"40px"}>
        <Typography variant="h4" fontWeight={"bold"} padding={"15px 0px 15px 0px"} textAlign={"center"}>
          Kto przygotował narzędzie?
        </Typography>
      </Box>
      <Grid
        container
        sx={{ backgroundColor: "lightgrey" }}
        padding={isSmallScreen ? "0px 20px 0px 20px" : "0px 50px 0px 50px"}
      >
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7} textAlign={"center"}>
          <Typography variant="h4" padding={"15px 0px 15px 0px"} fontWeight={"bold"} textAlign={"left"}>
            O Stowarzyszeniu
          </Typography>
          <Typography variant="body1" padding={"15px 0px 15px 0px"} textAlign={"justify"}>
            Kraków Wybiera to projekt przygotowany przez Stowarzyszenie Twój Wybór. Stowarzyszenie to działająca od 2018
            roku krakowska, młodzieżowa organizacja pozarządowa (potencjalnie do wykreślenia:zrzeszająca edukatorów,
            studentów, uczniów szkół średnich oraz aktywistów, którzy wspólnie działają dla świadomego społeczeństwa
            obywatelskiego). Cele organizacji to budowanie społeczności młodych ludzi zaangażowanych w sprawy publiczne,
            działanie na rzecz świadomości obywatelskiej i demokracji uczestniczącej, a także wspieranie reformy systemu
            kształcenia obywatelskiego.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 1} textAlign={"center"}></Grid>
        <Grid
          item
          xs={12}
          sm={isSmallScreen ? 12 : 4}
          textAlign={"center"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src="graphics/STW_logo.png" style={{ maxWidth: "100%", height: "auto" }}></img>
        </Grid>
      </Grid>
      <Box width={"100%"} sx={{ backgroundColor: "lightgrey" }} textAlign={isSmallScreen ? "center" : "left"}>
        <Typography variant="h4" padding={"15px 50px 15px 50px"} fontWeight={"bold"}>
          Autorzy projektu
        </Typography>
      </Box>
      <Grid
        container
        sx={{ backgroundColor: "lightgrey", paddingBottom: "50px" }}
        textAlign={isSmallScreen ? "center" : "left"}
      >
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3}>
          <Typography variant="h6" marginBottom={"10px"}>
            Koordynacja projektu:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"40px"}>
            Franciszek Bednarek
          </Typography>
          <Typography variant="h6" marginBottom={"10px"}>
            Strona internetowa:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"40px"}>
            Jakub Kościelniak
          </Typography>
          <Typography variant="h6" marginBottom={"15px"}>
            Opracowanie algorytmu:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Franciszek Bednarek
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Jakub Kościelniak
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"40px"}>
            Koło naukowe socjologii UJ
          </Typography>
          <Typography variant="h6" marginBottom={"15px"}>
            Analiza danych:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Maciej Pelc
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Igor Dołęga
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 1} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3}>
          <Typography variant="h6" marginBottom={"10px"} marginTop={isSmallScreen ? "40px" : "0px"}>
            Grafika, UX/UI design:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"40px"}>
            Olga Kowalska
          </Typography>
          <Typography variant="h6" marginBottom={"10px"}>
            Współpraca z komitetami:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"40px"}>
            Jan Przewięźlikowski
          </Typography>
          <Typography variant="h6" marginBottom={"10px"}>
            Koordynatorzy medialni:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Łukasz Śliz
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Aleksandra Fijałek
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Franciszek Rychlak
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 1} />
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3}>
          <Typography variant="h6" marginBottom={"10px"} marginTop={isSmallScreen ? "40px" : "0px"}>
            Opracowanie kwestionariusza:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Franciszek Bednarek
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Mikołaj Sazanov
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Jan Przewięźlikowski
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"15px"}>
            Olga Kowalska
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Koło Naukowe Socjologii UJ:
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Kacper Wcisło
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Natalia Szwedowska
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Maciej Etmanski
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Jakub Dumana
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Hubert Szotek
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Tomasz Turzański
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Katarzyna Krauze
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Marta Andrzejewska
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"15px"}>
            Katarzyna Markowska
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} marginBottom={"15px"}>
            Koło Naukowe Publicystyki Politycznej
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5} />
      </Grid>
      {/* <Box>
        <Typography variant="h4" padding={"15px 0px 15px 50px"} fontWeight={"bold"}>
          Partnerzy Projektu
        </Typography>
      </Box> */}
    </Box>
  );
}
