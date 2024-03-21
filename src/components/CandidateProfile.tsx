import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { CommitteeAnswerInterface } from "../common/types";

export function CandidateProfile(props: {
  showAnswersButton: boolean;
  committeeAnswers: CommitteeAnswerInterface[] | null;
}) {
  const parentHeight = 180;
  const photoHeight = parentHeight * 0.9;
  const photoWidth = parentHeight * 0.7;

  return (
    <>
      <Box textAlign={"left"}>
        <Typography variant="h5">Komitet Harolda</Typography>
      </Box>
      <Grid container spacing={2} style={{ height: `${parentHeight}px` }}>
        <Grid item container xs={2.5} spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://m.media-amazon.com/images/I/41J1BcPUDUL._AC_UF894,1000_QL80_.jpg"
              alt="Photo 1"
              style={{ width: photoWidth, height: photoHeight }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://m.media-amazon.com/images/I/41J1BcPUDUL._AC_UF894,1000_QL80_.jpg"
              alt="Photo 1"
              style={{ width: photoWidth, height: photoHeight }}
            />
          </Grid>
        </Grid>

        <Grid item xs={4} container direction="column" textAlign={"left"}>
          <Grid item>
            <Typography variant="h5">Kandydat na Prezydenta Miasta</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Harold Kowalski</Typography>
          </Grid>
        </Grid>
        <Grid item xs={5.5}>
          <Box>
            <Box textAlign={"left"}>
              <Typography variant="h6">
                Zgodność Twoich opinii z programem
              </Typography>
            </Box>
            <ProgressBar
              completed={75}
              bgColor="grey"
              borderRadius="20px"
              height="55px"
              labelColor="black"
              labelAlignment="right"
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
                  color="primary"
                  variant="contained"
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
