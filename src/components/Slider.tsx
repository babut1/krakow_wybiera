import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";

const steps = [
  {
    label: "Komitet Harolda",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
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
          height: 50,
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">{steps[activeStep].label}</Typography>
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
          src="https://m.media-amazon.com/images/I/41J1BcPUDUL._AC_UF894,1000_QL80_.jpg"
          alt="Photo 1"
          style={{
            width: "150px",
            height: "200px",
            marginRight: "20px",
            borderRadius: "15px",
          }}
        />
        <img
          src="https://m.media-amazon.com/images/I/41J1BcPUDUL._AC_UF894,1000_QL80_.jpg"
          alt="Photo 1"
          style={{ width: "150px", height: "200px", borderRadius: "15px" }}
        />
      </Box>
      <Typography variant="h5">Kandydat na Prezydenta Miasta</Typography>
      <Typography variant="h4" fontWeight={"bold"}>
        Harold Kowalski
      </Typography>
      <Typography variant="body1" marginTop={"10px"}>
        Zgodność Twoich opinii z programem
      </Typography>
      <Box padding={"0px 10px 0px 10px"}>
        <ProgressBar
          completed={75}
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
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
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
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
