import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function CommitteeAnswer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(750));
  return (
    <Box p={isSmallScreen ? 2 : 8} boxShadow={3} mx="auto">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={isSmallScreen ? 12 : 4.5}
          sx={{ textAlign: isSmallScreen ? "center" : "left" }}
        >
          <Typography variant="h6">Stwierdzenie 1</Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            Lorem
          </Typography>
          <Typography variant="h6">Odpowiedź komitetu:</Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Zgadzam się
          </Typography>
        </Grid>
        <Grid item xs={12} sm={isSmallScreen ? 0 : 0.5}></Grid>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7}>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "lightgrey", borderRadius: "15px" }}
          >
            <Box p={3} textAlign={"left"}>
              <Typography variant="h5" paddingBottom={"15px"}>
                Wyjaśnienie
              </Typography>
              <Typography variant="body1">Lorem</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
