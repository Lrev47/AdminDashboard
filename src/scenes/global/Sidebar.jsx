import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // State for controlling collapse
  const [isPagesOpen, setIsPagesOpen] = useState(true);
  const [isChartsOpen, setIsChartsOpen] = useState(true);
  const [isDataOpen, setIsDataOpen] = useState(true);
  const [isToolsOpen, setIsToolsOpen] = useState(true);

  const handlePagesToggle = () => setIsPagesOpen(!isPagesOpen);
  const handleChartsToggle = () => setIsChartsOpen(!isChartsOpen);
  const handleDataToggle = () => setIsDataOpen(!isDataOpen);
  const handleToolsToggle = () => setIsToolsOpen(!isToolsOpen);

  // Getting user data from Redux store
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      console.log("User Data:", user);
    }
  }, [user]);

  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column", // Make the sidebar content stack vertically
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          display: "flex",
          flexDirection: "column",
          height: "100%", // Ensure the inner sidebar takes full height
          overflowY: "auto", // Enable scrolling if the content exceeds the height
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& ::-webkit-scrollbar": {
          width: "6px",
        },
        "& ::-webkit-scrollbar-thumb": {
          backgroundColor: "#4a4fda",
          borderRadius: "6px",
        },
        "& ::-webkit-scrollbar-track": {
          backgroundColor: `${colors.primary[400]}`,
        },
        scrollbarWidth: "thin",
        scrollbarColor: `6870fa ${colors.primary[400]}`,
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Life OS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user?.avatar || "../../assets/user.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user ? user.firstName : "Loading..."}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {user ? user.occupation : "Loading..."}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Collapsible Pages Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handlePagesToggle}
            >
              Pages
              <ExpandMoreIcon
                sx={{
                  transform: isPagesOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s",
                  marginLeft: "auto",
                }}
              />
            </Typography>
            <Collapse in={isPagesOpen}>
              <Item
                title="Agents"
                to="/AiAgents"
                icon={<SmartToyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Second Brain"
                to="/second-brain"
                icon={<PsychologyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Code Block"
                to="/code-block"
                icon={<CodeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>

            {/* Collapsible Charts Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleChartsToggle}
            >
              Charts
              <ExpandMoreIcon
                sx={{
                  transform: isChartsOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s",
                  marginLeft: "auto",
                }}
              />
            </Typography>
            <Collapse in={isChartsOpen}>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleToolsToggle} // New toggle for Tools
            >
              Tools
              <ExpandMoreIcon
                sx={{
                  transform: isToolsOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s",
                  marginLeft: "auto",
                }}
              />
            </Typography>
            <Collapse in={isToolsOpen}>
              {" "}
              {/* New collapsible section for Tools */}
              <Item
                title="Calculator"
                to="/calculator"
                icon={<CalculateOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Job Tracker"
                to="/job-tracker"
                icon={<BusinessCenterOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Notepad"
                to="/notepad"
                icon={<NoteOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Terminal"
                to="/terminal"
                icon={<TerminalOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>

            {/* Collapsible Data Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15px 0 5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleDataToggle}
            >
              Data
              <ExpandMoreIcon
                sx={{
                  transform: isDataOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s",
                  marginLeft: "auto",
                }}
              />
            </Typography>
            <Collapse in={isDataOpen}>
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
