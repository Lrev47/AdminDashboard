import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import databaseApi from "../api/databaseQueriesApi";

const initialState = {
  tables: [],
  tableData: null,
  backups: [],
  logs: [],
  schema: null,
  queryResult: null,
  batchQueryResult: null,
  transactionResult: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllTables = createAsyncThunk(
  "database/fetchAllTables",
  async (_, { rejectWithValue }) => {
    const response = await databaseApi.getAllTables();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTableDataById = createAsyncThunk(
  "database/fetchTableDataById",
  async (id, { rejectWithValue }) => {
    const response = await databaseApi.getTableData(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const executeDatabaseQuery = createAsyncThunk(
  "database/executeQuery",
  async (queryData, { rejectWithValue }) => {
    const response = await databaseApi.executeQuery(queryData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const executeDatabaseBatchQuery = createAsyncThunk(
  "database/executeBatchQuery",
  async (batchQueryData, { rejectWithValue }) => {
    const response = await databaseApi.executeBatchQuery(batchQueryData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const insertDataIntoTable = createAsyncThunk(
  "database/insertTableData",
  async ({ id, tableData }, { rejectWithValue }) => {
    const response = await databaseApi.insertTableData(id, tableData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateTableDataById = createAsyncThunk(
  "database/updateTableDataById",
  async ({ id, tableData }, { rejectWithValue }) => {
    const response = await databaseApi.updateTableData(id, tableData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteDataFromTableById = createAsyncThunk(
  "database/deleteTableDataById",
  async (id, { rejectWithValue }) => {
    const response = await databaseApi.deleteTableData(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const importDatabaseData = createAsyncThunk(
  "database/importData",
  async (importData, { rejectWithValue }) => {
    const response = await databaseApi.importData(importData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllBackups = createAsyncThunk(
  "database/fetchAllBackups",
  async (_, { rejectWithValue }) => {
    const response = await databaseApi.getAllBackups();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createDatabaseBackup = createAsyncThunk(
  "database/createBackup",
  async (_, { rejectWithValue }) => {
    const response = await databaseApi.createBackup();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const restoreDatabaseBackup = createAsyncThunk(
  "database/restoreBackup",
  async (backupData, { rejectWithValue }) => {
    const response = await databaseApi.restoreBackup(backupData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchDatabaseLogs = createAsyncThunk(
  "database/fetchLogs",
  async (_, { rejectWithValue }) => {
    const response = await databaseApi.getLogs();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createDatabaseTransaction = createAsyncThunk(
  "database/createTransaction",
  async (transactionData, { rejectWithValue }) => {
    const response = await databaseApi.createTransaction(transactionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchDatabaseSchema = createAsyncThunk(
  "database/fetchSchema",
  async (_, { rejectWithValue }) => {
    const response = await databaseApi.getSchema();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(fetchAllTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTableDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTableDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.tableData = action.payload;
      })
      .addCase(fetchTableDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(executeDatabaseQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(executeDatabaseQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.queryResult = action.payload;
      })
      .addCase(executeDatabaseQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(executeDatabaseBatchQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(executeDatabaseBatchQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.batchQueryResult = action.payload;
      })
      .addCase(executeDatabaseBatchQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(insertDataIntoTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertDataIntoTable.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the payload contains the updated table data
        const index = state.tables.findIndex(
          (table) => table.id === action.payload.id
        );
        if (index !== -1) {
          state.tables[index] = action.payload;
        }
      })
      .addCase(insertDataIntoTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTableDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTableDataById.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the payload contains the updated table data
        const index = state.tables.findIndex(
          (table) => table.id === action.payload.id
        );
        if (index !== -1) {
          state.tables[index] = action.payload;
        }
      })
      .addCase(updateTableDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteDataFromTableById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDataFromTableById.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = state.tables.filter(
          (table) => table.id !== action.meta.arg
        );
      })
      .addCase(deleteDataFromTableById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(importDatabaseData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(importDatabaseData.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful import response if necessary
      })
      .addCase(importDatabaseData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllBackups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBackups.fulfilled, (state, action) => {
        state.loading = false;
        state.backups = action.payload;
      })
      .addCase(fetchAllBackups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createDatabaseBackup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDatabaseBackup.fulfilled, (state, action) => {
        state.loading = false;
        state.backups.push(action.payload);
      })
      .addCase(createDatabaseBackup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(restoreDatabaseBackup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restoreDatabaseBackup.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful restore response if necessary
      })
      .addCase(restoreDatabaseBackup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDatabaseLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDatabaseLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchDatabaseLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createDatabaseTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDatabaseTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionResult = action.payload;
      })
      .addCase(createDatabaseTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDatabaseSchema.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDatabaseSchema.fulfilled, (state, action) => {
        state.loading = false;
        state.schema = action.payload;
      })
      .addCase(fetchDatabaseSchema.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default databaseSlice.reducer;
