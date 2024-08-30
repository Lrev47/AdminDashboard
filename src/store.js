// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice"; // Import the new user reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer, // Add the user reducer here
    // Add other reducers here
  },
});

export default store;
