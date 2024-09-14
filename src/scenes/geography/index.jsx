import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { useSelector } from "react-redux"; // Import useSelector to get the theme from Redux

const Geography = () => {
  const { currentTheme } = useSelector((state) => state.theme); // Get current theme from Redux

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${currentTheme?.grey || "#e0e0e0"}`} // Use grey color from the current theme
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
