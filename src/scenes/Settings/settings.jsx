// AdvancedSettingsPage.jsx
import React, { useState } from "react";
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
} from "@mui/material";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: false,
  });
  const [apiKey, setApiKey] = useState("");

  // Handle theme change
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
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
    // Save settings logic here
    console.log("Settings saved", {
      theme,
      notifications,
      apiKey,
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Advanced Settings
      </Typography>
      <Divider />

      {/* Theme Settings */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Theme
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="theme-select-label">Select Theme</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={theme}
            onChange={handleThemeChange}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            {/* Add more themes as needed */}
          </Select>
        </FormControl>
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
