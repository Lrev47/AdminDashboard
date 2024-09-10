// src/pages/Wikis.jsx
import React from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";

const Wikis = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Wikis
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use this section to create and manage wikis for topics you need to refer
        to frequently.
      </Typography>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h5">Wiki Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description of the wiki content.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 2 }}
            >
              Open Wiki
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Wikis;
