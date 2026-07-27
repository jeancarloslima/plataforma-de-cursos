import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import estudanteImg from "../../Assets/images/estudante.png";
import { Book, Person, PlayArrow, School } from "@mui/icons-material";

export default function BenefitsLandingPage() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "600px", md: "1000px" },
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          py: 2,
        }}
      >
        <Typography variant="h5" align="center">
          Pesquisar Cursos
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <TextField
            label="Busque por mais de 50+ cursos"
            fullWidth
            sx={{ maxWidth: "330px" }}
          />
          <Button variant="contained">Procurar</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
        }}
      >
        <Box component="img" src={estudanteImg}></Box>
        <Box>
          <Typography variant="h5">
            Benefícios do nosso aprendizado online
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <School />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Graduações online"
                secondary="Conclua graduações certificadas do comforto da sua casa, abrindo portas para um mundo de possibilidades."
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.light" }}>
                  <Book />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Cursos Curtos"
                secondary="Aprimore suas habilidades com nossos cursos curtos focados e concisos, projetados para um aprendizado rápido e efetivo."
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Treinamento com Especialistas"
                secondary="Imerja no conhecimento com especialistas da indústria guiando você através de experiências práticas."
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.light" }}>
                  <PlayArrow />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="1.5k+ Aulas em Vídeo"
                secondary="Mergulhe em uma biblioteca vasta com mais de 1.5k de aulas em vídeo cobrindo muitos assuntos, oferecento uma experiência visual de aprendizado."
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
