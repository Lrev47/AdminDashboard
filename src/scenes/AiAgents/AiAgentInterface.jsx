import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person"; // Icon for the user
import SmartToyIcon from "@mui/icons-material/SmartToy"; // Icon for the AI
import { tokens } from "../../theme";
import { useParams } from "react-router-dom";

const AiAgentInterface = () => {
  const { workflowName } = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const chatBoxRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom of the chat whenever a new message is added
  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom when messages change
  }, [messages]);

  // Handle sending messages
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, from: "User" }]);
      setInputValue("");
      // Simulate AI Agent response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `${workflowName} response`, from: "Agent" },
        ]);
      }, 1000);
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Typography variant="h4" gutterBottom align="center">
        {workflowName} Chat Interface
      </Typography>

      {/* Chat Messages Area */}
      <Box
        flexGrow={1}
        p="20px"
        bgcolor={colors.primary[400]}
        ref={chatBoxRef}
        display="flex"
        flexDirection="column"
        gap="20px"
        sx={{
          height: "calc(100vh - 130px)", // Reserve space for the input box
          overflowY: "auto", // Allow scrolling when messages overflow
          paddingBottom: "120px", // Extra space to prevent newest messages from being cut off
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent={message.from === "User" ? "flex-end" : "flex-start"}
          >
            {/* Display icons for AI and User */}
            {message.from === "User" ? (
              <>
                <Typography
                  sx={{
                    marginRight: "10px",
                    textAlign: "left",
                    color: colors.greenAccent[200], // Distinct color for User
                  }}
                >
                  {message.text}
                </Typography>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </>
            ) : (
              <>
                <Avatar>
                  <SmartToyIcon />
                </Avatar>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    textAlign: "left",
                    color: colors.blueAccent[200], // Distinct color for AI
                  }}
                >
                  {message.text}
                </Typography>
              </>
            )}
          </Box>
        ))}
      </Box>

      {/* Input Field and Send Button */}
      <Box
        display="flex"
        p="20px"
        bgcolor={colors.grey[800]} // Darker grey for input background
        position="fixed"
        bottom="0"
        width="100%"
      >
        <TextField
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          sx={{
            bgcolor: colors.grey[700], // Darker grey for text input area
            color: colors.grey[100], // Light color for text in input box
          }}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AiAgentInterface;
