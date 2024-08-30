const BASE_URL = "http://localhost:5000/database"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Execute a single query
export const executeQuery = async (queryData) => {
  try {
    const response = await fetch(`${BASE_URL}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(queryData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Execute a batch query
export const executeBatchQuery = async (batchQueryData) => {
  try {
    const response = await fetch(`${BASE_URL}/batch-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(batchQueryData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all tables
export const getAllTables = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tables`, {
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

// Fetch data for a specific table by ID
export const getTableData = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tables/${id}`, {
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

// Insert data into a specific table by ID
export const insertTableData = async (id, tableData) => {
  try {
    const response = await fetch(`${BASE_URL}/tables/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(tableData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update data in a specific table by ID
export const updateTableData = async (id, tableData) => {
  try {
    const response = await fetch(`${BASE_URL}/tables/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(tableData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete data from a specific table by ID
export const deleteTableData = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tables/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete table data" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Import data
export const importData = async (importData) => {
  try {
    const response = await fetch(`${BASE_URL}/import`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: importData, // Assuming importData is a FormData object for file uploads
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all backups
export const getAllBackups = async () => {
  try {
    const response = await fetch(`${BASE_URL}/backups`, {
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

// Create a new backup
export const createBackup = async () => {
  try {
    const response = await fetch(`${BASE_URL}/backups`, {
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

// Restore a backup
export const restoreBackup = async (backupData) => {
  try {
    const response = await fetch(`${BASE_URL}/backups/restore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(backupData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch logs
export const getLogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logs`, {
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

// Create a transaction
export const createTransaction = async (transactionData) => {
  try {
    const response = await fetch(`${BASE_URL}/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(transactionData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch database schema
export const getSchema = async () => {
  try {
    const response = await fetch(`${BASE_URL}/schema`, {
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

const databaseApi = {
  executeQuery,
  executeBatchQuery,
  getAllTables,
  getTableData,
  insertTableData,
  updateTableData,
  deleteTableData,
  importData,
  getAllBackups,
  createBackup,
  restoreBackup,
  getLogs,
  createTransaction,
  getSchema,
};

export default databaseApi;
