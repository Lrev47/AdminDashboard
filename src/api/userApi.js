const BASE_URL = "http://localhost:5000/users"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// User Management API Calls
export const getAllUsers = async () => {
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

export const getUser = async (id) => {
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

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteUser = async (id) => {
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
      return { success: false, error: "Failed to delete user" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const patchUser = async (id, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// User Status and Self-Management API Calls
export const getUserStatus = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/status`, {
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

export const getMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
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

export const updateMe = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// User Search and Bulk Operations API Calls
export const searchUsers = async (searchData) => {
  try {
    const response = await fetch(`${BASE_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(searchData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const bulkCreateUsers = async (bulkData) => {
  try {
    const response = await fetch(`${BASE_URL}/bulk-create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(bulkData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Role Management for Users API Calls
export const assignRoleToUser = async (roleData) => {
  try {
    const response = await fetch(`${BASE_URL}/assign-role`, {
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

export const revokeRoleFromUser = async (roleData) => {
  try {
    const response = await fetch(`${BASE_URL}/revoke-role`, {
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

export const getUserRoles = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/roles`, {
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

// User Activity and Notifications API Calls
export const getUserActivity = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/activity`, {
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

export const createUserNotification = async (notificationData) => {
  try {
    const response = await fetch(`${BASE_URL}/notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(notificationData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserNotifications = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/notifications`, {
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

const userApi = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
  getUserStatus,
  getMe,
  updateMe,
  searchUsers,
  bulkCreateUsers,
  assignRoleToUser,
  revokeRoleFromUser,
  getUserRoles,
  getUserActivity,
  createUserNotification,
  getUserNotifications,
};

export default userApi;
