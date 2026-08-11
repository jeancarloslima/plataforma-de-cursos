import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        margin: "0 auto",
        padding: "48px 24px",
        pl: { sm: "50px" },
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Rawi
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 300 }}>
            Explore um método transformativo de desenvolver habilidades na nossa
            plataforma de ensino online.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Facebook />
            <WhatsApp />
            <Twitter />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Companhia
          </Typography>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Sobre Nós
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Serviços
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Comunidade
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Testemunhos
          </Link>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Suporte
          </Typography>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Central de Ajuda
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Tweet @
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Webinars
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Feedback
          </Link>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Links
          </Typography>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Cursos
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Seja Professor
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Serviço
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            Tudo em um
          </Link>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Contate-Nos
          </Typography>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            +55 11 94002-8922
          </Link>
          <Link href="#" color="secondary" variant="body2" underline="hover">
            rawiinfo@gmail.com
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
