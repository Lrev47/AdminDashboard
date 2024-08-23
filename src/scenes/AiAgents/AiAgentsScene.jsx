// scenes/AiAgentsScene.jsx
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

const AiAgentsScene = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define the agents with titles and routes
  const agents = [
    { title: "Finance Agent", route: "/finance-agent" },
    { title: "Content Writer Agent", route: "/content-writer-agent" },
    { title: "Data Analysis Agent", route: "/data-analysis-agent" },
    { title: "Task Automation Agent", route: "/task-automation-agent" },
  ];

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
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
        {agents.map((agent, index) => (
          <Box gridColumn="span 6" key={index}>
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea component={Link} to={agent.route}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    {agent.title}
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
