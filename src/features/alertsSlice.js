import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import alertsApi from "../api/alertsApi";

const initialState = {
  alerts: [],
  activeAlerts: [],
  alert: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllAlerts = createAsyncThunk(
  "alerts/fetchAll",
  async (_, { rejectWithValue }) => {
    const response = await alertsApi.getAllAlerts();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAlertById = createAsyncThunk(
  "alerts/fetchById",
  async (id, { rejectWithValue }) => {
    const response = await alertsApi.getAlert(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewAlert = createAsyncThunk(
  "alerts/create",
  async (alertData, { rejectWithValue }) => {
    const response = await alertsApi.createAlert(alertData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateAlertById = createAsyncThunk(
  "alerts/update",
  async ({ id, alertData }, { rejectWithValue }) => {
    const response = await alertsApi.updateAlert(id, alertData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteAlertById = createAsyncThunk(
  "alerts/delete",
  async (id, { rejectWithValue }) => {
    const response = await alertsApi.deleteAlert(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const resolveAlertById = createAsyncThunk(
  "alerts/resolve",
  async (id, { rejectWithValue }) => {
    const response = await alertsApi.resolveAlert(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchActiveAlerts = createAsyncThunk(
  "alerts/fetchActive",
  async (_, { rejectWithValue }) => {
    const response = await alertsApi.getActiveAlerts();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const bulkResolveAlerts = createAsyncThunk(
  "alerts/bulkResolve",
  async (alertIds, { rejectWithValue }) => {
    const response = await alertsApi.bulkResolveAlerts(alertIds);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAlerts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAlerts.fulfilled, (state, action) => {
        state.loading = false;
        state.alerts = action.payload;
      })
      .addCase(fetchAllAlerts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAlertById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlertById.fulfilled, (state, action) => {
        state.loading = false;
        state.alert = action.payload;
      })
      .addCase(fetchAlertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewAlert.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewAlert.fulfilled, (state, action) => {
        state.loading = false;
        state.alerts.push(action.payload);
      })
      .addCase(createNewAlert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAlertById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAlertById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.alerts.findIndex(
          (alert) => alert.id === action.payload.id
        );
        if (index !== -1) {
          state.alerts[index] = action.payload;
        }
      })
      .addCase(updateAlertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAlertById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAlertById.fulfilled, (state, action) => {
        state.loading = false;
        state.alerts = state.alerts.filter(
          (alert) => alert.id !== action.meta.arg
        );
      })
      .addCase(deleteAlertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resolveAlertById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resolveAlertById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.alerts.findIndex(
          (alert) => alert.id === action.meta.arg
        );
        if (index !== -1) {
          state.alerts[index].resolved = true;
        }
      })
      .addCase(resolveAlertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchActiveAlerts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveAlerts.fulfilled, (state, action) => {
        state.loading = false;
        state.activeAlerts = action.payload;
      })
      .addCase(fetchActiveAlerts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(bulkResolveAlerts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bulkResolveAlerts.fulfilled, (state, action) => {
        state.loading = false;
        action.meta.arg.forEach((id) => {
          const index = state.alerts.findIndex((alert) => alert.id === id);
          if (index !== -1) {
            state.alerts[index].resolved = true;
          }
        });
      })
      .addCase(bulkResolveAlerts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default alertsSlice.reducer;
