import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CandidateProfile } from "../components/CondidateProfile";
import { SimplifiedCandidateProfile } from "../components/SimplifiedCandidateProfile";
import CandidateSlider from "../components/CandidateSlider";
import { useNavigate } from "react-router-dom";

export function ResultsView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1050));

  const handleSolveAgain = () => {
    navigate("/okrag");
  };

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 5}>
          <Box textAlign={"left"}>
            <Typography variant={"h4"}>Twoje wyniki</Typography>
            <Typography variant={"h6"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
            <SimplifiedCandidateProfile />
          </Box>
        </Grid>
      </Grid>
      {isSmallScreen ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CandidateSlider></CandidateSlider>
        </Box>
      ) : (
        <>
          <CandidateProfile></CandidateProfile>
          <Divider orientation="horizontal" />
          <CandidateProfile></CandidateProfile>
          <Divider orientation="horizontal" />
          <CandidateProfile></CandidateProfile>
          <Divider orientation="horizontal" />
          <CandidateProfile></CandidateProfile>
        </>
      )}
    </Box>
  );
}
