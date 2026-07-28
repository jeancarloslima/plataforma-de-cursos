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
    <Card>
      <CardMedia component="img" alt={image} />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Circle color="primary" sx={{ fontSize: 10 }} />
            <Typography variant="h6">{theme}</Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Star sx={{ color: "yellow" }} />
            <Typography variant="h6">{rating}</Typography>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ maxWidth: "200px" ,margin: "16px 0" }}>{title}</Typography>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Book color="primary" sx={{ fontSize: 20 }} />
            <Typography variant="h6">{classes} classes</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Person color="primary" sx={{ fontSize: 20 }} />
            <Typography variant="h6">{students} students</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{price}.00</Typography>
          <Typography variant="h6">{professor}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
