import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography, useTheme } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { Committee } from "../common/types";
import { useNavigate } from "react-router-dom";
import { countResultPerCommittee } from "../common/utils";
import { useUserAnswers } from "../common/state";

export default function CandidateSlider(props: { committees: Committee }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Object.keys(props.committees).length;
  const navigate = useNavigate();
  const userAnswers = useUserAnswers();
  const sortedCommittees = Object.keys(props.committees).sort((a, b) => {
    const resultA = countResultPerCommittee(
      userAnswers,
      props.committees[a].answers,
      props.committees[a].importantMatters
    );
    const resultB = countResultPerCommittee(
      userAnswers,
      props.committees[b].answers,
      props.committees[b].importantMatters
    );
    return resultB - resultA;
  });
  const sortedCandidateListValues = sortedCommittees.map((committee) => props.committees[committee]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          height: 80,
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">{sortedCandidateListValues[activeStep].fullCommitteeName}</Typography>
      </Paper>
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          height: 210,
          maxWidth: 600,
        }}
      >
        <img
          src={sortedCandidateListValues[activeStep].candidatePicturePath}
          alt="Zdjęcie kandydata"
          style={{
            width: "150px",
            height: "200px",
            marginRight: "20px",
            borderRadius: "15px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={sortedCandidateListValues[activeStep].committeeLogoPath}
            alt="Logo komitetu"
            style={{ width: "150px", height: "100px" }}
          />
        </Box>
      </Box>
      <Typography textAlign={"center"} variant="h5">
        Kandydat na Prezydenta Miasta
      </Typography>
      <Typography textAlign={"center"} variant="h4" fontWeight={"bold"}>
        {sortedCandidateListValues[activeStep].candidateName}
      </Typography>
      <Typography textAlign={"center"} variant="body1" marginTop={"10px"}>
        {sortedCandidateListValues[activeStep].hasAgreed
          ? "Zgodność Twoich opinii z programem"
          : "Komitet nie wziął udziału w badaniu"}
      </Typography>
      <Box padding={"0px 10px 0px 10px"}>
        <ProgressBar
          completed={countResultPerCommittee(
            userAnswers,
            props.committees[sortedCommittees[activeStep]].answers,
            props.committees[sortedCommittees[activeStep]].importantMatters
          )}
          bgColor="black"
          borderRadius="20px"
          height="50px"
          labelColor="white"
          labelAlignment="right"
        />
        <Button
          sx={{
            marginRight: "10px",
            color: "black",
            borderColor: "black",
            borderRadius: "15px",
            width: "100%",
            height: "50px",
            marginTop: "10px",
            backgroundColor: "white",
            textTransform: "none",
          }}
          variant="outlined"
          onClick={() => window.open(sortedCandidateListValues[activeStep].committeeLists, "_blank")}
        >
          <Typography variant="h6">Listy komitetu</Typography>
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            borderRadius: "15px",
            width: "100%",
            height: "50px",
            marginTop: "10px",
            marginBottom: "10px",
            textTransform: "none",
          }}
          color="primary"
          variant="contained"
          onClick={() => navigate(`/${sortedCommittees[activeStep]}`)}
          disabled={!sortedCandidateListValues[activeStep].hasAgreed}
        >
          <Typography variant="h6">Odpowiedzi komitetu</Typography>
        </Button>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              color: "black",
            }}
          >
            Następny
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{
              color: "black",
            }}
          >
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Poprzedni
          </Button>
        }
      />
    </Box>
  );
}
