import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import analyticsApi from "../api/analyticsApi";

const initialState = {
  summary: null,
  datasets: [],
  dataset: null,
  reports: [],
  report: null,
  metrics: [],
  tags: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchSummary = createAsyncThunk(
  "analytics/fetchSummary",
  async (_, { rejectWithValue }) => {
    const response = await analyticsApi.getSummary();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createReport = createAsyncThunk(
  "analytics/createReport",
  async (reportData, { rejectWithValue }) => {
    const response = await analyticsApi.createCustomReport(reportData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllDatasets = createAsyncThunk(
  "analytics/fetchAllDatasets",
  async (_, { rejectWithValue }) => {
    const response = await analyticsApi.getAllDatasets();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchDatasetById = createAsyncThunk(
  "analytics/fetchDatasetById",
  async (id, { rejectWithValue }) => {
    const response = await analyticsApi.getDataset(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createDataset = createAsyncThunk(
  "analytics/createDataset",
  async (datasetData, { rejectWithValue }) => {
    const response = await analyticsApi.createDataset(datasetData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateDatasetById = createAsyncThunk(
  "analytics/updateDatasetById",
  async ({ id, datasetData }, { rejectWithValue }) => {
    const response = await analyticsApi.updateDataset(id, datasetData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteDatasetById = createAsyncThunk(
  "analytics/deleteDatasetById",
  async (id, { rejectWithValue }) => {
    const response = await analyticsApi.deleteDataset(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllMetrics = createAsyncThunk(
  "analytics/fetchAllMetrics",
  async (_, { rejectWithValue }) => {
    const response = await analyticsApi.getAllMetrics();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const aggregateData = createAsyncThunk(
  "analytics/aggregateData",
  async (aggregationData, { rejectWithValue }) => {
    const response = await analyticsApi.aggregateData(aggregationData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const visualizeData = createAsyncThunk(
  "analytics/visualizeData",
  async (visualizationData, { rejectWithValue }) => {
    const response = await analyticsApi.visualizeData(visualizationData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllReports = createAsyncThunk(
  "analytics/fetchAllReports",
  async (_, { rejectWithValue }) => {
    const response = await analyticsApi.getAllReports();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchReportById = createAsyncThunk(
  "analytics/fetchReportById",
  async (id, { rejectWithValue }) => {
    const response = await analyticsApi.getReport(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteReportById = createAsyncThunk(
  "analytics/deleteReportById",
  async (id, { rejectWithValue }) => {
    const response = await analyticsApi.deleteReport(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const exportReportById = createAsyncThunk(
  "analytics/exportReportById",
  async (id, { rejectWithValue }) => {
    const response = await analyticsApi.exportReport(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllTags = createAsyncThunk(
  "analytics/fetchAllTags",
  async (_, { rejectWithValue }) => {
    const response = await analyticsApi.getAllTags();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(fetchSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReport.fulfilled, (state, action) => {
        state.loading = false;
        state.reports.push(action.payload);
      })
      .addCase(createReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllDatasets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDatasets.fulfilled, (state, action) => {
        state.loading = false;
        state.datasets = action.payload;
      })
      .addCase(fetchAllDatasets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDatasetById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDatasetById.fulfilled, (state, action) => {
        state.loading = false;
        state.dataset = action.payload;
      })
      .addCase(fetchDatasetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createDataset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDataset.fulfilled, (state, action) => {
        state.loading = false;
        state.datasets.push(action.payload);
      })
      .addCase(createDataset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateDatasetById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDatasetById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.datasets.findIndex(
          (dataset) => dataset.id === action.payload.id
        );
        if (index !== -1) {
          state.datasets[index] = action.payload;
        }
      })
      .addCase(updateDatasetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteDatasetById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDatasetById.fulfilled, (state, action) => {
        state.loading = false;
        state.datasets = state.datasets.filter(
          (dataset) => dataset.id !== action.meta.arg
        );
      })
      .addCase(deleteDatasetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(fetchAllMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(aggregateData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(aggregateData.fulfilled, (state, action) => {
        state.loading = false;
        // Process aggregation result if needed
      })
      .addCase(aggregateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(visualizeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(visualizeData.fulfilled, (state, action) => {
        state.loading = false;
        // Process visualization result if needed
      })
      .addCase(visualizeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchAllReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchReportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportById.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })
      .addCase(fetchReportById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteReportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReportById.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = state.reports.filter(
          (report) => report.id !== action.meta.arg
        );
      })
      .addCase(deleteReportById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(exportReportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(exportReportById.fulfilled, (state, action) => {
        state.loading = false;
        // Process exported report data if needed
      })
      .addCase(exportReportById.rejected, (state, action) => {
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
      });
  },
});

export default analyticsSlice.reducer;
