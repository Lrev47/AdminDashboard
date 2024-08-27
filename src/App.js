import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
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
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import LandingPage from "./scenes/landingPage/landingPage";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New authentication state

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box display="flex" height="100vh">
          {/* Render the sidebar and topbar only if authenticated */}
          {isAuthenticated && <Sidebar isSidebar={isSidebar} />}
          <Box flexGrow={1} display="flex" flexDirection="column">
            {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}
            <Box flexGrow={1} overflow="auto">
              <Routes>
                {/* Landing page is shown by default */}
                <Route path="/" element={<LandingPage />} />
                {/* Protected routes */}
                {isAuthenticated && (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/AiAgents" element={<AiAgentsScene />} />
                    <Route
                      path="/ai-news-research-team"
                      element={<AiAgentInterface />}
                    />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                  </>
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
