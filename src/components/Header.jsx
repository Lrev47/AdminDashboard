// src/components/Header.jsx
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme(); // Access MUI's theme

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={theme.palette.text.primary} // Primary color for title
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.success.main} // Green color for subtitle
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
