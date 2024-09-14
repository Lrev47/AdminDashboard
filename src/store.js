// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import themeReducer from "./features/themeSlice";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import jobTrackerReducer from "./features/jobTrackingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  theme: themeReducer, // Ensure themeReducer is included correctly
  jobTracker: jobTrackerReducer,
});

// Configure persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "theme"], // Ensure 'theme' is persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for Redux Persist
    }),
});

// Create persistor to manage the persistence
export const persistor = persistStore(store);

export default store;
