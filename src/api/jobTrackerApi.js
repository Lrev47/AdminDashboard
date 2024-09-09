const API_URL = "http://localhost:5000/jobTracker";

// Helper function to set headers with Authorization token
const setHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// Get all job applications
export const getAllJobApplications = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: setHeaders(token),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch job applications");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching job applications:", error);
    throw error;
  }
};

// Get job application by ID
export const getJobApplicationById = async (id) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: setHeaders(token),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch job application with ID: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching job application by ID:", error);
    throw error;
  }
};

// Create a new job application
export const createJobApplication = async (jobData) => {
  console.log("Job Data:", jobData); // Log job data for debugging

  // Ensure jobData is not undefined or empty
  if (!jobData || Object.keys(jobData).length === 0) {
    console.error("Job Data is missing or invalid.");
    throw new Error("Job Data is required to create a job application.");
  }

  // Convert salaryOffered to a number (float)
  if (jobData.salaryOffered && typeof jobData.salaryOffered === "string") {
    jobData.salaryOffered = parseFloat(jobData.salaryOffered);
  }

  // Ensure applicationDate is valid
  if (!jobData.applicationDate || isNaN(new Date(jobData.applicationDate))) {
    jobData.applicationDate = new Date().toISOString();
    console.log("Set default applicationDate:", jobData.applicationDate);
  }

  // Set defaults for optional fields if they are undefined
  jobData.location = jobData.location || "Remote"; // Default to "Remote" if undefined
  jobData.jobPostingUrl = jobData.jobPostingUrl || ""; // Set empty string if undefined

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: setHeaders(token),
      body: JSON.stringify(jobData),
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.error(
        `Error: ${response.status} - ${JSON.stringify(responseData)}`
      );
      throw new Error(
        `Failed to create job application: ${
          responseData.message || "Unknown error"
        }`
      );
    }

    return responseData;
  } catch (error) {
    console.error("Error creating job application:", error);
    throw error;
  }
};

// // Bulk create job applications
// export const createBulkJobApplications = async (jobs) => {
//   if (!jobs || jobs.length === 0) {
//     console.error("No jobs data provided.");
//     throw new Error("Jobs data is required for bulk creation.");
//   }

//   const validatedJobs = jobs.map((job, index) => {
//     try {
//       console.log(`Processing job #${index + 1}:`, job);

//       // Remove 'applicationStatus' handling, let the backend handle it

//       // Ensure salaryOffered is a number
//       if (job.salaryOffered && typeof job.salaryOffered === "string") {
//         job.salaryOffered = parseFloat(job.salaryOffered);
//       }

//       // Ensure applicationDate is valid and format it as "YYYY-MM-DD"
//       if (!job.applicationDate || isNaN(new Date(job.applicationDate))) {
//         const currentDate = new Date();
//         job.applicationDate = currentDate.toISOString().split("T")[0]; // Default to current date in "YYYY-MM-DD" format
//       } else {
//         job.applicationDate = new Date(job.applicationDate)
//           .toISOString()
//           .split("T")[0];
//       }

//       // Set defaults for optional fields if they are undefined
//       job.location = job.location || "Remote";
//       job.jobPostingUrl = job.jobPostingUrl || "";

//       return job;
//     } catch (err) {
//       console.error(`Error processing job #${index + 1}:`, err);
//       throw new Error(
//         `Job validation failed for job #${index + 1}: ${err.message}`
//       );
//     }
//   });

//   try {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       throw new Error("No authentication token found");
//     }

//     console.log("Sending validated job applications:", validatedJobs);

//     const response = await fetch(`${API_URL}/bulk`, {
//       method: "POST",
//       headers: setHeaders(token),
//       body: JSON.stringify(validatedJobs),
//     });

//     const responseData = await response.json();

//     if (!response.ok) {
//       console.error(
//         `Error: ${response.status} - ${JSON.stringify(responseData)}`
//       );
//       throw new Error(
//         `Failed to create bulk job applications: ${
//           responseData.message || "Unknown error"
//         }`
//       );
//     }

//     console.log("Bulk job applications created successfully:", responseData);

//     return responseData;
//   } catch (error) {
//     console.error("Error creating bulk job applications:", error);
//     throw error;
//   }
// };

// Update a job application
export const updateJobApplication = async (id, data) => {
  console.log("Updating Job Data:", data); // Log data for debugging

  if (!data || Object.keys(data).length === 0) {
    console.error("Job update data is missing."); // Log error message for missing update data
    throw new Error("Job update data is required.");
  }

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: setHeaders(token),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update job application with ID: ${id}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating job application:", error);
    throw error;
  }
};

// Delete a job application
export const deleteJobApplication = async (id) => {
  console.log("Deleting Job Application with ID:", id); // Log job ID for debugging

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: setHeaders(token),
    });
    if (!response.ok) {
      throw new Error(`Failed to delete job application with ID: ${id}`);
    }
  } catch (error) {
    console.error("Error deleting job application:", error);
    throw error;
  }
};
