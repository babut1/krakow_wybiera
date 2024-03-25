import { Box, Button, Grid, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

export function SimplifiedCandidateProfile(props: {
  committeeName: string;
  committeeResult: number;
  committeeLogoPath: string;
}) {
  return (
    <>
      <Grid container spacing={0} sx={{ height: "70px" }}>
        <Grid item container xs={2} spacing={2}>
          <Grid item xs={6} marginTop="5px">
            <img src={props.committeeLogoPath} alt="Logo komitetu" height="50px" width="130px" />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Typography variant="h6" textAlign={"center"}>
              {props.committeeName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box marginTop={"20px"}>
            <ProgressBar
              completed={props.committeeResult}
              borderRadius="10px"
              height="30px"
              labelAlignment="right"
              labelColor="white"
              bgColor="black"
              baseBgColor="darkgrey"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
