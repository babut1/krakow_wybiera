import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

export function SimplifiedCandidateProfile(props: {
  committeeName: string;
  committeeResult: number;
  committeeLogoPath: string;
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700));
  const isSmallVeryScreen = useMediaQuery(theme.breakpoints.down(500));
  return (
    <Grid container spacing={0} sx={{ height: "70px" }}>
      <Grid item container xs={1.9} spacing={2}>
        <Grid item xs={6} marginTop="3px">
          {props.committeeLogoPath && (
            <img
              src={props.committeeLogoPath}
              alt="Logo komitetu"
              height={isSmallScreen ? "51px" : "63px"}
              width={isSmallScreen ? "90px" : "110px"}
            />
          )}
        </Grid>
      </Grid>
      <Grid item xs={isSmallScreen ? 8.1 : 5.1}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100%" textAlign={"center"}>
          <Typography
            variant="h6"
            textAlign={"center"}
            maxWidth="100%"
            fontSize={isSmallVeryScreen ? "15px" : "auto"}
            marginLeft={isSmallScreen ? "30px" : "0px"}
          >
            {props.committeeName}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={isSmallScreen ? 2 : 5}>
        <Box marginTop={isSmallScreen ? "10px" : "20px"}>
          {isSmallScreen ? (
            <Typography
              marginTop={isSmallVeryScreen ? "10px" : "0px"}
              variant="h2"
              textAlign={props.committeeResult > 0 ? "left" : "center"}
            >
              {props.committeeResult > 0 ? `${props.committeeResult}%` : "-"}{" "}
            </Typography>
          ) : (
            <ProgressBar
              completed={props.committeeResult}
              borderRadius="10px"
              height="30px"
              labelAlignment="right"
              labelColor="white"
              bgColor="black"
              baseBgColor="darkgrey"
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
