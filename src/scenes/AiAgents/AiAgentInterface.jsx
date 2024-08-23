import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { tokens } from "../../theme";

const AiAgentInterface = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Mock function to simulate sending a message to an AI agent
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, from: "User" }]);
      setInputValue("");
      // Simulate AI Agent response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Agent response", from: "Agent" },
        ]);
      }, 1000);
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Chat Messages Area */}
      <Box
        flexGrow={1}
        p="20px"
        bgcolor={colors.primary[400]}
        overflowY="auto"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        {messages.map((message, index) => (
          <Card
            key={index}
            sx={{
              alignSelf: message.from === "User" ? "flex-end" : "flex-start",
              backgroundColor:
                message.from === "User"
                  ? colors.greenAccent[500]
                  : colors.blueAccent[700],
            }}
          >
            <CardContent>
              <Typography color={colors.grey[100]}>{message.text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Input Field and Send Button */}
      <Box display="flex" p="20px" bgcolor={colors.primary[300]}>
        <TextField
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AiAgentInterface;
