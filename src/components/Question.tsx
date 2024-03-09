import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { QuestionInterface } from "../common/types";
import {
  changeSelectedQuestion,
  setAppPage,
  useNumberOfQuestions,
} from "../common/state";
import ProgressBar from "@ramonak/react-progress-bar";

export function Question(props: {
  question: QuestionInterface;
  questionNumber: number;
}) {
  const numberOfQuestions = useNumberOfQuestions();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1000));

  const [buttonStates, setButtonStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleButtonClick = (buttonNumber: number) => {
    setButtonStates((prevButtonStates) => {
      const newButtonStates = [...prevButtonStates];
      if (buttonNumber > -1 && buttonNumber < 3) {
        newButtonStates[0] = false;
        newButtonStates[1] = false;
        newButtonStates[2] = false;
      }
      if (buttonNumber > 2 && buttonNumber < 6) {
        newButtonStates[3] = false;
        newButtonStates[4] = false;
        newButtonStates[5] = false;
      }
      newButtonStates[buttonNumber] = true;
      return newButtonStates;
    });
  };

  const handleSubmit = async () => {
    setButtonStates([false, false, false, false, false, false]);
    if (props.questionNumber + 1 === numberOfQuestions) {
      await setAppPage("results");
    }
    changeSelectedQuestion(props.questionNumber + 1);
  };

  const handleGoBack = async () => {
    if (props.questionNumber === 0) {
      await setAppPage("map");
    }
    changeSelectedQuestion(props.questionNumber - 1);
  };

  function isProceedButtonEnabled(): boolean {
    const firstThreeTrue = buttonStates.slice(0, 3).some((value) => value);
    const lastThreeTrue = buttonStates.slice(3).some((value) => value);
    return firstThreeTrue && lastThreeTrue;
  }

  return (
    <Box p={isSmallScreen ? 2 : 8} boxShadow={3} mx="auto">
      <ProgressBar
        completed={(props.questionNumber / numberOfQuestions) * 100}
        labelSize="0px"
        bgColor="black"
        borderRadius="15px"
        height="13px"
        baseBgColor="darkgrey"
      />
      <Typography variant="h6" gutterBottom textAlign="left">
        Stwierdzenie {props.questionNumber + 1} z {numberOfQuestions}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 8}>
          <Typography
            variant="h5"
            gutterBottom
            textAlign="left"
            minHeight={"70px"}
          >
            {props.question.question}
          </Typography>
          {isSmallScreen && (
            <Box sx={{ paddingBottom: "20px" }}>
              <Accordion sx={{ backgroundColor: "lightgrey" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                >
                  Wyjaśnienie
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    {props.question.explanation}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          )}
          <Box
            textAlign={"left"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: isSmallScreen ? "10px" : "30px",
              padding: "0px 0px 30px 0px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                textAlign: "center",
                width: "200px",
                backgroundColor: buttonStates[0] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[0] ? "black" : "white",
                },
              }}
              onClick={() => {
                handleButtonClick(0);
              }}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[0] ? "white" : "black"}
              >
                Zgadzam się
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                width: "200px",
                backgroundColor: buttonStates[1] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[1] ? "black" : "white",
                },
              }}
              onClick={() => handleButtonClick(1)}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[1] ? "white" : "black"}
              >
                Nie zgadzam się
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                width: "200px",
                backgroundColor: buttonStates[2] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[2] ? "black" : "white",
                },
              }}
              onClick={() => handleButtonClick(2)}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[2] ? "white" : "black"}
              >
                Nie mam zdania
              </Typography>
            </Button>
          </Box>
          <Typography variant="h5" gutterBottom textAlign="left">
            Ten temat jest dla mnie...
          </Typography>
          <Box
            textAlign={"left"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: isSmallScreen ? "10px" : "30px",
              padding: "30px 00px 30px 0px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                textAlign: "center",
                width: "200px",
                backgroundColor: buttonStates[3] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[3] ? "black" : "white",
                },
              }}
              onClick={() => handleButtonClick(3)}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[3] ? "white" : "black"}
              >
                Bardzo ważny
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                width: "200px",
                backgroundColor: buttonStates[4] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[4] ? "black" : "white",
                },
              }}
              onClick={() => handleButtonClick(4)}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[4] ? "white" : "black"}
              >
                Ważny
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                borderColor: "black",
                padding: "15px",
                textTransform: "none",
                width: "200px",
                backgroundColor: buttonStates[5] ? "black" : "white",
                "&:hover": {
                  backgroundColor: buttonStates[5] ? "black" : "white",
                },
              }}
              onClick={() => handleButtonClick(5)}
            >
              <Typography
                variant="h6"
                textAlign="left"
                color={buttonStates[5] ? "white" : "black"}
              >
                Nieważny
              </Typography>
            </Button>
          </Box>
          <Divider orientation="horizontal" />
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleGoBack}
              sx={{
                margin: "10px",
                color: "black",
                borderColor: "black",
                textTransform: "none",
                borderRadius: "15px",
              }}
            >
              {props.questionNumber === 0
                ? "Wybór okręgu"
                : "Poprzednie pytanie"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                margin: "10px",
                backgroundColor: "black",
                textTransform: "none",
                borderRadius: "15px",
              }}
              disabled={!isProceedButtonEnabled()}
            >
              {props.questionNumber === numberOfQuestions - 1
                ? "Zakończ test"
                : "Następne pytanie"}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5}></Grid>
        {!isSmallScreen && (
          <Grid item xs={12} sm={isSmallScreen ? 12 : 3.5}>
            <Box>
              <Paper
                elevation={4}
                sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}
              >
                <Box p={3} textAlign={"left"}>
                  <Typography variant="h5" paddingBottom={"15px"}>
                    Wyjaśnienie
                  </Typography>
                  <Typography variant="body1">
                    {props.question.explanation}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
