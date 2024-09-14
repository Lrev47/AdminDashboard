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
import aiAgentTeams from "../../data/AiAgentMockData"; // Import the mock data

const AiAgentsScene = () => {
  const theme = useTheme();

  return (
    <Box
      m={2.5} // m={2.5} corresponds to 20px
      bgcolor={theme.palette.primary.main} // Set background color to primary
      borderRadius={theme.shape.borderRadius} // Optional: Add border radius for aesthetics
      p={2.5} // Optional: Add padding for inner spacing
    >
      <Typography
        variant="h2"
        color={theme.palette.text.primary} // Use theme's text primary color
        fontWeight="bold"
        sx={{ mb: 2.5 }} // mb={2.5} corresponds to 20px
      >
        AI Agents
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={5} // gap={5} corresponds to 40px
      >
        {aiAgentTeams.map((agent, index) => (
          <Box gridColumn="span 6" key={index}>
            <Card
              sx={{
                backgroundColor: theme.palette.secondary.main,
                height: "150px",
              }}
            >
              <CardActionArea
                component={Link}
                to={`/AiAgents/${agent.route.replace(/^\//, "")}`}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={theme.palette.text.primary} // Use greyLight from theme
                    align="center"
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
