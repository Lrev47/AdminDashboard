import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Select, MenuItem, Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import JobTable from "./jobTable";
import {
  fetchJobApplications,
  createNewJobApplication,
} from "../../features/jobTrackingSlice";

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

const JobTracker = ({ token }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobTracker.jobs);
  const loading = useSelector((state) => state.jobTracker.loading);
  const error = useSelector((state) => state.jobTracker.error);

  const [newJob, setNewJob] = useState({
    companyName: "",
    positionTitle: "",
    applicationStatus: "APPLIED",
    jobCategory: "FULL_TIME",
    industry: "TECH",
    priorityLevel: "MEDIUM",
    salaryOffered: "",
    recruiterPhone: "",
  });

  useEffect(() => {
    dispatch(fetchJobApplications(token));
  }, [dispatch, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleAddJob = () => {
    // Log the newJob to check its contents
    console.log("New Job Data:", newJob);

    // Validate required fields before dispatching
    if (!newJob.companyName || !newJob.positionTitle) {
      alert(
        "Please fill in the required fields: Company Name and Position Title."
      );
      return;
    }

    // Convert salaryOffered to a number if it's not empty
    if (newJob.salaryOffered) {
      newJob.salaryOffered = parseFloat(newJob.salaryOffered);
    }

    dispatch(createNewJobApplication({ jobData: newJob, token }))
      .unwrap()
      .then(() => {
        alert("Job added successfully!");

        // Reset form after successful submission
        setNewJob({
          companyName: "",
          positionTitle: "",
          applicationStatus: "APPLIED",
          jobCategory: "FULL_TIME",
          industry: "TECH",
          priorityLevel: "MEDIUM",
          salaryOffered: "",
          recruiterPhone: "",
        });
      })
      .catch((error) => {
        console.error("Failed to add job:", error);
        alert(`Failed to add job: ${error.message}`);
      });
  };

  return (
    <Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Company Name"
              name="companyName"
              value={newJob.companyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Position Title"
              name="positionTitle"
              value={newJob.positionTitle}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={4}>
            <Select
              label="Application Status"
              name="applicationStatus"
              value={newJob.applicationStatus}
              onChange={handleChange}
              fullWidth
            >
              {applicationStatusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Job Category"
              name="jobCategory"
              value={newJob.jobCategory}
              onChange={handleChange}
              fullWidth
            >
              {jobCategoryOptions.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Industry"
              name="industry"
              value={newJob.industry}
              onChange={handleChange}
              fullWidth
            >
              {industryOptions.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={4}>
            <Select
              label="Priority Level"
              name="priorityLevel"
              value={newJob.priorityLevel}
              onChange={handleChange}
              fullWidth
            >
              {priorityLevelOptions.map((priority) => (
                <MenuItem key={priority} value={priority}>
                  {priority}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Salary Offered"
              name="salaryOffered"
              value={newJob.salaryOffered}
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Recruiter Phone"
              name="recruiterPhone"
              value={newJob.recruiterPhone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={handleAddJob}>
          Add Job
        </Button>
      </Box>

      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/job-tracker/bulk-add")}
        sx={{ marginBottom: "20px" }}
      >
        Add Jobs in Bulk
      </Button> */}

      <JobTable jobs={jobs} token={token} />
    </Box>
  );
};

export default JobTracker;
