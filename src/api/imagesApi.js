const BASE_URL = "http://localhost:5000/images"; // Adjust as needed

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return { success: true, data };
  } else {
    return { success: false, error: data.message };
  }
};

// Image API Calls
export const uploadImage = async (imageData) => {
  try {
    const response = await fetch(`${BASE_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: imageData, // Assuming imageData is a FormData object
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getAllImages = async () => {
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

export const getImage = async (id) => {
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

export const deleteImage = async (id) => {
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
      return { success: false, error: "Failed to delete image" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateImage = async (id, imageData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(imageData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Metadata and Sharing API Calls
export const getMetadata = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/metadata`, {
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

export const shareImage = async (id, shareData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(shareData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Image Processing API Calls
export const resizeImage = async (id, resizeData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/resize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(resizeData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const compressImage = async (id, compressData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/compress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(compressData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const convertImage = async (id, convertData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/convert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(convertData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const downloadImage = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/download`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.ok) {
      const blob = await response.blob();
      return { success: true, data: blob };
    } else {
      return { success: false, error: "Failed to download image" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const annotateImage = async (id, annotateData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/annotate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(annotateData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const cropImage = async (id, cropData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/crop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(cropData),
    });
    return await handleResponse(response);
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Tagging API Calls
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

export const getImageByTag = async (tag) => {
  try {
    const response = await fetch(`${BASE_URL}/tags/${tag}`, {
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

const imageApi = {
  uploadImage,
  getAllImages,
  getImage,
  deleteImage,
  updateImage,
  getMetadata,
  shareImage,
  resizeImage,
  compressImage,
  convertImage,
  downloadImage,
  annotateImage,
  cropImage,
  getAllTags,
  getImageByTag,
};

export default imageApi;
