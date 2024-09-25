import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles"; // Import alpha for transparency
import aiAgentTeams from "../../data/AiAgentMockData"; // Import the mock data

const AiAgentsScene = () => {
  const theme = useTheme();

  return (
    <Box
      m={2.5} // m={2.5} corresponds to 20px
      bgcolor={theme.palette.primary.main} // Set background color to primary
      borderRadius={theme.shape.borderRadius} // Add border radius for aesthetics
      p={2.5} // Add padding for inner spacing
    >
      <Typography
        variant="h2"
        color={theme.palette.text.primary} // Use theme's text primary color
        fontWeight="bold"
        sx={{ mb: 2.5, textAlign: "center" }} // Center the header text
      >
        AI Agents
      </Typography>
      <Box
        display="grid"
        alignItems="center"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={5} // gap={5} corresponds to 40px
      >
        {aiAgentTeams.map((agent, index) => (
          <Box gridColumn="span 6" key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,
                height: "150px", // Ensure the card has enough height for vertical centering
                transition: "background-color 0.3s ease", // Smooth transition for hover effect
                "&:hover": {
                  backgroundColor: alpha(theme.palette.text.primary, 0.1), // Highlight effect on hover
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={`/AiAgents/${agent.route.replace(/^\//, "")}`}
                sx={{ width: "100%", height: "100%" }} // Ensure full clickable area
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", // Center content vertically
                    height: "100%", // Ensure the content takes the full height of the card
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={theme.palette.text.primary} // Use theme's text primary color
                    align="center" // Center text horizontally
                  >
                    {agent.teamName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AiAgentsScene;
