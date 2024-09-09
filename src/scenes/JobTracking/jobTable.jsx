import React, { useEffect, useState } from "react";
import { Box, useTheme, Select, MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { updateJob } from "../../features/jobTrackingSlice";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the enum values here for easier reuse
const applicationStatusOptions = [
  "APPLIED",
  "PHONE_SCREEN",
  "INTERVIEW_SCHEDULED",
  "INTERVIEW_COMPLETED",
  "OFFER_RECEIVED",
  "REJECTED",
  "ACCEPTED",
];

const jobCategoryOptions = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"];
const industryOptions = [
  "TECH",
  "FINANCE",
  "HEALTHCARE",
  "MARKETING",
  "EDUCATION",
  "OTHER",
];
const priorityLevelOptions = ["HIGH", "MEDIUM", "LOW"];

// Function to format phone numbers
const formatPhoneNumber = (phone) => {
  if (!phone) return "N/A";
  const cleaned = ("" + phone).replace(/\D/g, ""); // Remove non-numeric characters
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone; // Return unformatted if it doesn't match the expected format
};

// Function to format salary as currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const JobTable = ({ jobs, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  // State to manage hidden columns
  const [columnVisibility, setColumnVisibility] = useState({});

  // On component load, retrieve column visibility from localStorage
  useEffect(() => {
    const savedVisibility =
      JSON.parse(localStorage.getItem("hiddenColumns")) || {};
    setColumnVisibility(savedVisibility);
  }, []);

  // Save column visibility to localStorage whenever it changes
  const handleColumnVisibilityChange = (newVisibilityModel) => {
    setColumnVisibility(newVisibilityModel);
    localStorage.setItem("hiddenColumns", JSON.stringify(newVisibilityModel));
  };

  // Custom cell renderer for enum fields (e.g., dropdowns)
  const renderEnumDropdown = (params, options) => {
    return (
      <Select
        value={params.value || ""}
        onChange={(event) =>
          params.api.setEditCellValue({
            id: params.id,
            field: params.field,
            value: event.target.value,
          })
        }
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    );
  };

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

      // If the value is a boolean, return 'Yes' or 'No'
      if (typeof params.value === "boolean") return params.value ? "Yes" : "No";

      // Apply date formatting for specific date fields
      const dateFields = ["applicationDate", "lastUpdatedDate", "followUpDate"];
      if (
        dateFields.includes(params.field) &&
        typeof params.value === "string"
      ) {
        return new Date(params.value).toLocaleDateString();
      }

      // Format the phone number
      if (params.field === "recruiterPhone") {
        return formatPhoneNumber(params.value);
      }

      // Format salary as currency
      if (params.field === "salaryOffered") {
        return formatCurrency(params.value);
      }

      // For other fields, return the value as it is
      return params.value;
    },

    renderEditCell: (params) => {
      // Render dropdowns for specific enum fields
      if (key === "applicationStatus") {
        return renderEnumDropdown(params, applicationStatusOptions);
      }
      if (key === "jobCategory") {
        return renderEnumDropdown(params, jobCategoryOptions);
      }
      if (key === "industry") {
        return renderEnumDropdown(params, industryOptions);
      }
      if (key === "priorityLevel") {
        return renderEnumDropdown(params, priorityLevelOptions);
      }

      // Return the default edit component for non-enum fields
      return (
        <TextField
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: params.field,
              value: event.target.value,
            })
          }
          fullWidth
        />
      );
    },
  }));

  // Handle cell edit commit (when the user presses Enter or clicks away)
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
          columnVisibilityModel={columnVisibility} // Apply saved column visibility model
          onColumnVisibilityModelChange={handleColumnVisibilityChange} // Handle visibility change
          onCellEditCommit={handleCellEditCommit} // Capture when a user finishes editing the cell
        />
        <ToastContainer /> {/* Add this to display toast notifications */}
      </Box>
    </Box>
  );
};

export default JobTable;
