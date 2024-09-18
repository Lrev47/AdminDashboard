// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import themeReducer from "./features/themeSlice";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import jobTrackerReducer from "./features/jobTrackingSlice";

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  theme: themeReducer,
  jobTracker: jobTrackerReducer,
});

// Configure persistence settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "theme"], // Persist 'auth', 'user', and 'theme' slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducer
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
