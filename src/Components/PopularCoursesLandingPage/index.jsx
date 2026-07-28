import { Box, Typography } from "@mui/material";
import CourseCard from "../CourseCard";

export default function PopularCoursesLandingPage() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "600px", md: "1000px" },
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "32px 24px",
        bgcolor: "primary.main",
        color: "secondary.main"
      }}
    >
      <Typography variant="h5" align="center" sx={{ fontWeight: "600", marginBottom: '16px' }}>Nossos cursos populares</Typography>
      <Typography variant="body2" align="center">
        Descubra nossos cursos mais procurados, curados de forma cuidadosa para
        atender as demandas do mercado atual. Mergulhe em conteúdos construídos
        para o sucesso em cada etapa da sua jornada de estudos.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: "24px" }}>
        <CourseCard
          theme="Web Design"
          rating={4.9}
          title="Web Design & Development"
          classes={25}
          students={185}
          price={560}
          professor="J. Morgan"
        ></CourseCard>
        <CourseCard
          theme="UI/UX Design"
          rating={5}
          title="Wireframing & Prototyping"
          classes={8}
          students={400}
          price={160}
          professor="Jordan Re"
        ></CourseCard>
        <CourseCard
          theme="Data Science"
          rating={4.9}
          title="Python For Data Science"
          classes={18}
          students={160}
          price={432}
          professor="Alex Taylor"
        ></CourseCard>
      </Box>
    </Box>
  );
}
