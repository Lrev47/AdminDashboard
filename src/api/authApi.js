const BASE_URL = "http://localhost:5000/auth"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

const setHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Attach JWT token
  };
};

// Register a new user
export const register = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Log in a user
export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await handleResponse(response);
    if (result.success) {
      // Store the token in localStorage
      localStorage.setItem("authToken", result.data.token);
    }
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Log out a user
export const logout = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Assuming token is passed directly
      },
      body: JSON.stringify({ token }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Refresh token
export const refreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${BASE_URL}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Reset password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await fetch(`${BASE_URL}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Verify email
export const verifyEmail = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/verify-email?token=${token}`, {
      method: "GET",
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user profile
export const getProfile = async () => {
  try {
    const token = localStorage.getItem("authToken"); // Get the token from localStorage
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: setHeaders(token), // Use the same setHeaders helper function
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
// Change password
export const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await fetch(`${BASE_URL}/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get roles
export const getRoles = async () => {
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

// Assign role
export const assignRole = async (userId, role) => {
  try {
    const response = await fetch(`${BASE_URL}/assign-role`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ userId, role }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Revoke role
export const revokeRole = async (userId, role) => {
  try {
    const response = await fetch(`${BASE_URL}/revoke-role`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ userId, role }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Verify token
export const verifyToken = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/verify-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const authApi = {
  register,
  login,
  logout,
  refreshToken,
  forgotPassword,
  resetPassword,
  verifyEmail,
  getProfile,
  changePassword,
  getRoles,
  assignRole,
  revokeRole,
  verifyToken,
};

export default authApi;
