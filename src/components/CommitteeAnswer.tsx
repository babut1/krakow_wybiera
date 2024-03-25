import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { QuestionInterface } from "../common/types";

export function CommitteeAnswer(props: {
  agreement: number;
  comment: string;
  question: QuestionInterface;
  questionNumber: number;
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(750));
  return (
    <Box p={isSmallScreen ? 2 : 5} boxShadow={3} mx="auto">
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 5.5} sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
          <Typography variant="h6" sx={{ backgroundColor: props.comment.length > 650 ? "red" : "white" }}>
            Stwierdzenie {props.questionNumber} {props.comment.length}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {props.question.question}
          </Typography>
          <Typography variant="h6">Odpowiedź komitetu:</Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Zgadzam się
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5}></Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Paper elevation={4} sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}>
            <Box p={3} textAlign={"left"}>
              <Typography variant="h5" paddingBottom={"15px"}>
                Wyjaśnienie
              </Typography>
              <Typography variant="body1">{props.comment ? props.comment : "Brak komentarza"}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
