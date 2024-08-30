const BASE_URL = "http://localhost:5000/alerts"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Fetch all alerts
export const getAllAlerts = async () => {
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

// Fetch a single alert by ID
export const getAlert = async (id) => {
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

// Create a new alert
export const createAlert = async (alertData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(alertData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update an existing alert by ID
export const updateAlert = async (id, alertData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(alertData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete an alert by ID
export const deleteAlert = async (id) => {
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
      return { success: false, error: "Failed to delete alert" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Resolve an alert by ID
export const resolveAlert = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/resolve`, {
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

// Fetch all active alerts
export const getActiveAlerts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/active`, {
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

// Bulk resolve alerts
export const bulkResolveAlerts = async (alertIds) => {
  try {
    const response = await fetch(`${BASE_URL}/bulk-resolve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ alertIds }),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Export all API functions
const alertsApi = {
  getAllAlerts,
  getAlert,
  createAlert,
  updateAlert,
  deleteAlert,
  resolveAlert,
  getActiveAlerts,
  bulkResolveAlerts,
};

export default alertsApi;
