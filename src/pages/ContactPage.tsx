import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      process.env.REACT_APP_SERVICE_ID &&
      process.env.REACT_APP_TEMPLATE_ID &&
      process.env.REACT_APP_PUBLIC_ENV
    )
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.currentTarget,
        process.env.REACT_APP_PUBLIC_ENV
      );
  };

  return (
    <Box
      textAlign={"left"}
      p={8}
      flexDirection={"column"}
      display={"flex"}
      maxWidth={"700px"}
    >
      <form onSubmit={sendEmail}>
        <Typography variant="h4" fontWeight={"bold"}>
          Napisz do nas!
        </Typography>
        {/* <TextField
          label="Imię i nazwisko"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          sx={{ marginTop: "15px" }}
          name="name"
          required
        />
        <TextField
          label="E-mail"
          variant="outlined"
          value={mail}
          onChange={handleAMailChange}
          sx={{ marginTop: "15px" }}
          name="email_from"
          required
        />
        <TextField
          label="Temat"
          variant="outlined"
          value={topic}
          onChange={handleTopicChange}
          sx={{ marginTop: "15px" }}
          required
        /> */}
        <TextField
          fullWidth
          type="text"
          label="Imię i nazwisko"
          required
          name="user_name"
          sx={{ width: "100%", marginTop: "10px" }}
        />
        <TextField
          type="email"
          label="E-mail"
          name="user_email"
          required
          sx={{ width: "100%", marginTop: "15px" }}
        />
        <TextField
          label="Twoja wiadomość"
          required
          name="user_message"
          variant="outlined"
          sx={{ width: "100%", marginTop: "15px" }}
          multiline
          rows={10}
        />
        <Button
          variant="contained"
          sx={{
            width: "200px",
            height: "50px",
            marginTop: "15px",
            backgroundColor: "black",
            borderRadius: "15px",
          }}
          type={"submit"}
        >
          <Typography>Wyślij wiadomość</Typography>
        </Button>
      </form>
    </Box>
  );
}
