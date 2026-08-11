import { Box, Typography } from "@mui/material";
import CourseCard from "../CourseCard";
import CourseCardImage1 from "../../Assets/images/pexels-coding-1853305.jpg";
import CourseCardImage2 from "../../Assets/images/firmbee-ux-787968.jpg";
import CourseCardImage3 from "../../Assets/images/pexels-laptop-1839876.jpg";

export default function PopularCoursesLandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        margin: "0 auto",
        padding: "32px 24px",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem"
        }}
      >
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "600", marginBottom: "16px" }}
          >
            Nossos cursos populares
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: { md: "1rem" } }}
          >
            Descubra nossos cursos mais procurados, curados de forma cuidadosa
            para atender as demandas do mercado atual. Mergulhe em conteúdos
            construídos para o sucesso em cada etapa da sua jornada de estudos.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { md: "wrap" },
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "24px",
          }}
        >
          <CourseCard
            image={CourseCardImage1}
            theme="Web Design"
            rating="4.9"
            title="Web Design & Development"
            classes={25}
            students={185}
            price={560}
            professor="J. Morgan"
          ></CourseCard>
          <CourseCard
            image={CourseCardImage2}
            theme="UI/UX Design"
            rating="5.0"
            title="Wireframing & Prototyping"
            classes={8}
            students={400}
            price={160}
            professor="Jordan Re"
          ></CourseCard>
          <CourseCard
            image={CourseCardImage3}
            theme="Data Science"
            rating="4.9"
            title="Python For Data Science"
            classes={18}
            students={160}
            price={432}
            professor="Alex Taylor"
          ></CourseCard>
        </Box>
      </Box>
    </Box>
  );
}
