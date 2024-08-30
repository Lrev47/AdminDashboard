const BASE_URL = "http://localhost:5000/content"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Fetch all content
export const getAllContent = async () => {
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

// Fetch a single content item by ID
export const getContent = async (id) => {
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

// Create new content
export const createContent = async (contentData) => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(contentData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update content by ID
export const updateContent = async (id, contentData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(contentData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete content by ID
export const deleteContent = async (id) => {
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
      return { success: false, error: "Failed to delete content" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Publish content by ID
export const publishContent = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/publish`, {
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

// Unpublish content by ID
export const unpublishContent = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/unpublish`, {
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

// Fetch all tags
export const getTags = async () => {
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

// Fetch all authors
export const getAuthors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/authors`, {
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

// Upload content media
export const uploadContentMedia = async (mediaData) => {
  try {
    const response = await fetch(`${BASE_URL}/media/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: mediaData, // Assuming mediaData is a FormData object
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all media
export const getAllMedia = async () => {
  try {
    const response = await fetch(`${BASE_URL}/media`, {
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

// Fetch a single media item by ID
export const getMedia = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/media/${id}`, {
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

// Delete media by ID
export const deleteMedia = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/media/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete media" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch all comments
export const getAllComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comments`, {
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

// Create a new comment
export const createComment = async (commentData) => {
  try {
    const response = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(commentData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a comment by ID
export const deleteComment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete comment" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Fetch revisions for a content item by ID
export const getRevisions = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/revisions`, {
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

// Restore a specific revision for a content item by ID
export const restoreRevision = async (id, revisionData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/revisions/restore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(revisionData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const contentApi = {
  getAllContent,
  getContent,
  createContent,
  updateContent,
  deleteContent,
  publishContent,
  unpublishContent,
  getTags,
  getAuthors,
  uploadContentMedia,
  getAllMedia,
  getMedia,
  deleteMedia,
  getAllComments,
  createComment,
  deleteComment,
  getRevisions,
  restoreRevision,
};

export default contentApi;
