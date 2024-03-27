import { Box, Button, CircularProgress, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CandidateProfile } from "../components/CandidateProfile";
import { SimplifiedCandidateProfile } from "../components/SimplifiedCandidateProfile";
import CandidateSlider from "../components/CandidateSlider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Committee } from "../common/types";
import { useUserAnswers } from "../common/state";
import { countResultPerCommittee } from "../common/utils";

export function ResultsView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1120));
  const navigate = useNavigate();
  const [fetchingData, setFetchingData] = useState<boolean>(true);
  const [committeeAnswers, setCommitteeAnswers] = useState<Committee>({});
  const userAnswers = useUserAnswers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/committees.json");
        const data = await response.json();
        setCommitteeAnswers(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData().finally(() => {
      setFetchingData(false);
    });
  }, []);

  const handleSolveAgain = () => {
    navigate("/instrukcja");
  };

  if (fetchingData) {
    return (
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (userAnswers.length !== 20) {
    return (
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">Przed obejrzeniem wyników należy rozwiązać test</Typography>
        <Button
          sx={{
            backgroundColor: "black",
            borderRadius: "15px",
            textTransform: "none",
            width: "200px",
            height: "50px",
          }}
          color="primary"
          variant="contained"
          onClick={() => navigate("/")}
        >
          <Typography variant="h6">Strona główna</Typography>
        </Button>
      </Box>
    );
  }

  return (
    <Box p={isSmallScreen ? 2 : 6}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 3.8}>
          <Box textAlign={isSmallScreen ? "center" : "left"} marginTop={isSmallScreen ? "20px" : "0px"}>
            <Typography variant={"h3"} fontWeight={"bold"} marginBottom={isSmallScreen ? "20px" : "30px"}>
              Twoje wyniki
            </Typography>
            <Typography variant={"h6"}>
              Obok znajdziesz swoją zgodność z odpowiedziami komitetu/ kandydata na prezydenta.
            </Typography>
            <Typography variant={"h6"} marginTop={"30px"}>
              Przesuwając w dół znajdziesz szczegółowe odpowiedzi oraz komentarze komitetów/ kandydatów na prezydenta.
              Zapoznaj się z nimi w szczególności, jeżeli Twoje różnice w zgodności nie są znaczne.
            </Typography>
            <Box padding={"25px 0px 25px 0px"}>
              <Button
                sx={{
                  width: isSmallScreen ? "100%" : "250px",
                  backgroundColor: "black",
                  borderRadius: "15px",
                  textTransform: "none",
                }}
                color="primary"
                variant="contained"
                onClick={handleSolveAgain}
              >
                <Typography variant="h6">Rozwiąż jeszcze raz</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={0.4}></Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7.8}>
          <Box textAlign={"left"}>
            {Object.keys(committeeAnswers)
              .sort((a, b) => {
                const resultA = countResultPerCommittee(
                  userAnswers,
                  committeeAnswers[a].answers,
                  committeeAnswers[a].importantMatters
                );
                const resultB = countResultPerCommittee(
                  userAnswers,
                  committeeAnswers[b].answers,
                  committeeAnswers[b].importantMatters
                );
                return resultB - resultA;
              })
              .map((committee: string) => (
                <>
                  <SimplifiedCandidateProfile
                    committeeName={committeeAnswers[committee].committeeShorterFullName}
                    committeeResult={countResultPerCommittee(
                      userAnswers,
                      committeeAnswers[committee].answers,
                      committeeAnswers[committee].importantMatters
                    )}
                    committeeLogoPath={committeeAnswers[committee].committeeLogoPath}
                  />
                  <Divider orientation="horizontal" />
                </>
              ))}
          </Box>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginBottom: "40px" }} />
      {isSmallScreen ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CandidateSlider committees={committeeAnswers}></CandidateSlider>
        </Box>
      ) : (
        Object.keys(committeeAnswers)
          .sort((a, b) => {
            const resultA = countResultPerCommittee(
              userAnswers,
              committeeAnswers[a].answers,
              committeeAnswers[a].importantMatters
            );
            const resultB = countResultPerCommittee(
              userAnswers,
              committeeAnswers[b].answers,
              committeeAnswers[b].importantMatters
            );
            return resultB - resultA;
          })
          .map((committee: string, index: number) => (
            <>
              <CandidateProfile
                showAnswersButton={true}
                committeeAnswers={committeeAnswers[committee].answers}
                committeeResult={countResultPerCommittee(
                  userAnswers,
                  committeeAnswers[committee].answers,
                  committeeAnswers[committee].importantMatters
                )}
                candidateName={committeeAnswers[committee].candidateName}
                committeeLists={committeeAnswers[committee].committeeLists}
                committeeName={committee}
                logoPath={committeeAnswers[committee].committeeLogoPath}
                candidatePath={committeeAnswers[committee].candidatePicturePath}
                committeeFullName={committeeAnswers[committee].fullCommitteeName}
                hasAgreed={committeeAnswers[committee].hasAgreed}
              ></CandidateProfile>
              {index < Object.keys(committeeAnswers).length - 1 && (
                <Divider orientation="horizontal" sx={{ marginBottom: "15px", marginTop: "15px" }} />
              )}
            </>
          ))
      )}
    </Box>
  );
}
