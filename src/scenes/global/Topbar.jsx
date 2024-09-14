// src/scenes/global/Topbar.jsx
import React from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  WbSunny as SunIcon,
  NightsStay as MoonIcon,
  NotificationsOutlined as NotificationsIcon,
  SettingsOutlined as SettingsIcon,
  PersonOutlined as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { toggleMode } from "../../features/themeSlice";

const Topbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bgcolor={theme.palette.background.paper}
      boxShadow={1}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={theme.palette.background.paper}
        borderRadius="3px"
        alignItems="center"
        sx={{
          width: { xs: "100%", sm: "auto" },
          flexGrow: { xs: 1, sm: 0 },
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: theme.palette.text.primary }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{ color: "inherit" }} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={1}>
        {/* Theme Toggle */}

        <IconButton onClick={handleToggleMode} color="inherit">
          {mode === "dark" ? (
            <SunIcon sx={{ color: "inherit" }} />
          ) : (
            <MoonIcon sx={{ color: "inherit" }} />
          )}
        </IconButton>

        {/* Notifications */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        {/* Settings */}
        <Link
          to="/settings"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Topbar;
