import { Box, Button, Grid, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

export function SimplifiedCandidateProfile(props: {committeeName: string, committeeResult: number}) {
  return (
    <>
      <Grid container spacing={0} sx={{ height: "60px" }}>
        <Grid item container xs={1} spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://m.media-amazon.com/images/I/41J1BcPUDUL._AC_UF894,1000_QL80_.jpg"
              alt="Photo 1"
              height="50px"
              width="50px"
            />
          </Grid>
        </Grid>
        <Grid item xs={5.5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="h6">{props.committeeName}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5.5}>
          <Box marginTop={"15px"}>
            <ProgressBar
              completed={props.committeeResult}
              bgColor="black"
              borderRadius="10px"
              height="30px"
              labelColor="white"
              labelAlignment="right"
              baseBgColor="darkgrey"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
