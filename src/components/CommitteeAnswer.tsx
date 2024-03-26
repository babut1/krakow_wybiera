import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { QuestionInterface } from "../common/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function CommitteeAnswer(props: {
  agreement: number;
  comment: string;
  question: QuestionInterface;
  questionNumber: number;
  isImportant: boolean;
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(950));
  return (
    <Box
      p={isSmallScreen ? 2 : 5}
      boxShadow={3}
      mx="auto"
      sx={{ backgroundColor: props.isImportant ? "pink" : "white", borderRadius: "30px", marginTop: "15px" }}
    >
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 5.5} sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
          <Typography
            variant="h6"
            sx={{ backgroundColor: props.comment.length > 650 ? "red" : "white" }}
            marginBottom={isSmallScreen ? "10px" : "20px"}
          >
            Stwierdzenie {props.questionNumber} {props.comment.length}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {props.question.question}
          </Typography>
          <Typography variant="h6" marginTop={isSmallScreen ? "20px" : "50px"}>
            Odpowiedź komitetu:
          </Typography>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            marginTop={isSmallScreen ? "5px" : "15px"}
            marginBottom={isSmallScreen ? "20px" : "0px"}
          >
            Zgadzam się
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5}></Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          {isSmallScreen ? (
            <Box marginBottom={"10px"}>
              <Accordion sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content">
                  <Typography variant="h6">Komentarz komitetu</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{props.comment ? props.comment : "Brak komentarza"}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ) : (
            <Paper elevation={4} sx={{ backgroundColor: "lightgrey", borderRadius: "15px", minHeight: "100%" }}>
              <Box p={3} textAlign={"left"}>
                <Typography variant="h5" paddingBottom={"15px"}>
                  Komentarz komitetu
                </Typography>
                <Typography variant="body1">{props.comment ? props.comment : "Brak komentarza"}</Typography>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
