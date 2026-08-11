import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";

export default function TestimonialCard({ image, name, job, rating, text }) {
  return (
    <Card
      sx={{
        maxWidth: "330px",
        width: "100%",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <CardContent
        sx={{
          padding: "16px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          "&:last-child": {
            paddingBottom: "8px",
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
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              {name}
            </Typography>

            <Typography variant="body2">{job}</Typography>
            <Rating
              value={rating}
              readOnly
              icon={<Star sx={{ fontSize: "15px", color: "yellow" }} />}
              emptyIcon={<Star sx={{ fontSize: "15px", color: "lightgray" }} />}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
