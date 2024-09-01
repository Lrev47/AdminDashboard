import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imageApi from "../api/imagesApi";

const initialState = {
  images: [],
  image: null,
  metadata: null,
  tags: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const uploadNewImage = createAsyncThunk(
  "images/uploadNewImage",
  async (imageData, { rejectWithValue }) => {
    const response = await imageApi.uploadImage(imageData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async (_, { rejectWithValue }) => {
    const response = await imageApi.getAllImages();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchImageById = createAsyncThunk(
  "images/fetchImageById",
  async (id, { rejectWithValue }) => {
    const response = await imageApi.getImage(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteImageById = createAsyncThunk(
  "images/deleteImageById",
  async (id, { rejectWithValue }) => {
    const response = await imageApi.deleteImage(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateImageById = createAsyncThunk(
  "images/updateImageById",
  async ({ id, imageData }, { rejectWithValue }) => {
    const response = await imageApi.updateImage(id, imageData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchImageMetadata = createAsyncThunk(
  "images/fetchImageMetadata",
  async (id, { rejectWithValue }) => {
    const response = await imageApi.getMetadata(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const shareImageById = createAsyncThunk(
  "images/shareImageById",
  async ({ id, shareData }, { rejectWithValue }) => {
    const response = await imageApi.shareImage(id, shareData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const resizeImageById = createAsyncThunk(
  "images/resizeImageById",
  async ({ id, resizeData }, { rejectWithValue }) => {
    const response = await imageApi.resizeImage(id, resizeData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const compressImageById = createAsyncThunk(
  "images/compressImageById",
  async ({ id, compressData }, { rejectWithValue }) => {
    const response = await imageApi.compressImage(id, compressData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const convertImageById = createAsyncThunk(
  "images/convertImageById",
  async ({ id, convertData }, { rejectWithValue }) => {
    const response = await imageApi.convertImage(id, convertData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const downloadImageById = createAsyncThunk(
  "images/downloadImageById",
  async (id, { rejectWithValue }) => {
    const response = await imageApi.downloadImage(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const annotateImageById = createAsyncThunk(
  "images/annotateImageById",
  async ({ id, annotateData }, { rejectWithValue }) => {
    const response = await imageApi.annotateImage(id, annotateData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const cropImageById = createAsyncThunk(
  "images/cropImageById",
  async ({ id, cropData }, { rejectWithValue }) => {
    const response = await imageApi.cropImage(id, cropData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllTags = createAsyncThunk(
  "images/fetchAllTags",
  async (_, { rejectWithValue }) => {
    const response = await imageApi.getAllTags();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchImagesByTag = createAsyncThunk(
  "images/fetchImagesByTag",
  async (tag, { rejectWithValue }) => {
    const response = await imageApi.getImageByTag(tag);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadNewImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadNewImage.fulfilled, (state, action) => {
        state.loading = false;
        state.images.push(action.payload);
      })
      .addCase(uploadNewImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchAllImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchImageById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImageById.fulfilled, (state, action) => {
        state.loading = false;
        state.image = action.payload;
      })
      .addCase(fetchImageById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteImageById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteImageById.fulfilled, (state, action) => {
        state.loading = false;
        state.images = state.images.filter(
          (image) => image.id !== action.meta.arg
        );
      })
      .addCase(deleteImageById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateImageById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateImageById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.images.findIndex(
          (image) => image.id === action.payload.id
        );
        if (index !== -1) {
          state.images[index] = action.payload;
        }
      })
      .addCase(updateImageById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchImageMetadata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImageMetadata.fulfilled, (state, action) => {
        state.loading = false;
        state.metadata = action.payload;
      })
      .addCase(fetchImageMetadata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchAllTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchImagesByTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImagesByTag.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImagesByTag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // You can add more cases for other API interactions like sharing, resizing, compressing, etc.
  },
});

export default imageSlice.reducer;
