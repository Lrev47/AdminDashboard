import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import databaseReducer from "./features/databaseQueriesSlice";
import environmentReducer from "./features/environmentSlice";
import externalServiceReducer from "./features/externalServiceSlice";
import financeReducer from "./features/financeSlice";
import imageReducer from "./features/imagesSlice";
import mockDataReducer from "./features/mockDataSlice";
import notificationReducer from "./features/notificationsSlice";
import permissionReducer from "./features/permissionsSlice";
import projectReducer from "./features/projectSlice";
import settingsReducer from "./features/settingsSlice";
import testingAndDebuggingReducer from "./features/testingDebuggingSlice";
import versionControlReducer from "./features/versionControlSlice";
import jobTrackerReducer from "./features/jobTrackingSlice";

// Combine all reducers into one

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  database: databaseReducer,
  environment: environmentReducer,
  externalService: externalServiceReducer,
  finance: financeReducer,
  image: imageReducer,
  mockData: mockDataReducer,
  notification: notificationReducer,
  permission: permissionReducer,
  project: projectReducer,
  settings: settingsReducer,
  testingAndDebugging: testingAndDebuggingReducer,
  versionControl: versionControlReducer,
  jobTracker: jobTrackerReducer,
});

// Configure persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "settings"], // Only persist specific slices of the state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor to manage the persistence
export const persistor = persistStore(store);

export default store;
