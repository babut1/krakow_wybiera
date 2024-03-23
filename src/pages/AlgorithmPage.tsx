import { Box, Button, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AlorithmPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(700));

  const handleGoBack = async () => {
    navigate("/wyniki");
  };

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Grid container>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7}>
          <Typography variant={"h3"}>Jak obliczamy wyniki?</Typography>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginTop: "30px", marginBottom: "30px" }} />
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoBack}
          sx={{
            margin: "10px",
            color: "black",
            borderColor: "black",
            borderRadius: "15px",
            height: "50px",
            textTransform: "none",
            width: "210px",
          }}
        >
          <Typography variant="h6">Wróć do wyników</Typography>
        </Button>
      </Box>
    </Box>
  );
}
