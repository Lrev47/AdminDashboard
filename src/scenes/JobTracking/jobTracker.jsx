import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import JobTable from "./jobTable"; // Updated import path
import { fetchJobApplications } from "../../features/jobTrackingSlice"; // Updated import path

// (Rest of your component code remains the same)

const JobTracker = ({ token }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobTracker.jobs);
  const loading = useSelector((state) => state.jobTracker.loading);
  const error = useSelector((state) => state.jobTracker.error);

  useEffect(() => {
    dispatch(fetchJobApplications(token));
  }, [dispatch, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/job-tracker/bulk-add")}
        sx={{ marginBottom: "20px" }}
      >
        Add Jobs in Bulk
      </Button>
      <JobTable jobs={jobs} />
    </Box>
  );
};

export default JobTracker;
