import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import permissionsApi from "../api/permissions";

const initialState = {
  roles: [],
  role: null,
  usersByRole: [],
  userRoles: [],
  capabilities: [],
  auditLog: [],
  permissionRequests: [],
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllRoles = createAsyncThunk(
  "permissions/fetchAllRoles",
  async (_, { rejectWithValue }) => {
    const response = await permissionsApi.getAllRoles();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchRoleById = createAsyncThunk(
  "permissions/fetchRoleById",
  async (id, { rejectWithValue }) => {
    const response = await permissionsApi.getRole(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewRole = createAsyncThunk(
  "permissions/createNewRole",
  async (roleData, { rejectWithValue }) => {
    const response = await permissionsApi.createRole(roleData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateRoleById = createAsyncThunk(
  "permissions/updateRoleById",
  async ({ id, roleData }, { rejectWithValue }) => {
    const response = await permissionsApi.updateRole(id, roleData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteRoleById = createAsyncThunk(
  "permissions/deleteRoleById",
  async (id, { rejectWithValue }) => {
    const response = await permissionsApi.deleteRole(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUsersByRole = createAsyncThunk(
  "permissions/fetchUsersByRole",
  async (roleId, { rejectWithValue }) => {
    const response = await permissionsApi.getUsersByRole(roleId);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const assignRole = createAsyncThunk(
  "permissions/assignRole",
  async (assignData, { rejectWithValue }) => {
    const response = await permissionsApi.assignRoleToUser(assignData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const revokeRole = createAsyncThunk(
  "permissions/revokeRole",
  async (revokeData, { rejectWithValue }) => {
    const response = await permissionsApi.revokeRoleFromUser(revokeData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserRoles = createAsyncThunk(
  "permissions/fetchUserRoles",
  async (userId, { rejectWithValue }) => {
    const response = await permissionsApi.getUserRoles(userId);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllCapabilities = createAsyncThunk(
  "permissions/fetchAllCapabilities",
  async (_, { rejectWithValue }) => {
    const response = await permissionsApi.getAllCapabilities();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const assignCapability = createAsyncThunk(
  "permissions/assignCapability",
  async (assignData, { rejectWithValue }) => {
    const response = await permissionsApi.assignCapabilityToRole(assignData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const revokeCapability = createAsyncThunk(
  "permissions/revokeCapability",
  async (revokeData, { rejectWithValue }) => {
    const response = await permissionsApi.revokeCapabilityFromRole(revokeData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAuditLog = createAsyncThunk(
  "permissions/fetchAuditLog",
  async (_, { rejectWithValue }) => {
    const response = await permissionsApi.getAuditLog();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllPermissionRequests = createAsyncThunk(
  "permissions/fetchAllPermissionRequests",
  async (_, { rejectWithValue }) => {
    const response = await permissionsApi.getAllPermissionRequests();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const approvePermissionRequest = createAsyncThunk(
  "permissions/approvePermissionRequest",
  async (requestId, { rejectWithValue }) => {
    const response = await permissionsApi.approvePermissionRequest(requestId);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const denyPermissionRequest = createAsyncThunk(
  "permissions/denyPermissionRequest",
  async (requestId, { rejectWithValue }) => {
    const response = await permissionsApi.denyPermissionRequest(requestId);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const permissionsSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(fetchAllRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRoleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoleById.fulfilled, (state, action) => {
        state.loading = false;
        state.role = action.payload;
      })
      .addCase(fetchRoleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles.push(action.payload);
      })
      .addCase(createNewRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRoleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRoleById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.roles.findIndex(
          (role) => role.id === action.payload.id
        );
        if (index !== -1) {
          state.roles[index] = action.payload;
        }
      })
      .addCase(updateRoleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRoleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRoleById.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = state.roles.filter((role) => role.id !== action.meta.arg);
      })
      .addCase(deleteRoleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUsersByRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersByRole.fulfilled, (state, action) => {
        state.loading = false;
        state.usersByRole = action.payload;
      })
      .addCase(fetchUsersByRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(assignRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignRole.fulfilled, (state, action) => {
        state.loading = false;
        state.userRoles.push(action.payload);
      })
      .addCase(assignRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(revokeRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(revokeRole.fulfilled, (state, action) => {
        state.loading = false;
        state.userRoles = state.userRoles.filter(
          (role) => role.id !== action.meta.arg.roleId
        );
      })
      .addCase(revokeRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.userRoles = action.payload;
      })
      .addCase(fetchUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCapabilities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCapabilities.fulfilled, (state, action) => {
        state.loading = false;
        state.capabilities = action.payload;
      })
      .addCase(fetchAllCapabilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(assignCapability.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignCapability.fulfilled, (state, action) => {
        state.loading = false;
        const roleIndex = state.roles.findIndex(
          (role) => role.id === action.meta.arg.roleId
        );
        if (roleIndex !== -1) {
          state.roles[roleIndex].capabilities.push(action.payload);
        }
      })
      .addCase(assignCapability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(revokeCapability.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(revokeCapability.fulfilled, (state, action) => {
        state.loading = false;
        const roleIndex = state.roles.findIndex(
          (role) => role.id === action.meta.arg.roleId
        );
        if (roleIndex !== -1) {
          state.roles[roleIndex].capabilities = state.roles[
            roleIndex
          ].capabilities.filter(
            (capability) => capability.id !== action.meta.arg.capabilityId
          );
        }
      })
      .addCase(revokeCapability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAuditLog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuditLog.fulfilled, (state, action) => {
        state.loading = false;
        state.auditLog = action.payload;
      })
      .addCase(fetchAuditLog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllPermissionRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPermissionRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.permissionRequests = action.payload;
      })
      .addCase(fetchAllPermissionRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(approvePermissionRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(approvePermissionRequest.fulfilled, (state, action) => {
        state.loading = false;
        const requestIndex = state.permissionRequests.findIndex(
          (request) => request.id === action.meta.arg
        );
        if (requestIndex !== -1) {
          state.permissionRequests[requestIndex].status = "approved";
        }
      })
      .addCase(approvePermissionRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(denyPermissionRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(denyPermissionRequest.fulfilled, (state, action) => {
        state.loading = false;
        const requestIndex = state.permissionRequests.findIndex(
          (request) => request.id === action.meta.arg
        );
        if (requestIndex !== -1) {
          state.permissionRequests[requestIndex].status = "denied";
        }
      })
      .addCase(denyPermissionRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default permissionsSlice.reducer;
