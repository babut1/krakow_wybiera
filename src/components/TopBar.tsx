import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { setAppPage, useAppPage } from "../common/state";

export function TopBar() {
  const state = useAppPage();
  async function handleStartClick() {
    if (state === "homepage") {
      await setAppPage("quiz");
      return;
    }
    await setAppPage("homepage");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 1,
          mr: 2,
        }}
        position="static"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src="/path/to/your/logo.png" alt="Logo" width="40" height="40" />
          <Box>
            <Button
              sx={{
                marginRight: "10px",
                color: "black",
                borderColor: "black",
                borderRadius: "15px",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <Typography variant="h6">Wesprzyj nas</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                borderRadius: "15px",
                textTransform: "none",
              }}
              color="primary"
              variant="contained"
              onClick={handleStartClick}
            >
              <Typography variant="h6">
                {state === "homepage" ? "Rozpocznij test" : "Strona główna"}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
