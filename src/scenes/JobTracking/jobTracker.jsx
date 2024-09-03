import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JobTable from "./jobTable";

const JobTracker = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

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
