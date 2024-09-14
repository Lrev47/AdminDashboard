// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { useMode } from "./useMode";
import Dashboard from "./scenes/dashboard";
import Breadcrumbs from "./components/breadCrumbs"; // Corrected capitalization
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import AiAgentInterface from "./scenes/AiAgents/AiAgentInterface";
import Form from "./scenes/form";
import Line from "./scenes/line";
import AiAgentsScene from "./scenes/AiAgents/AiAgentsScene";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import CodeBase from "./scenes/codebase/codebase";
import Calculator from "./scenes/Calculator/calculator";
import ProfilePage from "./scenes/ProfilePage/profilePage";
import SettingsPage from "./scenes/Settings/settings";
import Geography from "./scenes/geography";
import SecondBrainLandingPage from "./scenes/secondBrain/secondBrainLandingPage";
import FutureProjects from "./scenes/secondBrain/futureProjects";
import Wikis from "./scenes/secondBrain/wikis";
import Notes from "./scenes/secondBrain/notes";
import HowToGuides from "./scenes/secondBrain/howToGuides";
import References from "./scenes/secondBrain/references";
import Calendar from "./scenes/calendar/calendar";
import JobTracker from "./scenes/JobTracking/jobTracker";
import LogInSignUp from "./scenes/LogInSignUp/LogInSignUp";

function App() {
  const [theme] = useMode(); // Custom hook to manage MUI theme
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        display="flex"
        height="100vh"
        bgcolor={theme.palette.primary.main} // Set background color to primary
      >
        {/* Sidebar: Render only if authenticated */}
        {isAuthenticated && <Sidebar isSidebar={isSidebar} />}

        {/* Main Content Area */}
        <Box flexGrow={1} display="flex" flexDirection="column">
          {/* Topbar: Render only if authenticated */}
          {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}

          {/* Content and Breadcrumbs */}
          <Box flexGrow={1} overflow="auto">
            {/* Breadcrumbs: Render only if authenticated */}
            {isAuthenticated && <Breadcrumbs />}

            {/* Define Routes */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LogInSignUp />} />

              {/* Protected Routes */}
              {isAuthenticated ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />

                  {/* Second Brain Landing Page */}
                  <Route
                    path="/second-brain"
                    element={<SecondBrainLandingPage />}
                  />

                  {/* Independent full-page subroutes for Second Brain */}
                  <Route
                    path="/second-brain/future-projects"
                    element={<FutureProjects />}
                  />
                  <Route path="/second-brain/wikis" element={<Wikis />} />
                  <Route path="/second-brain/notes" element={<Notes />} />
                  <Route
                    path="/second-brain/how-to-guides"
                    element={<HowToGuides />}
                  />
                  <Route
                    path="/second-brain/references"
                    element={<References />}
                  />

                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/codebase" element={<CodeBase />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/invoices" element={<Invoices />} />

                  {/* AI Agents Routes */}
                  <Route path="/AiAgents" element={<AiAgentsScene />} />
                  <Route
                    path="/AiAgents/:workflowName"
                    element={<AiAgentInterface />}
                  />

                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/job-tracker" element={<JobTracker />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </>
              ) : (
                /* Fallback Route: Redirect to LogInSignUp if not authenticated */
                <Route path="*" element={<LogInSignUp />} />
              )}
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
