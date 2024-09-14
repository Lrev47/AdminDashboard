import React, { useState, useCallback } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Avatar,
  Paper,
  Slider,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Cropper from "react-easy-crop"; // Import the cropper
import { getCroppedImg } from "../../Utilities/cropUtils"; // Utility function for cropping

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageSrc, setImageSrc] = useState(null); // Image for cropping
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Handle account information changes
  const handleAccountNameChange = (e) => setAccountName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  // Handle profile picture upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Set image source for cropping
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle crop completion
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Handle cropping and setting the profile picture
  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setProfilePicture(croppedImage); // Set cropped image as profile picture
      setImageSrc(null); // Clear the image source after cropping
    } catch (e) {
      console.error(e);
    }
  };

  // Save the profile information
  const handleSaveProfile = () => {
    console.log("Profile saved", {
      accountName,
      email,
      phone,
      profilePicture,
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Profile Page
        </Typography>

        {/* Profile Picture Section */}
        <Box textAlign="center" mb={4}>
          <Avatar
            alt="Profile Picture"
            src={profilePicture}
            sx={{ width: 150, height: 150, margin: "auto" }}
          />
          <label htmlFor="upload-button">
            <input
              id="upload-button"
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhotoCamera />}
              component="span" // Ensures button style is maintained
              sx={{ mt: 2 }}
            >
              Upload Profile Picture
            </Button>
          </label>
        </Box>

        {/* Image Cropping Section */}
        {imageSrc && (
          <Box textAlign="center" mb={4}>
            <Typography variant="h6" gutterBottom>
              Crop Your Profile Picture
            </Typography>
            <div style={{ position: "relative", width: "100%", height: 400 }}>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                showGrid={false}
                cropShape="round"
              />
            </div>
            <Box mt={2}>
              <Typography gutterBottom>Zoom</Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCrop}
              sx={{ mt: 2 }}
            >
              Crop and Save
            </Button>
          </Box>
        )}

        {/* Account Information Section */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Account Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Account Name"
                fullWidth
                value={accountName}
                onChange={handleAccountNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
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

        {/* Save Profile Button */}
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveProfile}
          >
            Save Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
