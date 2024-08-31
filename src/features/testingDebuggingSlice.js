import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testingAndDebuggingApi from "../api/testingAndDebuggingApi";

const initialState = {
  testResults: [],
  testReports: [],
  snapshots: [],
  memoryUsage: null,
  debugEnvironment: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const runTest = createAsyncThunk(
  "testingAndDebugging/runTest",
  async (testData, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.runTest(testData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const runTestSuite = createAsyncThunk(
  "testingAndDebugging/runTestSuite",
  async (suiteData, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.runTestSuite(suiteData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTestResults = createAsyncThunk(
  "testingAndDebugging/fetchTestResults",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.getTestResults();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTestReports = createAsyncThunk(
  "testingAndDebugging/fetchTestReports",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.getTestReports();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchSnapshots = createAsyncThunk(
  "testingAndDebugging/fetchSnapshots",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.getSnapshots();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMemoryUsage = createAsyncThunk(
  "testingAndDebugging/fetchMemoryUsage",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.getMemoryUsage();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchDebuggingEnvironment = createAsyncThunk(
  "testingAndDebugging/fetchDebuggingEnvironment",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.getDebuggingEnvironment();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const clearCache = createAsyncThunk(
  "testingAndDebugging/clearCache",
  async (_, { rejectWithValue }) => {
    const response = await testingAndDebuggingApi.clearCache();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const testingAndDebuggingSlice = createSlice({
  name: "testingAndDebugging",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(runTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(runTest.fulfilled, (state, action) => {
        state.loading = false;
        state.testResults.push(action.payload);
      })
      .addCase(runTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(runTestSuite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(runTestSuite.fulfilled, (state, action) => {
        state.loading = false;
        state.testResults.push(...action.payload);
      })
      .addCase(runTestSuite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTestResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestResults.fulfilled, (state, action) => {
        state.loading = false;
        state.testResults = action.payload;
      })
      .addCase(fetchTestResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTestReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestReports.fulfilled, (state, action) => {
        state.loading = false;
        state.testReports = action.payload;
      })
      .addCase(fetchTestReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSnapshots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSnapshots.fulfilled, (state, action) => {
        state.loading = false;
        state.snapshots = action.payload;
      })
      .addCase(fetchSnapshots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMemoryUsage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMemoryUsage.fulfilled, (state, action) => {
        state.loading = false;
        state.memoryUsage = action.payload;
      })
      .addCase(fetchMemoryUsage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDebuggingEnvironment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDebuggingEnvironment.fulfilled, (state, action) => {
        state.loading = false;
        state.debugEnvironment = action.payload;
      })
      .addCase(fetchDebuggingEnvironment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearCache.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearCache.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(clearCache.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default testingAndDebuggingSlice.reducer;
