import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import externalServiceApi from "../api/externalServiceApi";

const initialState = {
  externalServices: [],
  externalService: null,
  logs: [],
  serviceUsage: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllExternalServices = createAsyncThunk(
  "externalService/fetchAllExternalServices",
  async (_, { rejectWithValue }) => {
    const response = await externalServiceApi.getAllExternalServices();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchExternalServiceById = createAsyncThunk(
  "externalService/fetchExternalServiceById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.getExternalService(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewExternalService = createAsyncThunk(
  "externalService/createExternalService",
  async (serviceData, { rejectWithValue }) => {
    const response = await externalServiceApi.createExternalService(
      serviceData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateExternalServiceById = createAsyncThunk(
  "externalService/updateExternalServiceById",
  async ({ id, serviceData }, { rejectWithValue }) => {
    const response = await externalServiceApi.updateExternalService(
      id,
      serviceData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteExternalServiceById = createAsyncThunk(
  "externalService/deleteExternalServiceById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.deleteExternalService(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const testExternalServiceById = createAsyncThunk(
  "externalService/testExternalServiceById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.testExternalService(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const executeExternalServiceById = createAsyncThunk(
  "externalService/executeExternalServiceById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.executeExternalService(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchExternalServiceLogs = createAsyncThunk(
  "externalService/fetchExternalServiceLogs",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.getExternalServiceLogs(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewWebhook = createAsyncThunk(
  "externalService/createWebhook",
  async (webhookData, { rejectWithValue }) => {
    const response = await externalServiceApi.createWebhook(webhookData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteWebhookById = createAsyncThunk(
  "externalService/deleteWebhookById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.deleteWebhook(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchServiceUsageById = createAsyncThunk(
  "externalService/fetchServiceUsageById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.getServiceUsage(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const syncExternalServiceById = createAsyncThunk(
  "externalService/syncExternalServiceById",
  async (id, { rejectWithValue }) => {
    const response = await externalServiceApi.syncExternalService(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const externalServiceSlice = createSlice({
  name: "externalService",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllExternalServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllExternalServices.fulfilled, (state, action) => {
        state.loading = false;
        state.externalServices = action.payload;
      })
      .addCase(fetchAllExternalServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.externalService = action.payload;
      })
      .addCase(fetchExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewExternalService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewExternalService.fulfilled, (state, action) => {
        state.loading = false;
        state.externalServices.push(action.payload);
      })
      .addCase(createNewExternalService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.externalServices.findIndex(
          (service) => service.id === action.payload.id
        );
        if (index !== -1) {
          state.externalServices[index] = action.payload;
        }
      })
      .addCase(updateExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.externalServices = state.externalServices.filter(
          (service) => service.id !== action.meta.arg
        );
      })
      .addCase(deleteExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(testExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(testExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful test response if necessary
      })
      .addCase(testExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(executeExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(executeExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful execute response if necessary
      })
      .addCase(executeExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchExternalServiceLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExternalServiceLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchExternalServiceLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewWebhook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewWebhook.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful webhook creation if necessary
      })
      .addCase(createNewWebhook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteWebhookById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWebhookById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful webhook deletion if necessary
      })
      .addCase(deleteWebhookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchServiceUsageById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceUsageById.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceUsage = action.payload;
      })
      .addCase(fetchServiceUsageById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(syncExternalServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncExternalServiceById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful sync response if necessary
      })
      .addCase(syncExternalServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default externalServiceSlice.reducer;
