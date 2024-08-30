import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../features/authSlics";
import { login } from "../../api/authApi";

const LogInSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch(loginStart());
    const result = await login(username, password);
    if (result.success) {
      dispatch(
        loginSuccess({ user: result.data.user, token: result.data.token })
      );
      localStorage.setItem("authToken", result.data.token);
      navigate("/dashboard");
    } else {
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
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
