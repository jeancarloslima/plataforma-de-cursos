import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Person, Star } from "@mui/icons-material";

export default function TestimonialCard({ image, name, job, rating, text }) {
  return (
    <Card sx={{ maxWidth: "330px", width: "100%", bgcolor: "primary.main", color: "secondary.main" }}>
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CardMedia
            component="img"
            image={image}
            sx={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              border: "1px solid primary.main",
            }}
          />

          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600" }}
            >
              {name}
            </Typography>

            <Typography variant="body2">{job}</Typography>
            <Star sx={{ fontSize: "15px", color: "yellow" }} />
            <Star sx={{ fontSize: "15px", color: "yellow" }} />
            <Star sx={{ fontSize: "15px", color: "yellow" }} />
            <Star sx={{ fontSize: "15px", color: "yellow" }} />
            <Star sx={{ fontSize: "15px", color: "yellow" }} />
          </Box>
        </Box>

        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
}
