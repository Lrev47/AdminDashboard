// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
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

export const store = configureStore({
  reducer: {
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
  },
});

export default store;
