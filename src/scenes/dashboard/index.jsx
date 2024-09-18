// src/scenes/dashboard/index.js
import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
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

/**
 * Dashboard component that displays various statistics and charts.
 */
const Dashboard = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* Download Reports Button */}
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
          }}
          startIcon={<DownloadOutlinedIcon />}
          aria-label="Download Reports"
        >
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 - Stat Boxes */}
        {/* Emails Sent */}
        <Box
          gridColumn="span 3"
          bgcolor={theme.palette.background.paper}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: theme.palette.primary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Sales Obtained */}
        <Box
          gridColumn="span 3"
          bgcolor={theme.palette.background.paper}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: theme.palette.primary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* New Clients */}
        <Box
          gridColumn="span 3"
          bgcolor={theme.palette.background.paper}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: theme.palette.primary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Traffic Received */}
        <Box
          gridColumn="span 3"
          bgcolor={theme.palette.background.paper}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: theme.palette.primary.main, fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 - Revenue Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={theme.palette.background.paper}
          p="30px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600">
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
            <IconButton aria-label="Download Revenue Report">
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: theme.palette.success.main }}
              />
            </IconButton>
          </Box>
          <Box height="250px" mt="5px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2 - Recent Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={theme.palette.background.paper}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.divider}`}
            p="15px"
          >
            <Typography variant="h5" fontWeight="600">
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
              p="15px"
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  color={theme.palette.success.main}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={theme.palette.text.secondary}>
                  {transaction.user}
                </Typography>
              </Box>
              <Typography color={theme.palette.text.secondary}>
                {transaction.date}
              </Typography>
              <Box
                bgcolor={theme.palette.success.light}
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
          bgcolor={theme.palette.background.paper}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color={theme.palette.success.main}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
          </Box>
        </Box>

        {/* ROW 3 - Sales Quantity */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={theme.palette.background.paper}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 - Geography Based Traffic */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={theme.palette.background.paper}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
