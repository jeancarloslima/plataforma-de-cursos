import { ThemeProvider } from "@emotion/react";
import customTheme from "../../Themes/theme";
import { Box, Button, CssBaseline, Link, List, Typography } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import estudanteImg from "../../Assets/images/estudante.png";

const logos = ['Microsoft'];

export default function Hero() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Box
        sx={{
          maxWidth: { xs: "600px", md: "1000px"},
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "0 auto",
          padding: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Desenvolva suas habilidades de um jeito novo e único
        </Typography>
        <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
          Explore um método transformativo de desenvolver habilidades na nossa
          plataforma de ensino online. Descubra um novo reino de experiências de
          aprendizado e eleve seu conhecimento de formas únicas.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained">Começar agora</Button>
          <Box component={Link} href="#" color="grey.800" sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <PlayCircle />
            <Typography variant="body1">O que é Rawi?</Typography>
          </Box>
        </Box>
        <Box component="img" src={estudanteImg} sx={{ mt: '-80px' }}></Box>
        <List>
          
        </List>
      </Box>
    </ThemeProvider>
  );
}
