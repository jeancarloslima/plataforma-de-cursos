import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import customTheme from "../../Themes/theme";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = (action) => {
    setMenuIsOpen(action);
  };

  const itemsMenu = ["Cursos", "Preços", "Comunidade"];

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TechLearning
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleMenu(true)}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {itemsMenu.map((text) => (
              <Button key={text} sx={{ color: "#FFF" }}>
                {text}
              </Button>
            ))}
            <Button sx={{ color: "#FFF" }}>Login</Button>
            <Button sx={{ color: "#FFF" }}>Register</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menuIsOpen}
        onClose={() => toggleMenu(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleMenu(false)}
          onKeyDown={() => toggleMenu(false)}
        >
          <List>
            {itemsMenu.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
