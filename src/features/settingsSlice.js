import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsApi from "../api/settings";

const initialState = {
  settings: [],
  setting: null,
  categories: [],
  preferences: {},
  notificationSettings: {},
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllSettings = createAsyncThunk(
  "settings/fetchAllSettings",
  async (_, { rejectWithValue }) => {
    const response = await settingsApi.getAllSettings();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchSettingById = createAsyncThunk(
  "settings/fetchSettingById",
  async (id, { rejectWithValue }) => {
    const response = await settingsApi.getSetting(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewSetting = createAsyncThunk(
  "settings/createNewSetting",
  async (settingData, { rejectWithValue }) => {
    const response = await settingsApi.createSetting(settingData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateSettingById = createAsyncThunk(
  "settings/updateSettingById",
  async ({ id, settingData }, { rejectWithValue }) => {
    const response = await settingsApi.updateSetting(id, settingData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteSettingById = createAsyncThunk(
  "settings/deleteSettingById",
  async (id, { rejectWithValue }) => {
    const response = await settingsApi.deleteSetting(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "settings/fetchCategories",
  async (_, { rejectWithValue }) => {
    const response = await settingsApi.getCategories();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateCategoryById = createAsyncThunk(
  "settings/updateCategoryById",
  async ({ id, categoryData }, { rejectWithValue }) => {
    const response = await settingsApi.updateCategory(id, categoryData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchPreferences = createAsyncThunk(
  "settings/fetchPreferences",
  async (_, { rejectWithValue }) => {
    const response = await settingsApi.getPreferences();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updatePreferences = createAsyncThunk(
  "settings/updatePreferences",
  async (preferencesData, { rejectWithValue }) => {
    const response = await settingsApi.updatePreferences(preferencesData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchNotificationSettings = createAsyncThunk(
  "settings/fetchNotificationSettings",
  async (_, { rejectWithValue }) => {
    const response = await settingsApi.getNotificationSettings();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateNotificationSettings = createAsyncThunk(
  "settings/updateNotificationSettings",
  async (notificationSettingsData, { rejectWithValue }) => {
    const response = await settingsApi.updateNotificationSettings(
      notificationSettingsData
    );
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const resetAllSettings = createAsyncThunk(
  "settings/resetAllSettings",
  async (_, { rejectWithValue }) => {
    const response = await settingsApi.resetSettings();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchAllSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSettingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSettingById.fulfilled, (state, action) => {
        state.loading = false;
        state.setting = action.payload;
      })
      .addCase(fetchSettingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewSetting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewSetting.fulfilled, (state, action) => {
        state.loading = false;
        state.settings.push(action.payload);
      })
      .addCase(createNewSetting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateSettingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSettingById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.settings.findIndex(
          (setting) => setting.id === action.payload.id
        );
        if (index !== -1) {
          state.settings[index] = action.payload;
        }
      })
      .addCase(updateSettingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSettingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSettingById.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = state.settings.filter(
          (setting) => setting.id !== action.meta.arg
        );
      })
      .addCase(deleteSettingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPreferences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPreferences.fulfilled, (state, action) => {
        state.loading = false;
        state.preferences = action.payload;
      })
      .addCase(fetchPreferences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePreferences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePreferences.fulfilled, (state, action) => {
        state.loading = false;
        state.preferences = action.payload;
      })
      .addCase(updatePreferences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationSettings = action.payload;
      })
      .addCase(fetchNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationSettings = action.payload;
      })
      .addCase(updateNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetAllSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetAllSettings.fulfilled, (state) => {
        state.loading = false;
        state.settings = [];
        state.preferences = {};
        state.notificationSettings = {};
      })
      .addCase(resetAllSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default settingsSlice.reducer;
