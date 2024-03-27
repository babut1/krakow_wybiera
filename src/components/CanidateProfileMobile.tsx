import { PropaneSharp } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

export function CandidateProfileMobile(props: {
  fullCommitteeName: string;
  candidatePicturePath: string;
  committeeLogoPath: string;
  candidateName: string;
  hasAgreed: boolean;
  candidateResult: number;
  committeeLists: string;
}) {
  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        marginBottom: "15px",
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
        <Typography variant="h4" fontWeight={"bold"} marginBottom={"30px"}>
          {props.fullCommitteeName}
        </Typography>
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
          src={props.candidatePicturePath}
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
          <img src={props.committeeLogoPath} alt="Logo komitetu" style={{ width: "150px", height: "100px" }} />
        </Box>
      </Box>
      <Typography textAlign={"center"} variant="h5" marginTop={"15px"}>
        Kandydat na Prezydenta Miasta
      </Typography>
      <Typography textAlign={"center"} variant="h4" fontWeight={"bold"}>
        {props.candidateName}
      </Typography>
      <Typography textAlign={"center"} variant="h6" marginTop={"10px"}>
        {props.hasAgreed ? "Zgodność Twoich opinii z programem" : "Komitet nie wziął udziału w badaniu"}
      </Typography>
      <Box padding={"10px 10px 0px 10px"}>
        <ProgressBar
          completed={props.candidateResult}
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
          onClick={() => window.open(props.committeeLists, "_blank")}
        >
          <Typography variant="h6">Listy komitetu</Typography>
        </Button>
      </Box>
    </Box>
  );
}
