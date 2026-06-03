import { List, ListItem, Typography } from "@mui/material";
import CourseCard from "../CourseCard";

export default function PopularCoursesLandingPage() {
  return (
    <>
      <Typography variant="h5">Nossos cursos populares</Typography>
      <Typography variant="body1">
        Descubra nossos cursos mais procurados, curados de forma cuidadosa para
        atender as demandas do mercado atual. Mergulhe em conteúdos construídos
        para o sucesso em cada etapa da sua jornada de estudos.
      </Typography>
      <List>
        <ListItem>
          <CourseCard />
        </ListItem>
      </List>
    </>
  );
}
