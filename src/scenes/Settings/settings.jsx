// src/scenes/Settings/settings.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Divider,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel as FormGroupLabel,
  Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setLightTheme, setDarkTheme } from "../../features/themeSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { availableThemes, lightTheme, darkTheme, loading, error } =
    useSelector((state) => state.theme);

  const [selectedLightThemeId, setSelectedLightThemeId] = useState(
    lightTheme ? lightTheme.id : ""
  );
  const [selectedDarkThemeId, setSelectedDarkThemeId] = useState(
    darkTheme ? darkTheme.id : ""
  );
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: false,
  });
  const [apiKey, setApiKey] = useState("");

  // Update selected theme IDs when Redux store changes
  useEffect(() => {
    if (lightTheme) {
      setSelectedLightThemeId(lightTheme.id);
    }
    if (darkTheme) {
      setSelectedDarkThemeId(darkTheme.id);
    }
  }, [lightTheme, darkTheme]);

  // Handle light theme selection
  const handleLightThemeChange = (event) => {
    setSelectedLightThemeId(event.target.value);
  };

  // Handle dark theme selection
  const handleDarkThemeChange = (event) => {
    setSelectedDarkThemeId(event.target.value);
  };

  // Handle notification toggle
  const handleNotificationChange = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  // Handle save settings
  const handleSaveSettings = () => {
    const selectedLightTheme = availableThemes.find(
      (theme) => theme.id === selectedLightThemeId
    );
    const selectedDarkTheme = availableThemes.find(
      (theme) => theme.id === selectedDarkThemeId
    );

    if (selectedLightTheme && selectedLightTheme.mode !== "light") {
      console.warn("Selected light theme is not in light mode.");
    }

    if (selectedDarkTheme && selectedDarkTheme.mode !== "dark") {
      console.warn("Selected dark theme is not in dark mode.");
    }

    if (selectedLightTheme) {
      dispatch(setLightTheme(selectedLightTheme));
    }

    if (selectedDarkTheme) {
      dispatch(setDarkTheme(selectedDarkTheme));
    }

    // Save other settings logic here (e.g., notifications, apiKey)
    console.log("Settings saved", {
      selectedLightTheme,
      selectedDarkTheme,
      notifications,
      apiKey,
    });

    // You can implement API calls or further Redux actions to persist these settings
  };

  // Filter themes by mode for selection
  const lightThemes = availableThemes.filter((theme) => theme.mode === "light");
  const darkThemes = availableThemes.filter((theme) => theme.mode === "dark");

  if (loading) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Advanced Settings
        </Typography>
        <Divider />
        <Typography variant="body1" mt={2}>
          Loading themes...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Advanced Settings
        </Typography>
        <Divider />
        <Typography variant="body1" mt={2} color="error">
          Error loading themes: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Advanced Settings
      </Typography>
      <Divider />

      {/* Theme Settings */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Theme Selection
        </Typography>
        <Grid container spacing={4}>
          {/* Light Theme Selection */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="light-theme-select-label">
                Select Light Theme
              </InputLabel>
              <Select
                labelId="light-theme-select-label"
                id="light-theme-select"
                value={selectedLightThemeId}
                onChange={handleLightThemeChange}
                label="Select Light Theme"
              >
                {lightThemes.map((theme) => (
                  <MenuItem key={theme.id} value={theme.id}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        width={20}
                        height={20}
                        bgcolor={theme.primary}
                        borderRadius="50%"
                        border={`1px solid ${theme.greyDark}`}
                      />
                      {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
                    </Box>
                  </MenuItem>
                ))}
                {lightThemes.length === 0 && (
                  <MenuItem disabled>No Light Themes Available</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>

          {/* Dark Theme Selection */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="dark-theme-select-label">
                Select Dark Theme
              </InputLabel>
              <Select
                labelId="dark-theme-select-label"
                id="dark-theme-select"
                value={selectedDarkThemeId}
                onChange={handleDarkThemeChange}
                label="Select Dark Theme"
              >
                {darkThemes.map((theme) => (
                  <MenuItem key={theme.id} value={theme.id}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        width={20}
                        height={20}
                        bgcolor={theme.primary}
                        borderRadius="50%"
                        border={`1px solid ${theme.greyDark}`}
                      />
                      {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
                    </Box>
                  </MenuItem>
                ))}
                {darkThemes.length === 0 && (
                  <MenuItem disabled>No Dark Themes Available</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Notification Settings */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <FormGroup>
          <FormGroupLabel
            control={
              <Checkbox
                checked={notifications.email}
                onChange={handleNotificationChange}
                name="email"
              />
            }
            label="Email Notifications"
          />
          <FormGroupLabel
            control={
              <Checkbox
                checked={notifications.sms}
                onChange={handleNotificationChange}
                name="sms"
              />
            }
            label="SMS Notifications"
          />
          <FormGroupLabel
            control={
              <Checkbox
                checked={notifications.push}
                onChange={handleNotificationChange}
                name="push"
              />
            }
            label="Push Notifications"
          />
        </FormGroup>
      </Box>

      {/* API Settings */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          API Integration
        </Typography>
        <TextField
          label="API Key"
          fullWidth
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API Key"
        />
      </Box>

      {/* Save Button */}
      <Divider />
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveSettings}
        >
          Save Settings
        </Button>
      </Box>
    </Container>
  );
};

export default SettingsPage;
