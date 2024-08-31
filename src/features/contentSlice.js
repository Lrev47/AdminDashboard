import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contentApi from "../api/contentApi";

const initialState = {
  content: [],
  contentItem: null,
  media: [],
  mediaItem: null,
  comments: [],
  revisions: [],
  tags: [],
  authors: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllContent = createAsyncThunk(
  "content/fetchAll",
  async (_, { rejectWithValue }) => {
    const response = await contentApi.getAllContent();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchContentById = createAsyncThunk(
  "content/fetchById",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.getContent(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewContent = createAsyncThunk(
  "content/create",
  async (contentData, { rejectWithValue }) => {
    const response = await contentApi.createContent(contentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateContentById = createAsyncThunk(
  "content/update",
  async ({ id, contentData }, { rejectWithValue }) => {
    const response = await contentApi.updateContent(id, contentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteContentById = createAsyncThunk(
  "content/delete",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.deleteContent(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const publishContentById = createAsyncThunk(
  "content/publish",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.publishContent(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const unpublishContentById = createAsyncThunk(
  "content/unpublish",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.unpublishContent(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTags = createAsyncThunk(
  "content/fetchTags",
  async (_, { rejectWithValue }) => {
    const response = await contentApi.getTags();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAuthors = createAsyncThunk(
  "content/fetchAuthors",
  async (_, { rejectWithValue }) => {
    const response = await contentApi.getAuthors();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const uploadMedia = createAsyncThunk(
  "content/uploadMedia",
  async (mediaData, { rejectWithValue }) => {
    const response = await contentApi.uploadContentMedia(mediaData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllMedia = createAsyncThunk(
  "content/fetchAllMedia",
  async (_, { rejectWithValue }) => {
    const response = await contentApi.getAllMedia();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMediaById = createAsyncThunk(
  "content/fetchMediaById",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.getMedia(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteMediaById = createAsyncThunk(
  "content/deleteMediaById",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.deleteMedia(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllComments = createAsyncThunk(
  "content/fetchAllComments",
  async (_, { rejectWithValue }) => {
    const response = await contentApi.getAllComments();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createComment = createAsyncThunk(
  "content/createComment",
  async (commentData, { rejectWithValue }) => {
    const response = await contentApi.createComment(commentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteCommentById = createAsyncThunk(
  "content/deleteCommentById",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.deleteComment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchRevisionsById = createAsyncThunk(
  "content/fetchRevisionsById",
  async (id, { rejectWithValue }) => {
    const response = await contentApi.getRevisions(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const restoreRevisionById = createAsyncThunk(
  "content/restoreRevisionById",
  async ({ id, revisionData }, { rejectWithValue }) => {
    const response = await contentApi.restoreRevision(id, revisionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(fetchAllContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContentById.fulfilled, (state, action) => {
        state.loading = false;
        state.contentItem = action.payload;
      })
      .addCase(fetchContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content.push(action.payload);
      })
      .addCase(createNewContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContentById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.content.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.content[index] = action.payload;
        }
      })
      .addCase(updateContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContentById.fulfilled, (state, action) => {
        state.loading = false;
        state.content = state.content.filter(
          (item) => item.id !== action.meta.arg
        );
      })
      .addCase(deleteContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(publishContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(publishContentById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.content.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.content[index].published = true;
        }
      })
      .addCase(publishContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(unpublishContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unpublishContentById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.content.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.content[index].published = false;
        }
      })
      .addCase(unpublishContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.loading = false;
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(uploadMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.media.push(action.payload);
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchAllMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMediaById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMediaById.fulfilled, (state, action) => {
        state.loading = false;
        state.mediaItem = action.payload;
      })
      .addCase(fetchMediaById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteMediaById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMediaById.fulfilled, (state, action) => {
        state.loading = false;
        state.media = state.media.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(deleteMediaById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCommentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCommentById.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = state.comments.filter(
          (comment) => comment.id !== action.meta.arg
        );
      })
      .addCase(deleteCommentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRevisionsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRevisionsById.fulfilled, (state, action) => {
        state.loading = false;
        state.revisions = action.payload;
      })
      .addCase(fetchRevisionsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(restoreRevisionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restoreRevisionById.fulfilled, (state, action) => {
        state.loading = false;
        state.contentItem = action.payload;
      })
      .addCase(restoreRevisionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contentSlice.reducer;
