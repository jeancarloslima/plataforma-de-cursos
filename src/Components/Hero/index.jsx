import { ThemeProvider } from "@emotion/react";
import customTheme from "../../Themes/theme";
import { Box, Button, CssBaseline, Link, Typography } from "@mui/material";

export default function Hero() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: 2 }}>
        <Typography variant="h3">
          Desenvolva suas habilidades de um jeito novo e único
        </Typography>
        <Typography variant="h6">
          Explore um método transformativo de desenvolver habilidades na nossa
          plataforma de ensino online. Descubra um novo reino de experiências de
          aprendizado e eleve seu conhecimento de formas únicas.
        </Typography>
        <Button>
            Começar agora
        </Button>
        <Link>O que é TechLearning?</Link>
      </Box>
    </ThemeProvider>
  );
}
