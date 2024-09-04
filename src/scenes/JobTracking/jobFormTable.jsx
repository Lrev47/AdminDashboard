import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bulkAddJobApplications } from "../../features/jobTrackingSlice"; // Correct import path
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DeleteIcon from "@mui/icons-material/Delete"; // Ensure this is only imported once

const JobFormTable = ({ token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([
    {
      id: Date.now(),
      companyName: "",
      positionTitle: "",
      location: "",
      jobPostingUrl: "",
      applicationDate: "",
      status: "",
    },
  ]);
  const loading = useSelector((state) => state.jobTracker.loading);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: Date.now(),
        companyName: "",
        positionTitle: "",
        location: "",
        jobPostingUrl: "",
        applicationDate: "",
        status: "",
      },
    ]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bulkAddJobApplications({ jobs: rows, token }));
    setRows([
      {
        id: Date.now(),
        companyName: "",
        positionTitle: "",
        location: "",
        jobPostingUrl: "",
        applicationDate: "",
        status: "",
      },
    ]);
  };

  const handleBack = () => {
    navigate("/job-tracker");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Box m="20px">
      <Header
        title="BULK ADD JOBS"
        subtitle="Add multiple jobs to your tracker"
      />
      <form onSubmit={handleSubmit}>
        <Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 2"
            >
              Company Name
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 2"
            >
              Position Title
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 2"
            >
              Location
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 3"
            >
              Job Posting URL
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 2"
            >
              Application Date
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              gridColumn="span 1"
            >
              Status
            </Typography>
          </Box>
          {rows.map((row) => (
            <Box
              key={row.id}
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gap="20px"
              mt="10px"
            >
              <TextField
                fullWidth
                variant="filled"
                name="companyName"
                value={row.companyName}
                onChange={(e) =>
                  handleChange(row.id, "companyName", e.target.value)
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="positionTitle"
                value={row.positionTitle}
                onChange={(e) =>
                  handleChange(row.id, "positionTitle", e.target.value)
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="location"
                value={row.location}
                onChange={(e) =>
                  handleChange(row.id, "location", e.target.value)
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="jobPostingUrl"
                value={row.jobPostingUrl}
                onChange={(e) =>
                  handleChange(row.id, "jobPostingUrl", e.target.value)
                }
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                name="applicationDate"
                value={row.applicationDate}
                InputLabelProps={{ shrink: true }}
                onChange={(e) =>
                  handleChange(row.id, "applicationDate", e.target.value)
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="status"
                value={row.status}
                onChange={(e) => handleChange(row.id, "status", e.target.value)}
                sx={{ gridColumn: "span 1" }}
              />
              <IconButton
                onClick={() => handleRemoveRow(row.id)}
                sx={{ gridColumn: "span 1", color: colors.redAccent[400] }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
        <Box mt="20px">
          <Button
            type="button"
            color="primary"
            variant="outlined"
            onClick={handleAddRow}
            sx={{
              marginRight: "10px",
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
            }}
          >
            Add Row
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontWeight: "bold",
            }}
          >
            Submit All Jobs
          </Button>
        </Box>
      </form>
      <Box mt="20px">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleBack}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          }}
        >
          Back to Job Tracker
        </Button>
      </Box>
    </Box>
  );
};

export default JobFormTable;
