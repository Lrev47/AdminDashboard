// src/features/themeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchThemes } from "../api/themeApi";

/**
 * Thunk to fetch themes from the backend.
 */
export const getThemes = createAsyncThunk("themes/getThemes", async () => {
  const themes = await fetchThemes();
  return themes;
});

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    availableThemes: [], // All themes fetched from backend
    loading: false,
    error: null,
    lightTheme: null, // Selected light theme
    darkTheme: null, // Selected dark theme
    mode: "light", // Current mode: 'light' or 'dark'
  },
  reducers: {
    /**
     * Sets the selected light theme.
     */
    setLightTheme: (state, action) => {
      state.lightTheme = action.payload;
    },
    /**
     * Sets the selected dark theme.
     */
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    /**
     * Toggles between light and dark mode.
     */
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getThemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getThemes.fulfilled, (state, action) => {
        state.availableThemes = action.payload;

        // Initialize lightTheme and darkTheme from fetched themes
        state.lightTheme =
          action.payload.find((theme) => theme.mode === "light") || null;

        state.darkTheme =
          action.payload.find((theme) => theme.mode === "dark") || null;

        state.loading = false;
      })
      .addCase(getThemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLightTheme, setDarkTheme, toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
