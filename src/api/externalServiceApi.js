const BASE_URL = "http://localhost:5000/external-services"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Fetch all external services
export const getAllExternalServices = async () => {
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

// Fetch a single external service by ID
export const getExternalService = async (id) => {
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

// Create a new external service
export const createExternalService = async (serviceData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(serviceData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update an external service by ID
export const updateExternalService = async (id, serviceData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(serviceData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete an external service by ID
export const deleteExternalService = async (id) => {
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
      return { success: false, error: "Failed to delete external service" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Test an external service by ID
export const testExternalService = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/test`, {
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

// Execute an external service by ID
export const executeExternalService = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/execute`, {
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

// Fetch logs for a specific external service by ID
export const getExternalServiceLogs = async (id) => {
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

// Create a new webhook
export const createWebhook = async (webhookData) => {
  try {
    const response = await fetch(`${BASE_URL}/webhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(webhookData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a webhook by ID
export const deleteWebhook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/webhook/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete webhook" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch service usage by ID
export const getServiceUsage = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/usage`, {
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

// Sync an external service by ID
export const syncExternalService = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/sync`, {
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

const externalServiceApi = {
  getAllExternalServices,
  getExternalService,
  createExternalService,
  updateExternalService,
  deleteExternalService,
  testExternalService,
  executeExternalService,
  getExternalServiceLogs,
  createWebhook,
  deleteWebhook,
  getServiceUsage,
  syncExternalService,
};

export default externalServiceApi;
