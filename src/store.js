// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import databaseReducer from "./features/databaseSlice";
import environmentReducer from "./features/environmentSlice";
import externalServiceReducer from "./features/externalServiceSlice";
import financeReducer from "./features/financeSlice";
import imageReducer from "./features/imageSlice";
import mockDataReducer from "./features/mockDataSlice";
import notificationReducer from "./features/notificationSlice";
import permissionReducer from "./features/permissionSlice";
import projectReducer from "./features/projectSlice";
import settingsReducer from "./features/settingsSlice";
import testingAndDebuggingReducer from "./features/testingAndDebuggingSlice";
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
