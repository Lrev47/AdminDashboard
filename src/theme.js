import { createTheme } from "@mui/material/styles";

// Default theme configuration as a fallback
export const theme = createTheme({
  palette: {
    mode: "light", // Default to light mode if no theme is provided
    primary: {
      main: "#1976d2", // Default primary color
    },
    secondary: {
      main: "#dc004e", // Default secondary color
    },
    background: {
      default: "#f5f5f5", // Default background color
    },
    text: {
      primary: "#000000", // Default text color
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 22,
    },
  },
});
