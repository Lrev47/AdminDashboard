// src/components/Breadcrumbs.jsx
import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Break the current path into an array
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{ margin: "16px 0" }}>
      {/* Home breadcrumb */}
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        Home
      </Link>

      {/* Handle 'second-brain' paths */}
      {pathnames[0] === "second-brain" && (
        <>
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to="/second-brain"
          >
            Second Brain
          </Link>
        </>
      )}

      {/* Handle 'AiAgents' paths */}
      {pathnames[0] === "AiAgents" && (
        <>
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to="/AiAgents"
          >
            AI Agents
          </Link>
        </>
      )}

      {/* Render the rest of the breadcrumbs for subpaths */}
      {pathnames.slice(1).map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return isLast ? (
          <Typography color="textPrimary" key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ")}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={to}
            key={to}
          >
            {value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ")}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
