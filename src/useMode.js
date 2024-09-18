// src/useMode.js
import { createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";
import { getThemes, toggleMode } from "./features/themeSlice";

/**
 * Custom hook to manage theme mode and provide theme configurations.
 */
export const useMode = () => {
  const dispatch = useDispatch();
  const {
    availableThemes = [],
    lightTheme,
    darkTheme,
    mode = "light",
  } = useSelector((state) => state.theme) || {};

  // Fetch themes when the hook is first used
  useEffect(() => {
    if (availableThemes.length === 0) {
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
        light: selectedTheme.primaryLight || selectedTheme.primary,
      },
      secondary: {
        main: selectedTheme.greenAccent,
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
        paper: selectedTheme.paper || selectedTheme.background,
      },
      text: {
        primary: selectedTheme.text,
        secondary: selectedTheme.greyMain,
      },
      divider: selectedTheme.greyDark,
    };

    // Create and return the theme
    return createTheme({
      palette: mappedPalette,
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
        h1: {
          fontSize: 32,
          fontWeight: 700,
        },
        h2: {
          fontSize: 28,
          fontWeight: 700,
        },
        h3: {
          fontSize: 24,
          fontWeight: 700,
        },
        body1: {
          fontSize: 14,
        },
        body2: {
          fontSize: 12,
        },
      },
    });
  }, [lightTheme, darkTheme, mode]);

  return [theme, colorMode];
};
