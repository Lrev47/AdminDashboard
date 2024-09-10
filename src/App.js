import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Breadcrumbs from "./components/breadCrumbs";
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
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box display="flex" height="100vh">
          {isAuthenticated && <Sidebar isSidebar={isSidebar} />}
          <Box flexGrow={1} display="flex" flexDirection="column">
            {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}
            <Box flexGrow={1} overflow="auto">
              {isAuthenticated && <Breadcrumbs />}
              <Routes>
                <Route path="/" element={<LogInSignUp />} />

                {/* Protected routes */}
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
                    {/* AI Agents Scene */}
                    <Route path="/AiAgents" element={<AiAgentsScene />} />
                    {/* Dynamic route for AI agent workflows */}
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
                  <Route path="*" element={<LogInSignUp />} />
                )}
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
