import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import WebIcon from "@mui/icons-material/Web";
import { Box } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "lightgrey",
        padding: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <img src="graphics/STW_logo.png" height={"120px"}></img>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Kontakt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: jan.przewiezlikowski@twojwybor.org
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefon: +48 786 262 565
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sprawdź nasze media
            </Typography>
            <Link href="https://www.facebook.com/stow.twojwybor" color="inherit" target="_blank">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/stow.twojwybor/"
              color="inherit"
              target="_blank"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://twojwybor.org/" color="inherit" target="_blank">
              <WebIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"© "}
            <Link href="https://twojwybor.org/" color="inherit" target="_blank">
              Stowarzyszenie Twój Wybór
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
