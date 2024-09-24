// src/scenes/dashboard/index.js
import React from "react";
import { Box, Button, Typography, Paper, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Function to handle navigation to different pages
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box m="40px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="30px"
      >
        <Typography variant="h4" fontWeight="bold">
          My Dashboard
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          Manage your projects and track progress
        </Typography>
      </Box>

      {/* GRID & TILES */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="auto"
        gap="20px"
        sx={{
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(6, 1fr)", // Adjust layout for medium screens
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1, 1fr)", // Stack columns on smaller screens
          },
        }}
      >
        {/* Websites Tile */}
        <Paper
          elevation={3}
          sx={{
            gridColumn: "span 4",
            bgcolor: theme.palette.background.default,
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "auto", // Auto height to adapt to content
          }}
        >
          <Typography variant="h6" fontWeight="600" mb={2}>
            My Websites
          </Typography>
          <Box display="flex" flexDirection="column" width="100%" gap={1}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => handleNavigate("/website1")}
            >
              Website 1
            </Button>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => handleNavigate("/website2")}
            >
              Website 2
            </Button>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => handleNavigate("/website3")}
            >
              Website 3
            </Button>
          </Box>
        </Paper>

        {/* Job Tracking Tile */}
        <Paper
          elevation={3}
          sx={{
            gridColumn: "span 4",
            bgcolor: theme.palette.background.default,
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="600" mb={2}>
            Job Tracking
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.success.main}
            mb={2}
          >
            Current Applications: 12
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleNavigate("/job-tracker")}
            sx={{
              width: "100%",
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              "&:hover": {
                borderColor: theme.palette.text.primary,
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            View Job Tracker
          </Button>
        </Paper>

        {/* Leetcode Tracking Tile */}
        <Paper
          elevation={3}
          sx={{
            gridColumn: "span 4",
            bgcolor: theme.palette.background.default,
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="600" mb={2}>
            Leetcode Tracking
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.info.main}>
            Problems Solved: 230
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.info.main}
            mb={2}
          >
            Current Score: 1500
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleNavigate("/leetcode-tracker")}
            sx={{
              width: "100%",
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              "&:hover": {
                borderColor: theme.palette.text.primary,
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            View Leetcode Tracker
          </Button>
        </Paper>

        {/* Placeholder Tile for future features */}
        <Paper
          elevation={3}
          sx={{
            gridColumn: "span 4",
            bgcolor: theme.palette.background.default,
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="600" mb={2}>
            Future Feature
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.warning.main}>
            Coming Soon...
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
