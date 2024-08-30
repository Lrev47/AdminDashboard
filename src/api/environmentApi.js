const BASE_URL = "http://localhost:5000/environment"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Fetch all environments
export const getAllEnvironments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch a single environment by ID
export const getEnvironment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Create a new environment
export const createEnvironment = async (environmentData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(environmentData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update an environment by ID
export const updateEnvironment = async (id, environmentData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(environmentData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete an environment by ID
export const deleteEnvironment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete environment" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Deploy an environment by ID
export const deployEnvironment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/deploy`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch logs for a specific environment by ID
export const getEnvironmentLogs = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/logs`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Reset an environment by ID
export const resetEnvironment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/reset`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Switch to a different environment
export const switchEnvironment = async (switchData) => {
  try {
    const response = await fetch(`${BASE_URL}/switch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(switchData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch environment variables by environment ID
export const getEnvironmentVariables = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/variables`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Create a new environment variable for a specific environment by ID
export const createEnvironmentVariable = async (id, variableData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/variables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(variableData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete an environment variable for a specific environment by ID
export const deleteEnvironmentVariable = async (id, variableData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/variables`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(variableData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Backup an environment by ID
export const backupEnvironment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/backup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Restore an environment by ID
export const restoreEnvironment = async (id, restoreData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/restore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(restoreData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const environmentApi = {
  getAllEnvironments,
  getEnvironment,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
  deployEnvironment,
  getEnvironmentLogs,
  resetEnvironment,
  switchEnvironment,
  getEnvironmentVariables,
  createEnvironmentVariable,
  deleteEnvironmentVariable,
  backupEnvironment,
  restoreEnvironment,
};

export default environmentApi;
