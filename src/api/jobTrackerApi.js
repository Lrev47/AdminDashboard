const API_URL = "http://localhost:5000/jobTracker"; // Ensure this matches your backend base route

// Helper function to set headers with Authorization token
const setHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Attach JWT token
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
    if (!response.ok) {
      throw new Error("Failed to create job application");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating job application:", error);
    throw error;
  }
};

// Bulk create job applications
export const createBulkJobApplications = async (jobs) => {
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
    if (!response.ok) {
      throw new Error("Failed to create bulk job applications");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating bulk job applications:", error);
    throw error;
  }
};

// Update a job application
export const updateJobApplication = async (id, jobData) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: setHeaders(token),
      body: JSON.stringify(jobData),
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
