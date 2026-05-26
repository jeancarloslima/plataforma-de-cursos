import { createTheme, responsiveFontSizes } from "@mui/material";

let customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6200ea",
      light: "#9d46ff",
      dark: "#0a00b6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#03dac6",
      contrastText: "#000000",
    },
    background: {
      default: "#f4f5f7",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: "#333333",
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "10px 12px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "24px",
          borderRadius: 12,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 12,
          borderRadius: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;