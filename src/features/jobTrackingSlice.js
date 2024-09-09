import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllJobApplications,
  // createBulkJobApplications,
  createJobApplication,
  deleteJobApplication,
  updateJobApplication,
} from "../api/jobTrackerApi";

// Thunks for async actions
export const fetchJobApplications = createAsyncThunk(
  "jobTracker/fetchJobApplications",
  async (token, thunkAPI) => {
    try {
      return await getAllJobApplications(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewJobApplication = createAsyncThunk(
  "jobTracker/createNewJobApplication",
  async ({ jobData, token }, thunkAPI) => {
    try {
      return await createJobApplication(jobData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const bulkAddJobApplications = createAsyncThunk(
//   "jobTracker/bulkAddJobApplications",
//   async ({ jobs, token }, thunkAPI) => {
//     try {
//       return await createBulkJobApplications(jobs, token); // bulk add jobs function
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteJob = createAsyncThunk(
  "jobTracker/deleteJob",
  async ({ jobId, token }, thunkAPI) => {
    try {
      await deleteJobApplication(jobId, token);
      return jobId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateJob = createAsyncThunk(
  "jobTracker/updateJob",
  async ({ id, data, token }, thunkAPI) => {
    try {
      // Call the API to update the job in the database
      return await updateJobApplication(id, data, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobTrackerSlice = createSlice({
  name: "jobTracker",
  initialState,
  reducers: {
    // You can add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    // Fetch job applications
    builder.addCase(fetchJobApplications.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchJobApplications.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchJobApplications.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Create new job application
    builder.addCase(createNewJobApplication.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createNewJobApplication.fulfilled, (state, action) => {
      state.jobs.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createNewJobApplication.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // // Bulk add job applications
    // builder.addCase(bulkAddJobApplications.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(bulkAddJobApplications.fulfilled, (state, action) => {
    //   state.jobs.push(...action.payload);
    //   state.loading = false;
    // });
    // builder.addCase(bulkAddJobApplications.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });

    // Delete job application
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.error = action.payload;
    });

    // Update job application
    builder.addCase(updateJob.fulfilled, (state, action) => {
      const updatedJob = action.payload;
      const index = state.jobs.findIndex((job) => job.id === updatedJob.id);
      if (index !== -1) {
        state.jobs[index] = updatedJob;
      }
    });
    builder.addCase(updateJob.rejected, (state, action) => {
      state.error = action.payload; // Capture any update errors
    });
  },
});

export default jobTrackerSlice.reducer;
