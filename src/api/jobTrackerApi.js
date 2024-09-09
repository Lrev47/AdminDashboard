const API_URL = "http://localhost:5000/jobTracker"; // Ensure this matches your backend base route

// Helper function to set headers with Authorization token
const setHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Ensure JWT token is passed correctly
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

    // Enhanced error handling to include status code and message from server
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error(`Error: ${response.status} - ${errorDetails.message}`);
      throw new Error(
        `Failed to create job application: ${errorDetails.message}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating job application:", error);
    throw error;
  }
};

// Bulk create job applications
export const createBulkJobApplications = async (jobs) => {
  // Ensure jobs array is not empty
  if (!jobs || jobs.length === 0) {
    console.error("No jobs data provided.");
    throw new Error("Jobs data is required for bulk creation.");
  }

  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}/bulk`, {
      method: "POST",
      headers: setHeaders(token),
      body: JSON.stringify(jobs),
    });

    // Enhanced error handling to include status code and message from server
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error(`Error: ${response.status} - ${errorDetails.message}`);
      throw new Error(
        `Failed to create bulk job applications: ${errorDetails.message}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating bulk job applications:", error);
    throw error;
  }
};

// Update a job application
export const updateJobApplication = async (id, data) => {
  console.log("Updating Job Data:", data); // Log data for debugging

  if (!data || Object.keys(data).length === 0) {
    console.error("Job update data is missing.");
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
  console.log("Deleting Job Application with ID:", id); // Log job ID

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
