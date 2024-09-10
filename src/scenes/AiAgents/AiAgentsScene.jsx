import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import aiAgentTeams from "../../data/AiAgentMockData"; // Import the mock data

const AiAgentsScene = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "20px" }}
      >
        AI Agents
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="40px">
        {aiAgentTeams.map((agent, index) => (
          <Box gridColumn="span 6" key={index}>
            <Card
              sx={{ backgroundColor: colors.primary[400], height: "150px" }}
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
                    color={colors.grey[100]}
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
