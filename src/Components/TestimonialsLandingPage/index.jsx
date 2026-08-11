import { Box, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard";
import TestimonialCardImage1 from "../../Assets/images/erik_lucatero-portrait-3353699.jpg";
import TestimonialCardImage2 from "../../Assets/images/saeedisavy-portrait-7582123.jpg";
import TestimonialCardImage3 from "../../Assets/images/shimabdinzade-woman-8378634.jpg";

export default function TestimonialsLandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      <Box sx={{ maxWidth: 600 }}>
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
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { md: "wrap" },
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <TestimonialCard
          image={TestimonialCardImage1}
          name="James Johnson"
          job="Web Developer"
          rating={5}
          text="Fazer cursos nessa plataforma de e-learning foi um ponto de virada para mim. Experiência absolutamente transformadora!"
        />
        <TestimonialCard
          image={TestimonialCardImage2}
          name="Emily Chen"
          job="UX/UI Designer"
          rating="5"
          text="Cursos excepcionais! Os insights práticos e a estrutura de aprendizado flexível tem sido instrumentos fundamentais do meu crescimento de carreira."
        />
        <TestimonialCard
          image={TestimonialCardImage3}
          name="Alexa Rodriguez"
          job="UX/UI Designer"
          rating="5"
          text="Recomendo demais! O feedback personalizado e a aplicação de exemplos do mundo real nos cursos tem elevado meu entendimento."
        />
      </Box>
    </Box>
  );
}
