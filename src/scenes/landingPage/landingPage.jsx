import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const LandingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: colors.primary[400] }}
    >
      <Box
        textAlign="center"
        p="20px"
        sx={{ backgroundColor: colors.primary[500], borderRadius: "8px" }}
      >
        <Typography variant="h3" mb="20px" color={colors.grey[100]}>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="h5" mb="40px" color={colors.grey[300]}>
          Please sign in or sign up to continue.
        </Typography>
        <Box display="flex" justifyContent="center" gap="20px">
          <Button
            variant="contained"
            color="secondary"
            sx={{ padding: "10px 20px" }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ padding: "10px 20px" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
