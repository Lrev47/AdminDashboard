// CodeSnippetPage.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { CopyAllOutlined, ExpandMore } from "@mui/icons-material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBase = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [topic, setTopic] = useState("");
  const [savedSnippets, setSavedSnippets] = useState([]);

  // Handle code input change
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  // Save the code snippet
  const handleSaveSnippet = () => {
    const newSnippet = {
      code,
      title,
      language,
      topic,
    };
    setSavedSnippets([...savedSnippets, newSnippet]);
    setCode("");
    setTitle("");
    setTopic("");
  };

  // Handle copy to clipboard
  const handleCopyToClipboard = (snippet) => {
    navigator.clipboard.writeText(snippet.code);
  };

  // Group snippets by topic
  const groupedSnippets = savedSnippets.reduce((acc, snippet) => {
    acc[snippet.topic] = acc[snippet.topic] || [];
    acc[snippet.topic].push(snippet);
    return acc;
  }, {});

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Code Snippet Manager
      </Typography>

      {/* Input for code snippet title */}
      <Box mt={2}>
        <TextField
          label="Snippet Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for the snippet"
        />
      </Box>

      {/* Input for topic */}
      <Box mt={2}>
        <TextField
          label="Topic (e.g., JavaScript, Python, CSS)"
          fullWidth
          variant="outlined"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter the topic"
        />
      </Box>

      {/* Code input area */}
      <Box mt={2}>
        <TextField
          label="Enter your code"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
        />
      </Box>

      {/* Language selector */}
      <Box mt={2}>
        <TextField
          label="Programming Language"
          fullWidth
          variant="outlined"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="e.g., javascript, python, css"
        />
      </Box>

      {/* Save button */}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSaveSnippet}>
          Save Snippet
        </Button>
      </Box>

      {/* Saved Snippets grouped by topic */}
      <Box mt={4}>
        <Typography variant="h5">Saved Snippets</Typography>
        {Object.keys(groupedSnippets).length === 0 ? (
          <Typography variant="body1" mt={2}>
            No snippets saved yet.
          </Typography>
        ) : (
          Object.keys(groupedSnippets).map((topic) => (
            <Box key={topic} mt={4}>
              <Typography variant="h6" gutterBottom>
                {topic}
              </Typography>
              <Grid container spacing={3}>
                {groupedSnippets[topic].map((snippet, index) => (
                  <Grid item xs={12} key={index}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>{snippet.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="body1">
                            {snippet.language}
                          </Typography>
                          <IconButton
                            onClick={() => handleCopyToClipboard(snippet)}
                          >
                            <CopyAllOutlined />
                          </IconButton>
                        </Box>
                        <SyntaxHighlighter
                          language={snippet.language}
                          style={darcula}
                          showLineNumbers
                        >
                          {snippet.code}
                        </SyntaxHighlighter>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default CodeBase;
