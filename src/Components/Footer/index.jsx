import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Link, List, ListItem, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "600px", md: "1000px" },
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        margin: "0 auto",
        padding: "32px 24px",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Rawi
        </Typography>
        <Typography variant="body1">
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
          Company
        </Typography>
        <Link href="#" color="secondary" variant="body2" underline="hover">About Us</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Services</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Community</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Testimonials</Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Support
        </Typography>
        <Link href="#" color="secondary" variant="body2" underline="hover">Help Center</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Tweet @ US</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Webinars</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Feedback</Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Links
        </Typography>
        <Link href="#" color="secondary" variant="body2" underline="hover">Courses</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Become Teacher</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">Service</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">All In One</Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Contact Us
        </Typography>
        <Link href="#" color="secondary" variant="body2" underline="hover">+55 11 94002-8922</Link>
        <Link href="#" color="secondary" variant="body2" underline="hover">rawiinfo@gmail.com</Link>
      </Box>
    </Box>
  );
}
