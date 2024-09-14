// src/useMode.js
import { createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";
import { getThemes, toggleMode } from "./features/themeSlice";

export const useMode = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme) || {};
  const {
    availableThemes = [],
    lightTheme,
    darkTheme,
    mode = "light",
  } = themeState;

  // Fetch themes when the hook is first used
  useEffect(() => {
    if (!Array.isArray(availableThemes) || availableThemes.length === 0) {
      dispatch(getThemes());
    }
  }, [dispatch, availableThemes]);

  // Function to toggle between light and dark mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(toggleMode());
      },
    }),
    [dispatch]
  );

  // Memoize the theme creation based on selected theme and mode
  const theme = useMemo(() => {
    // Select the appropriate theme based on current mode
    const selectedTheme = mode === "light" ? lightTheme : darkTheme;

    if (!selectedTheme) {
      // Fallback to default MUI theme if no theme is selected
      return createTheme({
        palette: {
          mode: mode,
        },
        typography: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 14,
        },
      });
    }

    // Map the selected theme's color properties to MUI's palette
    const mappedPalette = {
      mode: selectedTheme.mode,
      primary: {
        main: selectedTheme.primary,
        light: selectedTheme.primaryLight,
      },
      secondary: {
        main: selectedTheme.greenAccent, // Assuming greenAccent as secondary
      },
      error: {
        main: selectedTheme.redAccent,
      },
      info: {
        main: selectedTheme.blueAccent,
      },
      success: {
        main: selectedTheme.greenAccent,
      },
      background: {
        default: selectedTheme.background,
        paper: selectedTheme.background,
      },
      text: {
        primary: selectedTheme.text,
        secondary: selectedTheme.greyMain,
      },
      divider: selectedTheme.greyDark,
      // Add custom palette entries if needed
    };

    return createTheme({
      palette: mappedPalette,
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
        h1: {
          fontSize: 40,
        },
        h2: {
          fontSize: 32,
        },
        // ... other typography settings
      },
      // You can add more theme customizations here
    });
  }, [lightTheme, darkTheme, mode]);

  return [theme, colorMode];
};
