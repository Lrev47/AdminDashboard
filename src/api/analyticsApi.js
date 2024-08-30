const BASE_URL = "http://localhost:5000/analytics"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Fetch analytics summary
export const getSummary = async () => {
  try {
    const response = await fetch(`${BASE_URL}/summary`, {
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

// Create a custom report
export const createCustomReport = async (reportData) => {
  try {
    const response = await fetch(`${BASE_URL}/reports/custom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(reportData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all datasets
export const getAllDatasets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/datasets`, {
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

// Fetch a single dataset by ID
export const getDataset = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/datasets/${id}`, {
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

// Create a new dataset
export const createDataset = async (datasetData) => {
  try {
    const response = await fetch(`${BASE_URL}/datasets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(datasetData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update a dataset by ID
export const updateDataset = async (id, datasetData) => {
  try {
    const response = await fetch(`${BASE_URL}/datasets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(datasetData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a dataset by ID
export const deleteDataset = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/datasets/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete dataset" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all metrics
export const getAllMetrics = async () => {
  try {
    const response = await fetch(`${BASE_URL}/metrics`, {
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

// Aggregate data
export const aggregateData = async (aggregationData) => {
  try {
    const response = await fetch(`${BASE_URL}/aggregate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(aggregationData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Visualize data
export const visualizeData = async (visualizationData) => {
  try {
    const response = await fetch(`${BASE_URL}/visualize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(visualizationData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all reports
export const getAllReports = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reports`, {
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

// Fetch a single report by ID
export const getReport = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/reports/${id}`, {
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

// Create a new report
export const createReport = async (reportData) => {
  try {
    const response = await fetch(`${BASE_URL}/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(reportData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a report by ID
export const deleteReport = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/reports/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete report" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Export a report by ID
export const exportReport = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/reports/${id}/export`, {
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

// Fetch all tags
export const getAllTags = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tags`, {
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

const analyticsApi = {
  getSummary,
  createCustomReport,
  getAllDatasets,
  getDataset,
  createDataset,
  updateDataset,
  deleteDataset,
  getAllMetrics,
  aggregateData,
  visualizeData,
  getAllReports,
  getReport,
  createReport,
  deleteReport,
  exportReport,
  getAllTags,
};

export default analyticsApi;
