import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectApi from "../api/project";

const initialState = {
  projects: [],
  project: null,
  milestones: [],
  tasks: [],
  projectTags: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProjects",
  async (_, { rejectWithValue }) => {
    const response = await projectApi.getAllProjects();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchProjectById = createAsyncThunk(
  "projects/fetchProjectById",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.getProject(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewProject = createAsyncThunk(
  "projects/createNewProject",
  async (projectData, { rejectWithValue }) => {
    const response = await projectApi.createProject(projectData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateProjectById = createAsyncThunk(
  "projects/updateProjectById",
  async ({ id, projectData }, { rejectWithValue }) => {
    const response = await projectApi.updateProject(id, projectData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteProjectById = createAsyncThunk(
  "projects/deleteProjectById",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.deleteProject(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchMilestones = createAsyncThunk(
  "projects/fetchMilestones",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.getMilestones(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewMilestone = createAsyncThunk(
  "projects/createNewMilestone",
  async ({ id, milestoneData }, { rejectWithValue }) => {
    const response = await projectApi.createMilestone(id, milestoneData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateMilestoneById = createAsyncThunk(
  "projects/updateMilestoneById",
  async ({ id, milestoneData }, { rejectWithValue }) => {
    const response = await projectApi.updateMilestone(id, milestoneData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteMilestoneById = createAsyncThunk(
  "projects/deleteMilestoneById",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.deleteMilestone(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  "projects/fetchTasks",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.getTasks(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewTask = createAsyncThunk(
  "projects/createNewTask",
  async ({ id, taskData }, { rejectWithValue }) => {
    const response = await projectApi.createTask(id, taskData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateTaskById = createAsyncThunk(
  "projects/updateTaskById",
  async ({ id, taskData }, { rejectWithValue }) => {
    const response = await projectApi.updateTask(id, taskData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteTaskById = createAsyncThunk(
  "projects/deleteTaskById",
  async (id, { rejectWithValue }) => {
    const response = await projectApi.deleteTask(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchProjectTags = createAsyncThunk(
  "projects/fetchProjectTags",
  async (_, { rejectWithValue }) => {
    const response = await projectApi.getProjectTags();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const assignUserToProject = createAsyncThunk(
  "projects/assignUserToProject",
  async ({ id, assignData }, { rejectWithValue }) => {
    const response = await projectApi.assignUserToProject(id, assignData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const unassignUserFromProject = createAsyncThunk(
  "projects/unassignUserFromProject",
  async ({ id, unassignData }, { rejectWithValue }) => {
    const response = await projectApi.unassignUserFromProject(id, unassignData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(createNewProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProjectById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.projects.findIndex(
          (project) => project.id === action.payload.id
        );
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
      })
      .addCase(updateProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.filter(
          (project) => project.id !== action.meta.arg
        );
      })
      .addCase(deleteProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMilestones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMilestones.fulfilled, (state, action) => {
        state.loading = false;
        state.milestones = action.payload;
      })
      .addCase(fetchMilestones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewMilestone.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewMilestone.fulfilled, (state, action) => {
        state.loading = false;
        state.milestones.push(action.payload);
      })
      .addCase(createNewMilestone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateMilestoneById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMilestoneById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.milestones.findIndex(
          (milestone) => milestone.id === action.payload.id
        );
        if (index !== -1) {
          state.milestones[index] = action.payload;
        }
      })
      .addCase(updateMilestoneById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteMilestoneById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMilestoneById.fulfilled, (state, action) => {
        state.loading = false;
        state.milestones = state.milestones.filter(
          (milestone) => milestone.id !== action.meta.arg
        );
      })
      .addCase(deleteMilestoneById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createNewTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTaskById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
      })
      .addCase(deleteTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProjectTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectTags.fulfilled, (state, action) => {
        state.loading = false;
        state.projectTags = action.payload;
      })
      .addCase(fetchProjectTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(assignUserToProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignUserToProject.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.projects.findIndex(
          (project) => project.id === action.meta.arg.id
        );
        if (index !== -1) {
          state.projects[index].assignedUsers.push(action.payload);
        }
      })
      .addCase(assignUserToProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(unassignUserFromProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unassignUserFromProject.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.projects.findIndex(
          (project) => project.id === action.meta.arg.id
        );
        if (index !== -1) {
          state.projects[index].assignedUsers = state.projects[
            index
          ].assignedUsers.filter(
            (user) => user.id !== action.meta.arg.unassignData.userId
          );
        }
      })
      .addCase(unassignUserFromProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectsSlice.reducer;
