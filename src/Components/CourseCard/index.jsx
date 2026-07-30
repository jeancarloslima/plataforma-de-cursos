import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Book, Circle, Person, Star } from "@mui/icons-material";

export default function CourseCard({
  image,
  theme,
  rating,
  title,
  classes,
  students,
  price,
  professor,
}) {
  return (
    <Card sx={{ maxWidth: "330px", width: "100%" }}>
      <CardMedia component="img" alt={image} />
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          '&:last-child': {
            paddingBottom: 0,
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.light",
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "1px 8px",
              borderRadius: "4px",
            }}
          >
            <Circle color="primary" sx={{ fontSize: 10 }} />
            <Typography variant="body1">{theme}</Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "1px 8px",
              borderRadius: "4px",
            }}
          >
            <Star sx={{ color: "yellow", fontSize: 16 }} />
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              {rating}
            </Typography>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: "600", maxWidth: "200px" }}>
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Book color="primary" sx={{ fontSize: 20 }} />
            <Typography variant="body1">{classes} classes</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Person color="primary" sx={{ fontSize: 20 }} />
            <Typography variant="body1">{students} students</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            ${price}.00
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "600", color: "primary.main" }}>
            {professor}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
