// AdvancedCalculator.jsx
import React, { useState } from "react";
import { evaluate } from "mathjs";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  TextField,
} from "@mui/material";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input).toString()); // Replaces eval with evaluate from mathjs
    } catch (error) {
      setResult("Error");
    }
  };
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  const advancedButtons = [
    ["sin", "cos", "tan", "√"],
    ["^", "log", "ln", "π"],
    ["(", ")", "e", "C"],
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Advanced Calculator
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        placeholder="0"
        InputProps={{ readOnly: true }}
        sx={{ mb: 2, fontSize: "1.5rem" }}
      />
      <TextField
        variant="outlined"
        fullWidth
        value={result}
        placeholder="Result"
        InputProps={{ readOnly: true }}
        sx={{ mb: 2, fontSize: "1.5rem" }}
      />

      {/* Basic Buttons */}
      <Grid container spacing={2}>
        {buttons.map((row, rowIndex) => (
          <Grid key={rowIndex} item xs={3}>
            {row.map((buttonValue) => (
              <Button
                key={buttonValue}
                variant="contained"
                fullWidth
                sx={{ mb: 1 }}
                onClick={() =>
                  buttonValue === "="
                    ? handleCalculate()
                    : handleInput(buttonValue)
                }
              >
                {buttonValue}
              </Button>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Advanced Buttons */}
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Advanced Functions
      </Typography>
      <Grid container spacing={2}>
        {advancedButtons.map((row, rowIndex) => (
          <Grid key={rowIndex} item xs={3}>
            {row.map((buttonValue) => (
              <Button
                key={buttonValue}
                variant="contained"
                fullWidth
                sx={{ mb: 1 }}
                onClick={() => {
                  if (buttonValue === "C") handleClear();
                  else handleInput(buttonValue);
                }}
              >
                {buttonValue}
              </Button>
            ))}
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          fullWidth
        >
          Delete Last
        </Button>
      </Box>
    </Container>
  );
};

export default Calculator;
