const BASE_URL = "http://localhost:5000/permissions"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Role Management API Calls
export const getAllRoles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/roles`, {
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

export const createRole = async (roleData) => {
  try {
    const response = await fetch(`${BASE_URL}/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(roleData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getRole = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/${id}`, {
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

export const updateRole = async (id, roleData) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(roleData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteRole = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete role" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// User Role Management API Calls
export const getUsersByRole = async (roleId) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/${roleId}/users`, {
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

export const assignRoleToUser = async (assignData) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/assign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(assignData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const revokeRoleFromUser = async (revokeData) => {
  try {
    const response = await fetch(`${BASE_URL}/roles/revoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(revokeData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserRoles = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/roles`, {
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

// Capability Management API Calls
export const getAllCapabilities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/capabilities`, {
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

export const assignCapabilityToRole = async (assignData) => {
  try {
    const response = await fetch(`${BASE_URL}/capabilities/assign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(assignData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const revokeCapabilityFromRole = async (revokeData) => {
  try {
    const response = await fetch(`${BASE_URL}/capabilities/revoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(revokeData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Audit Log API Call
export const getAuditLog = async () => {
  try {
    const response = await fetch(`${BASE_URL}/audit-log`, {
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

// Permission Requests API Calls
export const getAllPermissionRequests = async () => {
  try {
    const response = await fetch(`${BASE_URL}/requests`, {
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

export const approvePermissionRequest = async (requestId) => {
  try {
    const response = await fetch(`${BASE_URL}/requests/${requestId}/approve`, {
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

export const denyPermissionRequest = async (requestId) => {
  try {
    const response = await fetch(`${BASE_URL}/requests/${requestId}/deny`, {
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

const permissionsApi = {
  getAllRoles,
  createRole,
  getRole,
  updateRole,
  deleteRole,
  getUsersByRole,
  assignRoleToUser,
  revokeRoleFromUser,
  getUserRoles,
  getAllCapabilities,
  assignCapabilityToRole,
  revokeCapabilityFromRole,
  getAuditLog,
  getAllPermissionRequests,
  approvePermissionRequest,
  denyPermissionRequest,
};

export default permissionsApi;
