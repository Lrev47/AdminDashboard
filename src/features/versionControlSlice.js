import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import versionControlApi from "../api/versionControlApi";

const initialState = {
  versions: [],
  version: null,
  schemas: [],
  changelog: null,
  migrations: [],
  migration: null,
  migrationLog: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllVersions = createAsyncThunk(
  "versionControl/fetchAllVersions",
  async (_, { rejectWithValue }) => {
    const response = await versionControlApi.getAllVersions();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchVersionById = createAsyncThunk(
  "versionControl/fetchVersionById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.getVersion(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewVersion = createAsyncThunk(
  "versionControl/createNewVersion",
  async (versionData, { rejectWithValue }) => {
    const response = await versionControlApi.createVersion(versionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateVersionById = createAsyncThunk(
  "versionControl/updateVersionById",
  async ({ id, versionData }, { rejectWithValue }) => {
    const response = await versionControlApi.updateVersion(id, versionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteVersionById = createAsyncThunk(
  "versionControl/deleteVersionById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.deleteVersion(id);
    if (response.success) {
      return id;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchVersionSchemas = createAsyncThunk(
  "versionControl/fetchVersionSchemas",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.getVersionSchemas(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const migrateSchemaById = createAsyncThunk(
  "versionControl/migrateSchemaById",
  async ({ id, schemaData }, { rejectWithValue }) => {
    const response = await versionControlApi.migrateSchema(id, schemaData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const rollbackVersionById = createAsyncThunk(
  "versionControl/rollbackVersionById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.rollbackVersion(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchChangelog = createAsyncThunk(
  "versionControl/fetchChangelog",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.getChangelog(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllMigrations = createAsyncThunk(
  "versionControl/fetchAllMigrations",
  async (_, { rejectWithValue }) => {
    const response = await versionControlApi.getAllMigrations();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMigrationById = createAsyncThunk(
  "versionControl/fetchMigrationById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.getMigration(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewMigration = createAsyncThunk(
  "versionControl/createNewMigration",
  async (migrationData, { rejectWithValue }) => {
    const response = await versionControlApi.createMigration(migrationData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const applyMigrationById = createAsyncThunk(
  "versionControl/applyMigrationById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.applyMigration(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const revertMigrationById = createAsyncThunk(
  "versionControl/revertMigrationById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.revertMigration(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const rollbackMigrationById = createAsyncThunk(
  "versionControl/rollbackMigrationById",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.rollbackMigration(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMigrationLog = createAsyncThunk(
  "versionControl/fetchMigrationLog",
  async (id, { rejectWithValue }) => {
    const response = await versionControlApi.getMigrationLog(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const versionControlSlice = createSlice({
  name: "versionControl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVersions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVersions.fulfilled, (state, action) => {
        state.loading = false;
        state.versions = action.payload;
      })
      .addCase(fetchAllVersions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchVersionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVersionById.fulfilled, (state, action) => {
        state.loading = false;
        state.version = action.payload;
      })
      .addCase(fetchVersionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewVersion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewVersion.fulfilled, (state, action) => {
        state.loading = false;
        state.versions.push(action.payload);
      })
      .addCase(createNewVersion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateVersionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVersionById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.versions.findIndex(
          (version) => version.id === action.payload.id
        );
        if (index !== -1) {
          state.versions[index] = action.payload;
        }
      })
      .addCase(updateVersionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteVersionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVersionById.fulfilled, (state, action) => {
        state.loading = false;
        state.versions = state.versions.filter(
          (version) => version.id !== action.meta.arg
        );
      })
      .addCase(deleteVersionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchVersionSchemas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVersionSchemas.fulfilled, (state, action) => {
        state.loading = false;
        state.schemas = action.payload;
      })
      .addCase(fetchVersionSchemas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(migrateSchemaById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(migrateSchemaById.fulfilled, (state, action) => {
        state.loading = false;
        state.schemas.push(action.payload);
      })
      .addCase(migrateSchemaById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(rollbackVersionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rollbackVersionById.fulfilled, (state, action) => {
        state.loading = false;
        state.version = action.payload;
      })
      .addCase(rollbackVersionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchChangelog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangelog.fulfilled, (state, action) => {
        state.loading = false;
        state.changelog = action.payload;
      })
      .addCase(fetchChangelog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllMigrations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMigrations.fulfilled, (state, action) => {
        state.loading = false;
        state.migrations = action.payload;
      })
      .addCase(fetchAllMigrations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMigrationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMigrationById.fulfilled, (state, action) => {
        state.loading = false;
        state.migration = action.payload;
      })
      .addCase(fetchMigrationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewMigration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewMigration.fulfilled, (state, action) => {
        state.loading = false;
        state.migrations.push(action.payload);
      })
      .addCase(createNewMigration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(applyMigrationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyMigrationById.fulfilled, (state, action) => {
        state.loading = false;
        state.migration = action.payload;
      })
      .addCase(applyMigrationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(revertMigrationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(revertMigrationById.fulfilled, (state, action) => {
        state.loading = false;
        state.migration = action.payload;
      })
      .addCase(revertMigrationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(rollbackMigrationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rollbackMigrationById.fulfilled, (state, action) => {
        state.loading = false;
        state.migration = action.payload;
      })
      .addCase(rollbackMigrationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMigrationLog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMigrationLog.fulfilled, (state, action) => {
        state.loading = false;
        state.migrationLog = action.payload;
      })
      .addCase(fetchMigrationLog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default versionControlSlice.reducer;
