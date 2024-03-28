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
import { QuestionInterface, UserAnswer } from "../common/types";
import {
  changeSelectedQuestion,
  setUserAnswer,
  setUserAnswers,
  useNumberOfQuestions,
  useUserAnswers,
} from "../common/state";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga";

export function Question(props: { question: QuestionInterface; questionNumber: number }) {
  const numberOfQuestions = useNumberOfQuestions();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1185));

  const [buttonStates, setButtonStates] = useState<boolean[]>([false, false, false, false, false, false]);

  const buttonValues = [1, 0.5, 0, 3, 2, 1];

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

  const handleSubmit = () => {
    const currentButtonStates = buttonStates;
    const trueIndexes: number[] = [];
    currentButtonStates.forEach((state, index) => {
      if (state) {
        trueIndexes.push(index);
      }
    });
    const userAnswer: UserAnswer = {
      agreement: buttonValues[trueIndexes[0]],
      importance: buttonValues[trueIndexes[1]],
    };

    setUserAnswer(userAnswer, props.questionNumber);
    setButtonStates([false, false, false, false, false, false]);
    if (props.questionNumber + 1 === numberOfQuestions) {
      ReactGA.event({
        category: "Button",
        action: "Click",
        label: "button_click",
      });
      navigate("/wyniki");
    }
    if (isSmallScreen) {
      window.scrollTo(0, 0);
    }
    changeSelectedQuestion(props.questionNumber + 1);
  };

  const handleGoBack = () => {
    if (props.questionNumber === 0) {
      navigate("/instrukcja");
    }
    if (isSmallScreen) {
      window.scrollTo(0, 0);
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
      <Box marginTop={isSmallScreen ? "30px" : "0px"}>
        <ProgressBar
          completed={(props.questionNumber / numberOfQuestions) * 100}
          labelSize="0px"
          bgColor="black"
          borderRadius="15px"
          height="13px"
          baseBgColor="darkgrey"
        />
      </Box>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6.8}>
          <Typography
            variant="h6"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
            marginTop={isSmallScreen ? "15px" : "25px"}
          >
            Stwierdzenie {props.questionNumber + 1} z {numberOfQuestions}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
            minHeight={isSmallScreen ? "0px" : "96px"}
            fontWeight={"bold"}
          >
            {props.question.question}
          </Typography>
          {isSmallScreen && (
            <Box sx={{ marginTop: "15px" }}>
              <Accordion sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content">
                  Wyjaśnienie
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{props.question.explanation}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          )}
          <Grid
            container
            sx={{
              maxWidth: isSmallScreen ? "100%" : "650px",
              textAlign: "left",
              padding: isSmallScreen ? "10px 0px 20px 0px" : "0px 0px 30px 0px",
            }}
          >
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  textAlign: "center",
                  maxWidth: "100%",
                  width: isSmallScreen ? "100%" : "200px",
                  backgroundColor: buttonStates[0] ? "black" : "white",
                  "&:hover": {
                    backgroundColor: buttonStates[0] ? "black" : "white",
                  },
                  height: isSmallScreen ? "40px" : "auto",
                }}
                onClick={() => {
                  handleButtonClick(0);
                }}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[0] ? "white" : "black"}>
                  Zgadzam się
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "7px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  maxWidth: "100%",
                  width: isSmallScreen ? "100%" : "200px",
                  backgroundColor: buttonStates[1] ? "black" : "white",
                  height: isSmallScreen ? "40px" : "auto",
                  "&:hover": {
                    backgroundColor: buttonStates[1] ? "black" : "white",
                  },
                }}
                onClick={() => handleButtonClick(1)}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[1] ? "white" : "black"}>
                  Nie mam zdania
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "7px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  maxWidth: "100%",
                  width: isSmallScreen ? "100%" : "200px",
                  backgroundColor: buttonStates[2] ? "black" : "white",
                  height: isSmallScreen ? "40px" : "auto",
                  "&:hover": {
                    backgroundColor: buttonStates[2] ? "black" : "white",
                  },
                }}
                onClick={() => handleButtonClick(2)}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[2] ? "white" : "black"}>
                  Nie zgadzam się
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Typography
            fontWeight={"bold"}
            variant="h5"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
            paddingBottom={isSmallScreen ? "0px" : "20px"}
          >
            Ten temat jest dla mnie...
          </Typography>
          <Grid
            container
            sx={{
              maxWidth: isSmallScreen ? "100%" : "650px",
              textAlign: "left",
              padding: "0px 0px 20px 0px",
            }}
          >
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  textAlign: "center",
                  maxWidth: "100%",
                  width: isSmallScreen ? "100%" : "200px",
                  backgroundColor: buttonStates[3] ? "black" : "white",
                  height: isSmallScreen ? "40px" : "auto",
                  "&:hover": {
                    backgroundColor: buttonStates[3] ? "black" : "white",
                  },
                }}
                onClick={() => handleButtonClick(3)}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[3] ? "white" : "black"}>
                  Bardzo ważny
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "7px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  maxWidth: "100%",
                  width: isSmallScreen ? "100%" : "200px",
                  height: isSmallScreen ? "40px" : "auto",
                  backgroundColor: buttonStates[4] ? "black" : "white",
                  "&:hover": {
                    backgroundColor: buttonStates[4] ? "black" : "white",
                  },
                }}
                onClick={() => handleButtonClick(4)}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[4] ? "white" : "black"}>
                  Średnio ważny
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={isSmallScreen ? 12 : 4} sx={{ paddingTop: isSmallScreen ? "7px" : "0px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  maxWidth: "100%",
                  height: isSmallScreen ? "40px" : "auto",
                  width: isSmallScreen ? "100%" : "200px",
                  backgroundColor: buttonStates[5] ? "black" : "white",
                  "&:hover": {
                    backgroundColor: buttonStates[5] ? "black" : "white",
                  },
                }}
                onClick={() => handleButtonClick(5)}
              >
                <Typography variant="h6" textAlign="left" color={buttonStates[5] ? "white" : "black"}>
                  Mało ważny
                </Typography>
              </Button>
            </Grid>
          </Grid>
          {!isSmallScreen && (
            <>
              <Divider orientation="horizontal" sx={{ paddingBottom: "10px" }}></Divider>
              <Grid container alignItems="center" justifyContent="left" marginTop={"15px"}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleGoBack}
                  sx={{
                    width: "160px",
                    color: "black",
                    borderColor: "black",
                    textTransform: "none",
                    borderRadius: "10px",
                    marginTop: "10px",
                    height: "50px",
                    marginRight: "20px",
                  }}
                >
                  {props.questionNumber === 0 ? "Instrukcja" : "Poprzednie pytanie"}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{
                    width: "160px",
                    marginTop: "10px",
                    backgroundColor: "black",
                    textTransform: "none",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  disabled={!isProceedButtonEnabled()}
                >
                  {props.questionNumber === numberOfQuestions - 1 ? "Zakończ test" : "Następne pytanie"}
                </Button>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.2}></Grid>
        {!isSmallScreen && (
          <Grid item xs={12} sm={isSmallScreen ? 12 : 5}>
            <Paper
              elevation={4}
              sx={{ backgroundColor: "lightgrey", borderRadius: "7px", minHeight: "500px", marginTop: "35px" }}
            >
              <Box p={3} textAlign={"left"}>
                <Typography variant="h5" paddingBottom={"20px"} fontWeight={"bold"}>
                  Wyjaśnienie
                </Typography>
                <Typography variant="body1" fontSize={"17px"}>
                  {props.question.explanation}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
      {isSmallScreen && (
        <Grid container alignItems="center" justifyContent="space-between">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleGoBack}
            sx={{
              width: "48%",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              borderRadius: "10px",
              marginTop: "10px",
              height: "50px",
              marginRight: "0px",
            }}
          >
            {props.questionNumber === 0 ? "Instrukcja" : "Poprzednie pytanie"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              width: "48%",
              marginTop: "10px",
              backgroundColor: "black",
              textTransform: "none",
              borderRadius: "10px",
              height: "50px",
            }}
            disabled={!isProceedButtonEnabled()}
          >
            {props.questionNumber === numberOfQuestions - 1 ? "Zakończ test" : "Następne pytanie"}
          </Button>
        </Grid>
      )}
    </Box>
  );
}
