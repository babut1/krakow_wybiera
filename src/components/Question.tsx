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
import { useNavigate } from "react-router-dom";

export function Question(props: {
  question: QuestionInterface;
  questionNumber: number;
}) {
  const numberOfQuestions = useNumberOfQuestions();
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(950));

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

  const handleSubmit = () => {
    setButtonStates([false, false, false, false, false, false]);
    if (props.questionNumber + 1 === numberOfQuestions) {
      navigate("/wyniki");
    }
    changeSelectedQuestion(props.questionNumber + 1);
  };

  const handleGoBack = () => {
    if (props.questionNumber === 0) {
      navigate("/okrag");
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
            textAlign={isSmallScreen ? "center" : "left"}
            minHeight={"70px"}
            fontWeight={"bold"}
          >
            {props.question.question}
          </Typography>
          {isSmallScreen && (
            <Box>
              <Accordion
                sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}
              >
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
          <Grid
            container
            sx={{
              maxWidth: isSmallScreen ? "950px" : "650px",
              textAlign: "left",
              padding: "0px 0px 30px 0px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  textAlign: "center",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            gutterBottom
            textAlign={isSmallScreen ? "center" : "left"}
          >
            Ten temat jest dla mnie...
          </Typography>
          <Grid
            container
            sx={{
              maxWidth: isSmallScreen ? "950px" : "650px",
              textAlign: "left",
              padding: "0px 0px 30px 0px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  textAlign: "center",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={isSmallScreen ? 12 : 4}
              sx={{ paddingTop: isSmallScreen ? "15px" : "0px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  borderColor: "black",
                  padding: "15px",
                  textTransform: "none",
                  width: isSmallScreen ? "100%" : "180px",
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
            </Grid>
          </Grid>
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
      <Divider orientation="horizontal" />
      <Box
        sx={{
          maxWidth: isSmallScreen ? "100%" : "400px",
          textAlign: isSmallScreen ? "center" : "left",
          padding: "0px 0px 30px 0px",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoBack}
          sx={{
            width: isSmallScreen ? "46%" : "160px",
            color: "black",
            borderColor: "black",
            textTransform: "none",
            borderRadius: "10px",
            marginTop: "10px",
            height: "50px",
            marginRight: "20px",
          }}
        >
          {props.questionNumber === 0 ? "Wybór okręgu" : "Poprzednie pytanie"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            width: isSmallScreen ? "46%" : "160px",
            marginTop: "10px",
            backgroundColor: "black",
            textTransform: "none",
            borderRadius: "10px",
            height: "50px",
          }}
          disabled={!isProceedButtonEnabled()}
        >
          {props.questionNumber === numberOfQuestions - 1
            ? "Zakończ test"
            : "Następne pytanie"}
        </Button>
      </Box>
    </Box>
  );
}
