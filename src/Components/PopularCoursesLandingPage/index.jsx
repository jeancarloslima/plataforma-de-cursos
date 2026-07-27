import { Box, Typography } from "@mui/material";
import CourseCard from "../CourseCard";

export default function PopularCoursesLandingPage() {
  return (
    <Box>
      <Typography variant="h5">Nossos cursos populares</Typography>
      <Typography variant="body1">
        Descubra nossos cursos mais procurados, curados de forma cuidadosa para
        atender as demandas do mercado atual. Mergulhe em conteúdos construídos
        para o sucesso em cada etapa da sua jornada de estudos.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CourseCard theme="Web Design" rating={4.9} title="Web Design & Development" classes={25} students={185} price={560} professor="J. Morgan"></CourseCard>
        <CourseCard theme="Web Design" rating={4.9} title="Web Design & Development" classes={25} students={185} price={560} professor="J. Morgan"></CourseCard>
        <CourseCard theme="Web Design" rating={4.9} title="Web Design & Development" classes={25} students={185} price={560} professor="J. Morgan"></CourseCard>
      </Box>
    </Box>
  );
}
