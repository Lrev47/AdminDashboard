import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

const initialState = {
  users: [],
  user: null,
  currentUser: null,
  userStatus: null,
  roles: [],
  activities: [],
  notifications: [],
  loading: false,
  error: null,
};

// Async Thunks

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    const response = await userApi.getAllUsers();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id, { rejectWithValue }) => {
    const response = await userApi.getUser(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createUser = createAsyncThunk(
  "users/create",
  async (userData, { rejectWithValue }) => {
    const response = await userApi.createUser(userData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, userData }, { rejectWithValue }) => {
    const response = await userApi.updateUser(id, userData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const patchUser = createAsyncThunk(
  "users/patch",
  async ({ id, userData }, { rejectWithValue }) => {
    const response = await userApi.patchUser(id, userData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id, { rejectWithValue }) => {
    const response = await userApi.deleteUser(id);
    if (response.success) {
      return id;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserStatus = createAsyncThunk(
  "users/fetchStatus",
  async (id, { rejectWithValue }) => {
    const response = await userApi.getUserStatus(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    const response = await userApi.getMe();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateCurrentUser = createAsyncThunk(
  "users/updateCurrentUser",
  async (userData, { rejectWithValue }) => {
    const response = await userApi.updateMe(userData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "users/search",
  async (searchData, { rejectWithValue }) => {
    const response = await userApi.searchUsers(searchData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const bulkCreateUsers = createAsyncThunk(
  "users/bulkCreate",
  async (bulkData, { rejectWithValue }) => {
    const response = await userApi.bulkCreateUsers(bulkData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const assignRoleToUser = createAsyncThunk(
  "users/assignRole",
  async (roleData, { rejectWithValue }) => {
    const response = await userApi.assignRoleToUser(roleData);
    if (response.success) {
      return roleData;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const revokeRoleFromUser = createAsyncThunk(
  "users/revokeRole",
  async (roleData, { rejectWithValue }) => {
    const response = await userApi.revokeRoleFromUser(roleData);
    if (response.success) {
      return roleData;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserRoles = createAsyncThunk(
  "users/fetchRoles",
  async (id, { rejectWithValue }) => {
    const response = await userApi.getUserRoles(id);
    if (response.success) {
      return { id, roles: response.data };
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserActivity = createAsyncThunk(
  "users/fetchActivity",
  async (id, { rejectWithValue }) => {
    const response = await userApi.getUserActivity(id);
    if (response.success) {
      return { id, activities: response.data };
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createUserNotification = createAsyncThunk(
  "users/createNotification",
  async (notificationData, { rejectWithValue }) => {
    const response = await userApi.createUserNotification(notificationData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchUserNotifications = createAsyncThunk(
  "users/fetchNotifications",
  async (id, { rejectWithValue }) => {
    const response = await userApi.getUserNotifications(id);
    if (response.success) {
      return { id, notifications: response.data };
    } else {
      return rejectWithValue(response.error);
    }
  }
);

// Slice

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
    clearUserState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Users
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User By ID
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Patch User
      .addCase(patchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = {
            ...state.users[index],
            ...action.payload,
          };
        }
      })
      .addCase(patchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User Status
      .addCase(fetchUserStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.userStatus = action.payload;
      })
      .addCase(fetchUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Current User
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Current User
      .addCase(updateCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Search Users
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Bulk Create Users
      .addCase(bulkCreateUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bulkCreateUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, ...action.payload];
      })
      .addCase(bulkCreateUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Assign Role to User
      .addCase(assignRoleToUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignRoleToUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, role } = action.payload;
        const user = state.users.find((u) => u.id === userId);
        if (user) {
          user.roles = user.roles ? [...user.roles, role] : [role];
        }
      })
      .addCase(assignRoleToUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Revoke Role from User
      .addCase(revokeRoleFromUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(revokeRoleFromUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, role } = action.payload;
        const user = state.users.find((u) => u.id === userId);
        if (user && user.roles) {
          user.roles = user.roles.filter((r) => r !== role);
        }
      })
      .addCase(revokeRoleFromUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User Roles
      .addCase(fetchUserRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        const { id, roles } = action.payload;
        const user = state.users.find((u) => u.id === id);
        if (user) {
          user.roles = roles;
        }
      })
      .addCase(fetchUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User Activity
      .addCase(fetchUserActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload.activities;
      })
      .addCase(fetchUserActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create User Notification
      .addCase(createUserNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications.push(action.payload);
      })
      .addCase(createUserNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User Notifications
      .addCase(fetchUserNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload.notifications;
      })
      .addCase(fetchUserNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserError, clearUserState } = userSlice.actions;

export default userSlice.reducer;
