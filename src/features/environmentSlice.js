import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import environmentApi from "../api/environmentApi";

const initialState = {
  environments: [],
  environment: null,
  logs: [],
  variables: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllEnvironments = createAsyncThunk(
  "environment/fetchAllEnvironments",
  async (_, { rejectWithValue }) => {
    const response = await environmentApi.getAllEnvironments();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchEnvironmentById = createAsyncThunk(
  "environment/fetchEnvironmentById",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.getEnvironment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewEnvironment = createAsyncThunk(
  "environment/createEnvironment",
  async (environmentData, { rejectWithValue }) => {
    const response = await environmentApi.createEnvironment(environmentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateEnvironmentById = createAsyncThunk(
  "environment/updateEnvironmentById",
  async ({ id, environmentData }, { rejectWithValue }) => {
    const response = await environmentApi.updateEnvironment(
      id,
      environmentData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteEnvironmentById = createAsyncThunk(
  "environment/deleteEnvironmentById",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.deleteEnvironment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deployEnvironmentById = createAsyncThunk(
  "environment/deployEnvironmentById",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.deployEnvironment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchEnvironmentLogs = createAsyncThunk(
  "environment/fetchEnvironmentLogs",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.getEnvironmentLogs(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const resetEnvironmentById = createAsyncThunk(
  "environment/resetEnvironmentById",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.resetEnvironment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const switchEnvironment = createAsyncThunk(
  "environment/switchEnvironment",
  async (switchData, { rejectWithValue }) => {
    const response = await environmentApi.switchEnvironment(switchData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchEnvironmentVariables = createAsyncThunk(
  "environment/fetchEnvironmentVariables",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.getEnvironmentVariables(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createEnvironmentVariable = createAsyncThunk(
  "environment/createEnvironmentVariable",
  async ({ id, variableData }, { rejectWithValue }) => {
    const response = await environmentApi.createEnvironmentVariable(
      id,
      variableData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteEnvironmentVariable = createAsyncThunk(
  "environment/deleteEnvironmentVariable",
  async ({ id, variableData }, { rejectWithValue }) => {
    const response = await environmentApi.deleteEnvironmentVariable(
      id,
      variableData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const backupEnvironmentById = createAsyncThunk(
  "environment/backupEnvironmentById",
  async (id, { rejectWithValue }) => {
    const response = await environmentApi.backupEnvironment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const restoreEnvironmentById = createAsyncThunk(
  "environment/restoreEnvironmentById",
  async ({ id, restoreData }, { rejectWithValue }) => {
    const response = await environmentApi.restoreEnvironment(id, restoreData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const environmentSlice = createSlice({
  name: "environment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEnvironments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllEnvironments.fulfilled, (state, action) => {
        state.loading = false;
        state.environments = action.payload;
      })
      .addCase(fetchAllEnvironments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.environment = action.payload;
      })
      .addCase(fetchEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewEnvironment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewEnvironment.fulfilled, (state, action) => {
        state.loading = false;
        state.environments.push(action.payload);
      })
      .addCase(createNewEnvironment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.environments.findIndex(
          (env) => env.id === action.payload.id
        );
        if (index !== -1) {
          state.environments[index] = action.payload;
        }
      })
      .addCase(updateEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.environments = state.environments.filter(
          (env) => env.id !== action.meta.arg
        );
      })
      .addCase(deleteEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deployEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deployEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful deploy response if necessary
      })
      .addCase(deployEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchEnvironmentLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnvironmentLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchEnvironmentLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful reset response if necessary
      })
      .addCase(resetEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(switchEnvironment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(switchEnvironment.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful switch response if necessary
      })
      .addCase(switchEnvironment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchEnvironmentVariables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnvironmentVariables.fulfilled, (state, action) => {
        state.loading = false;
        state.variables = action.payload;
      })
      .addCase(fetchEnvironmentVariables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createEnvironmentVariable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEnvironmentVariable.fulfilled, (state, action) => {
        state.loading = false;
        state.variables.push(action.payload);
      })
      .addCase(createEnvironmentVariable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteEnvironmentVariable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEnvironmentVariable.fulfilled, (state, action) => {
        state.loading = false;
        state.variables = state.variables.filter(
          (variable) => variable.name !== action.meta.arg.name
        );
      })
      .addCase(deleteEnvironmentVariable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(backupEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(backupEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful backup response if necessary
      })
      .addCase(backupEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(restoreEnvironmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restoreEnvironmentById.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful restore response if necessary
      })
      .addCase(restoreEnvironmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default environmentSlice.reducer;
