// src/scenes/global/Dashboard.jsx
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { mockTransactions } from "../../data/mockData";

// Styled Components for Consistency and Reusability
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ResponsiveGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridAutoRows: "140px",
  gap: theme.spacing(2.5),
  marginTop: theme.spacing(2.5),
}));

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap" // Ensures wrapping on smaller screens
        gap={2} // Spacing between items when wrapped
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[3],
          padding: theme.spacing(2),
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            variant="contained"
            startIcon={<DownloadOutlinedIcon />}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.getContrastText(
                theme.palette.secondary.main
              ),
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
            aria-label="Download Reports"
          >
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <ResponsiveGrid>
        {/* ROW 1 - StatBoxes */}
        <StyledBox>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: theme.palette.success.main,
                  fontSize: "26px",
                }}
              />
            }
            titleColor={theme.palette.text.primary} // Set title color to primary
            subtitleColor={theme.palette.success.main} // Set subtitle color to green
          />
        </StyledBox>

        <StyledBox>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: theme.palette.success.main,
                  fontSize: "26px",
                }}
              />
            }
            titleColor={theme.palette.text.primary}
            subtitleColor={theme.palette.success.main}
          />
        </StyledBox>

        <StyledBox>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: theme.palette.success.main,
                  fontSize: "26px",
                }}
              />
            }
            titleColor={theme.palette.text.primary}
            subtitleColor={theme.palette.success.main}
          />
        </StyledBox>

        <StyledBox>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: theme.palette.success.main,
                  fontSize: "26px",
                }}
              />
            }
            titleColor={theme.palette.text.primary}
            subtitleColor={theme.palette.success.main}
          />
        </StyledBox>

        {/* ROW 2 - Revenue Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          borderRadius={theme.shape.borderRadius}
          boxShadow={3}
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2} // Margin bottom for spacing
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={theme.palette.text.primary}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={theme.palette.success.main}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton
                aria-label="Download Revenue Report"
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: theme.palette.success.main,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* Fixed Height Container for LineChart */}
          <Box height="250px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2 - Recent Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          borderRadius={theme.shape.borderRadius}
          boxShadow={3}
          overflow="auto"
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.divider}`}
            pb={1} // Padding bottom for spacing
            mb={2} // Margin bottom for spacing
          >
            <Typography
              color={theme.palette.text.primary}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.divider}`}
              py={1} // Padding y-axis
            >
              <Box>
                <Typography
                  color={theme.palette.success.main}
                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={theme.palette.text.primary}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={theme.palette.text.primary}>{transaction.date}</Box>
              <Box
                backgroundColor={theme.palette.success.main}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 - Campaign */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          borderRadius={theme.shape.borderRadius}
          boxShadow={3}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            color={theme.palette.text.primary}
          >
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={theme.palette.text.secondary}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography color={theme.palette.text.primary}>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* ROW 3 - Sales Quantity */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          borderRadius={theme.shape.borderRadius}
          boxShadow={3}
          p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "0 30px 15px 30px" }}
            color={theme.palette.text.primary}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 - Geography Based Traffic */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          borderRadius={theme.shape.borderRadius}
          boxShadow={3}
          p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            color={theme.palette.text.primary}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </ResponsiveGrid>
    </Box>
  );
};

export default Dashboard;
