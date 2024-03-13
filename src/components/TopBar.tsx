import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { setAppPage, useAppPage } from "../common/state";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function TopBar() {
  const state = useAppPage();
  const navigate = useNavigate();
  const location = useLocation();

  function handleStartClick() {
    if (location.pathname === "/") {
      navigate("/okrag");
      return;
    }
    navigate("/");
  }

  function handleContactClick() {
    navigate("/kontakt");
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
                width: "130px",
              }}
              variant="text"
              onClick={handleContactClick}
            >
              <Typography variant="h6">Kontakt</Typography>
            </Button>
            <Button
              sx={{
                marginRight: "10px",
                color: "black",
                borderColor: "black",
                borderRadius: "15px",
                textTransform: "none",
                width: "150px",
              }}
              variant="text"
            >
              <Typography variant="h6">Wesprzyj nas</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                borderRadius: "15px",
                textTransform: "none",
                width: "170px",
                height: "50px",
              }}
              color="primary"
              variant="contained"
              onClick={handleStartClick}
            >
              <Typography variant="h6">
                {location.pathname === "/"
                  ? "Rozpocznij test"
                  : "Strona główna"}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
