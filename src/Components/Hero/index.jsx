import { ThemeProvider } from "@emotion/react";
import customTheme from "../../Themes/theme";
import {
  Box,
  Button,
  CssBaseline,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  Apple,
  Facebook,
  Google,
  Instagram,
  Microsoft,
  PlayCircle,
} from "@mui/icons-material";
import estudanteImg from "../../Assets/images/estudante.png";

export default function Hero() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Box
        sx={{
          
          minHeight: "calc(100dvh - 360px)",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "600px", md: "1000px" },
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            padding: "24px 32px 0 32px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Desenvolva suas habilidades de um jeito novo e único
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Explore um método transformativo de desenvolver habilidades na
              nossa plataforma de ensino online. Descubra um novo reino de
              experiências de aprendizado e eleve seu conhecimento de formas
              únicas.
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 350, display: "flex", flexDirection: "row-reverse", justifyContent: "space-between" }}>
              <Button variant="contained">Começar agora</Button>
              <Box
                component={Link}
                href="#"
                color="grey.800"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <PlayCircle />
                <Typography variant="body1">O que é Rawi?</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ width: "80%", height: "80%", padding: "8px", position: "absolute", bgcolor: "primary.main", backgroundClip: "content-box", borderRadius: "50%", top: "20%", left: "50%", transform: 'translateX(-50%)', zIndex: -1, border: "5px dashed #e67d89" }} />
            <Box component="img" src={estudanteImg} sx={{ width: "100%", height: "100%" }} />
          </Box>
        </Box>

        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            bgcolor: "primary.main",
          }}
        >
          <ListItem sx={{ maxWidth: "30px", justifyContent: "center" }}>
            <Microsoft color="secondary" />
          </ListItem>
          <ListItem sx={{ maxWidth: "30px", justifyContent: "center" }}>
            <Facebook color="secondary" />
          </ListItem>
          <ListItem sx={{ maxWidth: "30px", justifyContent: "center" }}>
            <Apple color="secondary" />
          </ListItem>
          <ListItem sx={{ maxWidth: "30px", justifyContent: "center" }}>
            <Google color="secondary" />
          </ListItem>
          <ListItem sx={{ maxWidth: "30px", justifyContent: "center" }}>
            <Instagram color="secondary" />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
}
