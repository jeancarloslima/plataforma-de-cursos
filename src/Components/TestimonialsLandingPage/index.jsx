import { Box, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard";

export default function TestimonialsLandingPage() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "600px", md: "1000px" },
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "600", marginBottom: "16px" }}
      >
        Testemunhos de Estudantes
      </Typography>
      <Typography variant="body2" align="center">
        Aqui está o que nossos estudante tem a dizer sobre suas experiências
        tranformativas de aprendizado. Histórias reais, crescimentos reais.
        Descubra em primeira mão o impacto que nossos cursos tiveram em suas
        vidas.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <TestimonialCard image="" name="Alexa Rodriguez" job="UX/UI Designer" rating="5" text="Fazer cursos nessa plataforma de e-learning foi um ponto de virada para mim. Experiência absolutamente transformadora!" />
        <TestimonialCard image="" name="Alexa Rodriguez" job="UX/UI Designer" rating="5" text="Fazer cursos nessa plataforma de e-learning foi um ponto de virada para mim. Experiência absolutamente transformadora!" />
        <TestimonialCard image="" name="Alexa Rodriguez" job="UX/UI Designer" rating="5" text="Fazer cursos nessa plataforma de e-learning foi um ponto de virada para mim. Experiência absolutamente transformadora!" />
      </Box>
    </Box>
  );
}
