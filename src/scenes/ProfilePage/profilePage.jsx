// ProfilePage.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle file input for profile picture
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set the profile picture preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAccountNameChange = (e) => setAccountName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSaveProfile = () => {
    // Logic to save the profile information, perhaps to a database
    console.log("Profile saved", {
      accountName,
      email,
      phone,
      profilePicture,
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile Page
      </Typography>

      {/* Profile Picture */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Profile Picture
        </Typography>
        <Avatar
          alt="Profile Picture"
          src={profilePicture}
          sx={{ width: 150, height: 150 }}
        />
        <Box mt={2}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-profile-picture"
            type="file"
            onChange={handleProfilePictureChange}
          />
          <label htmlFor="upload-profile-picture">
            <IconButton color="primary" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </Box>
      </Box>

      {/* Account Info */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Account Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Account Name"
              fullWidth
              value={accountName}
              onChange={handleAccountNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              fullWidth
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Save Button */}
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSaveProfile}>
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
