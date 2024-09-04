import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const JobTable = ({ jobs }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "companyName", headerName: "Company Name", flex: 1 },
    { field: "positionTitle", headerName: "Position Title", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "jobPostingUrl", headerName: "Job Posting URL", flex: 1 },
    {
      field: "applicationDate",
      headerName: "Application Date",
      flex: 1,
      type: "date",
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="JOB TRACKER" subtitle="Track all your job applications" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={jobs} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default JobTable;
