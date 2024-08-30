const BASE_URL = "http://localhost:5000/projects"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Project Management API Calls
export const getAllProjects = async () => {
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

export const getProject = async (id) => {
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

export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(projectData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(projectData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteProject = async (id) => {
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
      return { success: false, error: "Failed to delete project" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Milestone Management API Calls
export const getMilestones = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/milestones`, {
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

export const createMilestone = async (id, milestoneData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/milestones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(milestoneData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateMilestone = async (id, milestoneData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/milestones`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(milestoneData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteMilestone = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/milestones`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete milestone" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Task Management API Calls
export const getTasks = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/tasks`, {
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

export const createTask = async (id, taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(taskData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/tasks`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(taskData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/tasks`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete task" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Project Tags API Call
export const getProjectTags = async () => {
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

// User Assignment to Project API Calls
export const assignUserToProject = async (id, assignData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/assign-user`, {
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

export const unassignUserFromProject = async (id, unassignData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/unassign-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(unassignData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const projectApi = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getMilestones,
  createMilestone,
  updateMilestone,
  deleteMilestone,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getProjectTags,
  assignUserToProject,
  unassignUserFromProject,
};

export default projectApi;
