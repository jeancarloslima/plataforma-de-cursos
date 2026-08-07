import { createTheme, responsiveFontSizes } from "@mui/material";

let customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#B22030",
      light: "#e67d89",
      dark: "#53050e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f4f5f7",
      contrastText: "#000000",
    },
    background: {
      default: "#f4f5f7",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          padding: "10px 14px"
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "8px 8px 16px 8px",
          borderRadius: 16,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f5f7",
          color: "#333333",
          padding: '6px 0px',
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
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "12px 0",
        }
      }
    }
  },
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;