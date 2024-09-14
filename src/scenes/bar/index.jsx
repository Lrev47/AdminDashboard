import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useTheme } from "@mui/material";

const Bar = () => {
  const theme = useTheme();
  return (
    <Box
      m={2.5} // m={2.5} corresponds to 20px
      bgcolor={theme.palette.primary.main} // Set background color to primary
      borderRadius={1} // Optional: Add border radius
      p={2} // Optional: Add padding for inner spacing
    >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
