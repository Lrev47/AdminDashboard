// src/pages/SecondBrainLandingPage.jsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BuildIcon from "@mui/icons-material/Build";
import NotesIcon from "@mui/icons-material/Notes";
import LinkIcon from "@mui/icons-material/Link";

const SecondBrainLandingPage = () => {
  const sections = [
    {
      title: "Future Projects",
      description: "Manage and track your upcoming projects and ideas.",
      icon: <BusinessCenterIcon fontSize="large" />,
      link: "/second-brain/future-projects",
    },
    {
      title: "Wikis",
      description: "Create and manage wikis for various topics.",
      icon: <LibraryBooksIcon fontSize="large" />,
      link: "/second-brain/wikis",
    },
    {
      title: "How-To Guides",
      description: "Step-by-step guides to accomplish specific tasks.",
      icon: <BuildIcon fontSize="large" />,
      link: "/second-brain/how-to-guides",
    },
    {
      title: "Notes",
      description: "Jot down quick notes and ideas.",
      icon: <NotesIcon fontSize="large" />,
      link: "/second-brain/notes",
    },
    {
      title: "References",
      description: "Store important references and resources.",
      icon: <LinkIcon fontSize="large" />,
      link: "/second-brain/references",
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" mt={4}>
        Welcome to Your Second Brain
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={2}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={4} key={section.title}>
            <Card>
              <CardActionArea component={Link} to={section.link}>
                <CardContent style={{ textAlign: "center" }}>
                  {section.icon}
                  <Typography variant="h5" component="div" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SecondBrainLandingPage;
