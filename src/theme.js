import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1A73E8",
      dark: "#0F4CBA",
    },
    secondary: {
      main: "#00C853",
      dark: "#009624",
    },
    background: {
      default: "#0D1117",
      paper: "#161B22",
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#9BA6B2",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
