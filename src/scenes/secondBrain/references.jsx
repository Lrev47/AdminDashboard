// src/pages/References.jsx
import React from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";

const References = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        References
      </Typography>
      <Typography variant="body1" gutterBottom>
        Keep track of useful resources, links, or reference materials here.
      </Typography>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h5">Reference Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description of the reference.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 2 }}
            >
              Open Reference
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default References;
