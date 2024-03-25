import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { CommitteeAnswerInterface } from "../common/types";
import { useNavigate } from "react-router-dom";

export function CandidateProfile(props: {
  showAnswersButton: boolean;
  committeeAnswers: CommitteeAnswerInterface[] | null;
  committeeResult: number;
  candidateName: string;
  committeeLists: string;
  committeeName: string;
  logoPath: string;
  candidatePath: string;
  committeeFullName: string;
  hasAgreed: boolean;
}) {
  const navigate = useNavigate();
  const parentHeight = 180;
  const photoHeight = parentHeight * 0.9;
  const photoWidth = parentHeight * 0.7;

  return (
    <>
      <Box textAlign={"left"}>
        <Typography variant="h5" fontWeight={"bold"}>
          {props.committeeFullName}
        </Typography>
      </Box>
      <Grid container spacing={2} style={{ height: `${parentHeight}px` }}>
        <Grid item container xs={3} spacing={2}>
          <Grid item xs={6}>
            <img src={props.candidatePath} alt="Zdjęcie kandydata" style={{ width: photoWidth, height: photoHeight }} />
          </Grid>
          <Grid item xs={6} container justifyContent="center" alignItems="center">
            <img src={props.logoPath} alt="Logo komitetu" style={{ width: photoWidth, height: photoHeight / 2.2 }} />
          </Grid>
        </Grid>
        <Grid item xs={3.5} container direction="column" alignContent={"center"} justifyContent={"center"}>
          <Grid item style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h6">Kandydat na Prezydenta Miasta</Typography>
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              {props.candidateName}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5.5}>
          <Box>
            <Box textAlign={"left"}>
              <Typography variant="h6">
                {props.hasAgreed ? "Zgodność Twoich opinii z programem" : "Komitet nie wziął udziału w badaniu"}
              </Typography>
            </Box>
            <ProgressBar
              completed={props.committeeResult}
              labelColor="white"
              bgColor="black"
              baseBgColor="darkgrey"
              borderRadius="20px"
              height="55px"
              labelAlignment="right"
              labelSize="40"
            />
            <Box textAlign={"right"}>
              <Button
                sx={{
                  marginRight: "10px",
                  color: "black",
                  borderColor: "black",
                  marginTop: "20px",
                  borderRadius: "15px",
                  textTransform: "none",
                  width: "170px",
                }}
                variant="outlined"
                onClick={() => window.open(props.committeeLists, "_blank")}
              >
                <Typography variant="h6">Listy komitetu</Typography>
              </Button>
              {props.showAnswersButton && (
                <Button
                  sx={{
                    backgroundColor: "black",
                    marginTop: "20px",
                    borderRadius: "15px",
                    textTransform: "none",
                    width: "240px",
                  }}
                  onClick={() => navigate(`/${props.committeeName}`)}
                  color="primary"
                  variant="contained"
                  disabled={!props.hasAgreed}
                >
                  <Typography variant="h6">Odpowiedzi komitetu</Typography>
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
