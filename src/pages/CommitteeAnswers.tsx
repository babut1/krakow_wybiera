import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CandidateProfile } from "../components/CondidateProfile";
import { CommitteeAnswer } from "../components/CommitteeAnswer";

export function CommitteeAnswers() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Typography variant="h4" fontWeight={"bold"}>
        Odpowiedzi komitetu
      </Typography>
      <Typography variant="h6" marginBottom={"30px"}>
        Odpowiedzi komitetu wafuisjejbn ueibs fiusbefishub fuisebfuisbfius
        bsuiebf ub usebf usebfusbf
      </Typography>
      <CandidateProfile showAnswersButton={false}></CandidateProfile>
      <CommitteeAnswer />
    </Box>
  );
}
