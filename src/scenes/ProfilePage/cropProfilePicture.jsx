import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Button, Container, Typography, Box, Slider } from "@mui/material";
import { getCroppedImg } from "./cropUtils"; // Utility function to handle cropping

const CropProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      console.log("Cropped image:", croppedImage);
      // Do something with the cropped image (e.g., save it)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Upload and Crop Your Profile Picture
      </Typography>
      <Box textAlign="center" mb={3}>
        <input
          accept="image/*"
          type="file"
          onChange={handleImageUpload}
          style={{ marginBottom: "20px" }}
        />
        {imageSrc && (
          <div style={{ position: "relative", width: "100%", height: 400 }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        )}
        {imageSrc && (
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
        )}
      </Box>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleCrop}
          disabled={!imageSrc}
        >
          Crop and Save
        </Button>
      </Box>
    </Container>
  );
};

export default CropProfilePicture;
