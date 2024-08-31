import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationsApi from "../api/notificationsApi";

const initialState = {
  notificationsList: [],
  notificationItem: null,
  notificationTypes: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllNotifications = createAsyncThunk(
  "notifications/fetchAllNotifications",
  async (_, { rejectWithValue }) => {
    const response = await notificationsApi.getAllNotifications();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchNotificationById = createAsyncThunk(
  "notifications/fetchNotificationById",
  async (id, { rejectWithValue }) => {
    const response = await notificationsApi.getNotification(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewNotification = createAsyncThunk(
  "notifications/createNewNotification",
  async (notificationData, { rejectWithValue }) => {
    const response = await notificationsApi.createNotification(
      notificationData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateNotificationById = createAsyncThunk(
  "notifications/updateNotificationById",
  async ({ id, notificationData }, { rejectWithValue }) => {
    const response = await notificationsApi.updateNotification(
      id,
      notificationData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteNotificationById = createAsyncThunk(
  "notifications/deleteNotificationById",
  async (id, { rejectWithValue }) => {
    const response = await notificationsApi.deleteNotification(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const markNotificationAsRead = createAsyncThunk(
  "notifications/markNotificationAsRead",
  async (id, { rejectWithValue }) => {
    const response = await notificationsApi.markAsRead(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const markNotificationAsUnread = createAsyncThunk(
  "notifications/markNotificationAsUnread",
  async (id, { rejectWithValue }) => {
    const response = await notificationsApi.markAsUnread(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchNotificationTypes = createAsyncThunk(
  "notifications/fetchNotificationTypes",
  async (_, { rejectWithValue }) => {
    const response = await notificationsApi.getNotificationTypes();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationsList = action.payload;
      })
      .addCase(fetchAllNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNotificationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificationById.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationItem = action.payload;
      })
      .addCase(fetchNotificationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationsList.push(action.payload);
      })
      .addCase(createNewNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateNotificationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotificationById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.notificationsList.findIndex(
          (notification) => notification.id === action.payload.id
        );
        if (index !== -1) {
          state.notificationsList[index] = action.payload;
        }
      })
      .addCase(updateNotificationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteNotificationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNotificationById.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationsList = state.notificationsList.filter(
          (notification) => notification.id !== action.meta.arg
        );
      })
      .addCase(deleteNotificationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(markNotificationAsRead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.notificationsList.findIndex(
          (notification) => notification.id === action.meta.arg
        );
        if (index !== -1) {
          state.notificationsList[index].read = true;
        }
      })
      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(markNotificationAsUnread.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markNotificationAsUnread.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.notificationsList.findIndex(
          (notification) => notification.id === action.meta.arg
        );
        if (index !== -1) {
          state.notificationsList[index].read = false;
        }
      })
      .addCase(markNotificationAsUnread.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNotificationTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificationTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationTypes = action.payload;
      })
      .addCase(fetchNotificationTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default notificationsSlice.reducer;
