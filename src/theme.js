import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#121212",
      dark: "#121212",
      contrastText: "#34C94B",
    },
  },
});

export default theme;