const BASE_URL = "http://localhost:5000/testing-and-debugging"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Testing Endpoints API Calls
export const runTest = async (testData) => {
  try {
    const response = await fetch(`${BASE_URL}/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(testData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const runTestSuite = async (suiteData) => {
  try {
    const response = await fetch(`${BASE_URL}/test-suite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(suiteData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getTestResults = async () => {
  try {
    const response = await fetch(`${BASE_URL}/test-results`, {
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

export const generateMockResponses = async (mockData) => {
  try {
    const response = await fetch(`${BASE_URL}/mock-responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(mockData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getTestCoverage = async () => {
  try {
    const response = await fetch(`${BASE_URL}/test-coverage`, {
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

export const scheduleTests = async (scheduleData) => {
  try {
    const response = await fetch(`${BASE_URL}/schedule-tests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(scheduleData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getTestReports = async () => {
  try {
    const response = await fetch(`${BASE_URL}/test-reports`, {
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

// Debugging Endpoints API Calls
export const logDebuggingInfo = async (logData) => {
  try {
    const response = await fetch(`${BASE_URL}/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(logData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const submitErrorReport = async (errorData) => {
  try {
    const response = await fetch(`${BASE_URL}/error-report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(errorData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const takeSnapshot = async (snapshotData) => {
  try {
    const response = await fetch(`${BASE_URL}/snapshot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(snapshotData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getSnapshots = async () => {
  try {
    const response = await fetch(`${BASE_URL}/snapshots`, {
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

export const toggleLogging = async (toggleData) => {
  try {
    const response = await fetch(`${BASE_URL}/toggle-logging`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(toggleData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getDebuggingEnvironment = async () => {
  try {
    const response = await fetch(`${BASE_URL}/environment`, {
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

export const clearCache = async () => {
  try {
    const response = await fetch(`${BASE_URL}/clear-cache`, {
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

export const simulateError = async (errorData) => {
  try {
    const response = await fetch(`${BASE_URL}/simulate-error`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(errorData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getMemoryUsage = async () => {
  try {
    const response = await fetch(`${BASE_URL}/memory-usage`, {
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

const testingAndDebuggingApi = {
  runTest,
  runTestSuite,
  getTestResults,
  generateMockResponses,
  getTestCoverage,
  scheduleTests,
  getTestReports,
  logDebuggingInfo,
  submitErrorReport,
  takeSnapshot,
  getSnapshots,
  toggleLogging,
  getDebuggingEnvironment,
  clearCache,
  simulateError,
  getMemoryUsage,
};

export default testingAndDebuggingApi;
