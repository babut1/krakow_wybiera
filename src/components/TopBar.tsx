import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(770));
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleStartClick() {
    if (location.pathname === "/") {
      navigate("/instrukcja");
      setAnchorEl(null);
      return;
    }
    setAnchorEl(null);
    navigate("/");
  }

  function handleContactClick() {
    navigate("/kontakt");
    setAnchorEl(null);
  }

  function handleSupportClick() {
    window.open("https://twojwybor.org/wspieraj", "_blank");
    setAnchorEl(null);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <AppBar
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
          p: 1,
          mr: 2,
        }}
        position="static"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src="graphics/STW_logo.png"
              alt="Logo"
              width="100"
              height="70"
              style={{ marginRight: "20px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <img src="graphics/krakow_wybiera.png" alt="Kraków wybiera" width="70" height="40" />
          </Box>
          {isSmallScreen ? (
            <Box>
              <IconButton onClick={handleClick}>
                <MenuIcon sx={{ color: "black", fontSize: "50px", padding: "0px" }}></MenuIcon>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem>
                  <img src="https://twojwybor.org/wp-content/uploads/2020/09/IMG_0018-2-2.png" height={"100px"}></img>
                </MenuItem>
                <MenuItem onClick={handleContactClick} sx={{ padding: "15px 20px 15px 20px" }}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    Kontakt
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleSupportClick} sx={{ padding: "15px 20px 15px 20px" }}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    Wesprzyj nas
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleStartClick} sx={{ padding: "15px 20px 15px 20px" }}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    {location.pathname === "/" ? "Rozpocznij test" : "Strona główna"}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
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
                  marginRight: "30px",
                  color: "black",
                  borderColor: "black",
                  borderRadius: "15px",
                  textTransform: "none",
                  width: "150px",
                }}
                variant="text"
                onClick={handleSupportClick}
              >
                <Typography variant="h6">Wesprzyj nas</Typography>
              </Button>
              <Button
                sx={{
                  backgroundColor: "black",
                  borderRadius: "15px",
                  textTransform: "none",
                  width: "190px",
                  height: "50px",
                }}
                color="primary"
                variant="contained"
                onClick={handleStartClick}
              >
                <Typography variant="h6">{location.pathname === "/" ? "Rozpocznij test" : "Strona główna"}</Typography>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
