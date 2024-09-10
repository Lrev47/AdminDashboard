// src/pages/Notes.jsx
import React from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";

const Notes = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Notes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Jot down quick notes or ideas you want to remember for later.
      </Typography>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h5">Note Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Brief description of the note content.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 2 }}
            >
              Open Note
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Notes;
