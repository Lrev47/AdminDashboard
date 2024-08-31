import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockDataApi from "../api/mockDataApi";

const initialState = {
  mockDataList: [],
  mockDataItem: null,
  schemas: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllMockData = createAsyncThunk(
  "mockData/fetchAllMockData",
  async (_, { rejectWithValue }) => {
    const response = await mockDataApi.getAllMockData();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMockDataById = createAsyncThunk(
  "mockData/fetchMockDataById",
  async (id, { rejectWithValue }) => {
    const response = await mockDataApi.getMockData(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewMockData = createAsyncThunk(
  "mockData/createNewMockData",
  async (mockData, { rejectWithValue }) => {
    const response = await mockDataApi.createMockData(mockData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateMockDataById = createAsyncThunk(
  "mockData/updateMockDataById",
  async ({ id, mockData }, { rejectWithValue }) => {
    const response = await mockDataApi.updateMockData(id, mockData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteMockDataById = createAsyncThunk(
  "mockData/deleteMockDataById",
  async (id, { rejectWithValue }) => {
    const response = await mockDataApi.deleteMockData(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const testMockData = createAsyncThunk(
  "mockData/testMockData",
  async (testData, { rejectWithValue }) => {
    const response = await mockDataApi.testMockData(testData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMockDataSchemas = createAsyncThunk(
  "mockData/fetchMockDataSchemas",
  async (_, { rejectWithValue }) => {
    const response = await mockDataApi.getMockDataSchemas();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const generateMockData = createAsyncThunk(
  "mockData/generateMockData",
  async (generateData, { rejectWithValue }) => {
    const response = await mockDataApi.generateMockData(generateData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const cloneMockDataById = createAsyncThunk(
  "mockData/cloneMockDataById",
  async (id, { rejectWithValue }) => {
    const response = await mockDataApi.cloneMockData(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const mockDataSlice = createSlice({
  name: "mockData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMockData.fulfilled, (state, action) => {
        state.loading = false;
        state.mockDataList = action.payload;
      })
      .addCase(fetchAllMockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMockDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMockDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.mockDataItem = action.payload;
      })
      .addCase(fetchMockDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewMockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewMockData.fulfilled, (state, action) => {
        state.loading = false;
        state.mockDataList.push(action.payload);
      })
      .addCase(createNewMockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateMockDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMockDataById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.mockDataList.findIndex(
          (data) => data.id === action.payload.id
        );
        if (index !== -1) {
          state.mockDataList[index] = action.payload;
        }
      })
      .addCase(updateMockDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteMockDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMockDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.mockDataList = state.mockDataList.filter(
          (data) => data.id !== action.meta.arg
        );
      })
      .addCase(deleteMockDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(testMockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(testMockData.fulfilled, (state, action) => {
        state.loading = false;
        // Handle the response data as needed, e.g., show test results
      })
      .addCase(testMockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMockDataSchemas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMockDataSchemas.fulfilled, (state, action) => {
        state.loading = false;
        state.schemas = action.payload;
      })
      .addCase(fetchMockDataSchemas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(generateMockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateMockData.fulfilled, (state, action) => {
        state.loading = false;
        // Handle generated mock data as needed
      })
      .addCase(generateMockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cloneMockDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cloneMockDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.mockDataList.push(action.payload); // Assuming the cloned data is returned and added to the list
      })
      .addCase(cloneMockDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mockDataSlice.reducer;
