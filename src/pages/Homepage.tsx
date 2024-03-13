import { Box, Typography, Button } from "@mui/material";
import { setAppPage } from "../common/state";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  const navigate = useNavigate();
  function handleStartClick() {
    navigate("okrag");
  }

  return (
    <Box
      minHeight={"500px"}
      justifyContent={"center"}
      textAlign={"center"}
      display="flex"
      alignItems="center"
      flexDirection={"column"}
    >
      <Typography variant="h1">Kraków wybiera</Typography>
      <Typography variant="h4" padding={"20px"}>
        Lorem Ipsum dupa dupa dupa duap
      </Typography>
      <Box padding={"20px"}>
        <Button
          sx={{ backgroundColor: "black" }}
          color="primary"
          variant="contained"
          onClick={handleStartClick}
        >
          <Typography variant="h6">Rozpocznij test</Typography>
        </Button>
      </Box>
    </Box>
  );
}
