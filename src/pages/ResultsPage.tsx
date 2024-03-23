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
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1050));
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
    navigate("/okrag");
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

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 5}>
          <Box textAlign={"left"}>
            <Typography variant={"h4"}>Twoje wyniki</Typography>
            <Typography variant={"h6"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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
        <Grid item xs={12} sm={0.5}></Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6.5}>
          <Box textAlign={"left"}>
            {Object.keys(committeeAnswers)
              .sort((a, b) => {
                const resultA = countResultPerCommittee(userAnswers, committeeAnswers[a].answers);
                const resultB = countResultPerCommittee(userAnswers, committeeAnswers[b].answers);
                return resultB - resultA;
              })
              .map((committee: string) => (
                <SimplifiedCandidateProfile
                  committeeName={committeeAnswers[committee].candidateName}
                  committeeResult={countResultPerCommittee(userAnswers, committeeAnswers[committee].answers)}
                  // todo: logo
                />
              ))}
          </Box>
        </Grid>
      </Grid>
      {isSmallScreen ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CandidateSlider></CandidateSlider>
        </Box>
      ) : (
        Object.keys(committeeAnswers)
          .sort((a, b) => {
            const resultA = countResultPerCommittee(userAnswers, committeeAnswers[a].answers);
            const resultB = countResultPerCommittee(userAnswers, committeeAnswers[b].answers);
            return resultB - resultA;
          })
          .map((committee: string, index: number) => (
            <>
              <CandidateProfile
                showAnswersButton={true}
                committeeAnswers={committeeAnswers[committee].answers}
                committeeResult={countResultPerCommittee(userAnswers, committeeAnswers[committee].answers)}
                candidateName={committeeAnswers[committee].candidateName}
              ></CandidateProfile>
              {index < Object.keys(committeeAnswers).length - 1 && <Divider orientation="horizontal" />}
            </>
          ))
      )}
    </Box>
  );
}
