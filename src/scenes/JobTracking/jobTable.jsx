import React, { useEffect, useState } from "react";
import {
  Box,
  useTheme,
  Select,
  MenuItem,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { updateJob, deleteJob } from "../../features/jobTrackingSlice"; // Import deleteJob action
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
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
  return phone;
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

  const [selectedRows, setSelectedRows] = useState([]); // State to track selected rows for bulk delete

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

  // Handle job deletion
  const handleDeleteJob = async (id) => {
    try {
      const resultAction = await dispatch(deleteJob({ jobId: id, token }));
      if (resultAction.meta.requestStatus === "fulfilled") {
        toast.success("Job deleted successfully!");
      } else {
        toast.error("Failed to delete job.");
      }
    } catch (error) {
      toast.error("Error deleting job.");
    }
  };

  // Handle bulk job deletion
  const handleDeleteSelectedJobs = () => {
    selectedRows.forEach((id) => handleDeleteJob(id));
  };

  // Dynamically generate columns based on the job data structure and make them editable
  const columns = [
    ...Object.keys(jobs[0] || {}).map((key) => ({
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

        if (typeof params.value === "boolean")
          return params.value ? "Yes" : "No";

        const dateFields = [
          "applicationDate",
          "lastUpdatedDate",
          "followUpDate",
        ];
        if (
          dateFields.includes(params.field) &&
          typeof params.value === "string"
        ) {
          return new Date(params.value).toLocaleDateString();
        }

        if (params.field === "recruiterPhone") {
          return formatPhoneNumber(params.value);
        }

        if (params.field === "salaryOffered") {
          return formatCurrency(params.value);
        }

        return params.value;
      },

      renderEditCell: (params) => {
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
    })),
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <IconButton
          color="secondary"
          onClick={() => handleDeleteJob(params.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  // Handle cell edit commit
  const handleCellEditCommit = async (params) => {
    const { id, field, value } = params;
    const updatedJob = { ...jobs.find((job) => job.id === id), [field]: value };

    try {
      const resultAction = await dispatch(
        updateJob({ id, data: updatedJob, token })
      );
      if (resultAction.meta.requestStatus === "fulfilled") {
        toast.success("Update successful!");
      } else {
        toast.error("Update failed!");
      }
    } catch (error) {
      toast.error("Error updating job.");
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
            fontSize: "14px",
            padding: "8px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "capitalize",
            padding: "10px",
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
          pageSize={10}
          rowHeight={60}
          autoHeight
          columnVisibilityModel={columnVisibility}
          onColumnVisibilityModelChange={handleColumnVisibilityChange}
          onSelectionModelChange={(newSelection) =>
            setSelectedRows(newSelection)
          }
          onCellEditCommit={handleCellEditCommit}
        />

        {selectedRows.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteSelectedJobs}
            sx={{ mt: 2 }}
          >
            Delete Selected Jobs
          </Button>
        )}

        <ToastContainer />
      </Box>
    </Box>
  );
};

export default JobTable;
