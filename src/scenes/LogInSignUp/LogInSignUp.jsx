import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  fetchUserProfile,
} from "../../features/authSlice"; // Importing actions from authSlice
import { login } from "../../api/authApi"; // Importing the login API function

const LogInSignUp = () => {
  // Local state for username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // useNavigate hook to navigate between routes
  const navigate = useNavigate();

  // Function to handle login when the user clicks the "Sign In" button
  const handleLogin = async () => {
    dispatch(loginStart()); // Dispatching loginStart action to indicate login process has started

    // Calling the login API with the entered username and password
    const result = await login(username, password);

    if (result.success) {
      // If login is successful, dispatch the loginSuccess action with user data and token
      dispatch(
        loginSuccess({ user: result.data.user, token: result.data.token })
      );
      localStorage.setItem("authToken", result.data.token); // Storing the token in localStorage
      dispatch(fetchUserProfile());
      navigate("/dashboard"); // Navigating to the dashboard route
    } else {
      // If login fails, dispatch the loginFailure action with the error message
      dispatch(loginFailure({ error: result.error }));
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box textAlign="center" p="20px">
        <Typography variant="h3" mb="20px">
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="h5" mb="20px">
          Please sign in or sign up to continue.
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Updating the username state on change
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Updating the password state on change
          fullWidth
          margin="normal"
        />
        <Box display="flex" justifyContent="center" gap="20px" mt="20px">
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Sign In
          </Button>
          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LogInSignUp;
