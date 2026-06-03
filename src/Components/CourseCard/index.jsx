import { Box, Paper, Typography } from "@mui/material";

export default function CourseCard({ image, theme, rating, title, classes, students, price, professor }) {
    return (
     <Paper>
        <Box component="img" src={image}></Box>
        <Box>{theme}</Box>
        <Box>{rating}</Box>
        <Typography>{title}</Typography>
        <Box>{classes}</Box>
        <Box>{students}</Box>
        <Box>
            <Typography>{price}</Typography>
            <Typography>{professor}</Typography>
        </Box>
     </Paper>   
    )
}