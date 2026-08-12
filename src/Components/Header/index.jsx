import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = (action) => {
    setMenuIsOpen(action);
  };

  const itemsMenu = ["Cursos", "Cursos Populares", "Testemunhos"];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ display: "flex" }}
      >
        <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <Toolbar
            sx={{ justifyContent: { md: "space-between" }, paddingRight: 0 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: {xs: 1}, fontWeight: "700" }}>
              Rawi
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
                <Button key={text} sx={{ color: "#333333" }}>
                  {text}
                </Button>
              ))}
              <Button sx={{ color: "#333333" }}>Login</Button>
              <Button sx={{ color: "#333333" }}>Register</Button>
            </Box>
          </Toolbar>
        </Box>
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
                  <ListItemText
                    primary={text}
                    slotProps={{
                      primary: { color: "primary", sx: { fontWeight: "700" } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
