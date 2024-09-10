// src/pages/FutureProjects.jsx
import React from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";

const FutureProjects = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Future Projects
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here you can keep track of all your upcoming projects, ideas, and plans.
      </Typography>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h5">Project Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description of the project.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 2 }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FutureProjects;
