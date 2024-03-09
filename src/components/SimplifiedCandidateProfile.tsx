import { Box, Button, Grid, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

export function SimplifiedCandidateProfile() {
  return (
    <>
      <Grid container spacing={0}>
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
        <Grid item xs={5}>
          <Box textAlign={"center"}>
            <Typography variant="h5">Komitet Harolda</Typography>
          </Box>
        </Grid>
        <Grid item xs={5.5}>
          <Box>
            <ProgressBar
              completed={75}
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
