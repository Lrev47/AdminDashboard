import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { updateJob } from "../../features/jobTrackingSlice";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobTable = ({ jobs, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  // Dynamically generate columns based on the job data structure and make them editable
  const columns = Object.keys(jobs[0] || {}).map((key) => ({
    field: key,
    headerName: key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()), // Formatting the header to be more readable
    flex: 1,
    editable: true, // Enable cell editing
    minWidth: 150, // Set a minimum width to ensure readability
    headerAlign: "center", // Center-align the column headers
    align: "center", // Center-align the cell content
    valueFormatter: (params) => {
      if (params.value === null || params.value === undefined) return "N/A";
      if (typeof params.value === "boolean") return params.value ? "Yes" : "No";
      if (typeof params.value === "string" && params.value.includes("T"))
        return new Date(params.value).toLocaleDateString(); // Format dates
      return params.value;
    },
  }));

  // Handle cell edit commit to trigger updates
  const handleCellEditCommit = async (params) => {
    const { id, field, value } = params;
    const updatedJob = { ...jobs.find((job) => job.id === id), [field]: value };

    try {
      // Dispatch the updateJob action and wait for the result
      const resultAction = await dispatch(
        updateJob({ id, data: updatedJob, token })
      );

      // Check if the action was fulfilled successfully
      if (resultAction.meta.requestStatus === "fulfilled") {
        toast.success("Update successful!"); // Show success notification
      } else {
        toast.error("Update failed!"); // Show error notification
      }
    } catch (error) {
      toast.error("Error updating job!"); // Show error notification in case of an exception
    }
  };

  return (
    <Box m="20px">
      <Header
        title="JOB TRACKER"
        subtitle="Track and edit your job applications"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "14px", // Increase font size for better readability
            padding: "8px", // Add padding for more space inside cells
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px", // Increase font size of header for better visibility
            fontWeight: "bold", // Make headers bold
            textTransform: "capitalize", // Capitalize headers
            padding: "10px", // Add padding to headers
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
        <DataGrid
          rows={jobs}
          columns={columns}
          checkboxSelection
          pageSize={10} // Set page size to show more data per page
          rowHeight={60} // Increase row height for more space between rows
          autoHeight // Automatically adjust the grid height based on content
          onCellEditCommit={handleCellEditCommit} // Capture when a user commits a cell edit
        />
        <ToastContainer /> {/* Add this to display toast notifications */}
      </Box>
    </Box>
  );
};

export default JobTable;
