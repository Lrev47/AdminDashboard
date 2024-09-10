// src/pages/HowToGuides.jsx
import React from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";

const HowToGuides = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        How-To Guides
      </Typography>
      <Typography variant="body1" gutterBottom>
        Add step-by-step guides or tutorials that help you with various tasks.
      </Typography>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h5">Guide Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description of the guide content.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 2 }}
            >
              Open Guide
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HowToGuides;
