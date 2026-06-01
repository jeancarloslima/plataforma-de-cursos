import { ThemeProvider } from "@emotion/react";
import BenefitsLandingPage from "../../Components/BenefitsLandingPage";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import customTheme from "../../Themes/theme";
import { CssBaseline } from "@mui/material";
import PopularCoursesLandingPage from "../../Components/PopularCoursesLandingPage";
import TestimonialsLandingPage from "../../Components/TestimonialsLandingPage";

export default function LandingPage() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <Hero />
      <BenefitsLandingPage />
      <PopularCoursesLandingPage />
      <TestimonialsLandingPage />
    </ThemeProvider>
  );
}
