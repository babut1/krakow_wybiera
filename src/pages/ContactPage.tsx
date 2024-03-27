import { Box, Button, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      process.env.REACT_APP_SERVICE_ID_1 &&
      process.env.REACT_APP_TEMPLATE_ID_1 &&
      process.env.REACT_APP_PUBLIC_ENV_1
    ) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID_1,
        process.env.REACT_APP_TEMPLATE_ID_1,
        e.currentTarget,
        process.env.REACT_APP_PUBLIC_ENV_1
      );
    }
    if (process.env.REACT_APP_SERVICE_ID && process.env.REACT_APP_TEMPLATE_ID && process.env.REACT_APP_PUBLIC_ENV) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.currentTarget,
        process.env.REACT_APP_PUBLIC_ENV
      );
    }
    alert("Wiadomość wysłana!");
  };

  return (
    <Box
      textAlign={isSmallScreen ? "center" : "left"}
      p={isSmallScreen ? 2 : 8}
      flexDirection={"column"}
      display={"flex"}
      maxWidth={"700px"}
    >
      <form onSubmit={sendEmail}>
        <Typography variant="h4" fontWeight={"bold"}>
          Napisz do nas!
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Imię i nazwisko"
          required
          name="user_name"
          sx={{ width: "100%", marginTop: "10px" }}
        />
        <TextField type="email" label="E-mail" name="user_email" required sx={{ width: "100%", marginTop: "15px" }} />
        <TextField
          label="Twoja wiadomość"
          required
          name="user_message"
          variant="outlined"
          sx={{ width: "100%", marginTop: "15px" }}
          multiline
          rows={10}
        />
        <Box textAlign={"left"}>
          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "50px",
              marginTop: "15px",
              backgroundColor: "black",
              borderRadius: "15px",
              textTransform: "none",
            }}
            type={"submit"}
          >
            <Typography>Wyślij wiadomość</Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
}
