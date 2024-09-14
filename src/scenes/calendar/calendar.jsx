// src/scenes/calendar/Calendar.jsx
import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme, // Import useTheme from Material-UI
} from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme(); // Initialize theme
  const [currentEvents, setCurrentEvents] = useState([]);

  // Define colors using theme.palette for consistency
  const colors = {
    primary: theme.palette.primary.main,
    accent: theme.palette.secondary.main,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    success: theme.palette.success.main,
    divider: theme.palette.divider,
  };

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={2.5}>
      {" "}
      {/* m={2.5} corresponds to 20px */}
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary} // Updated to use theme color
          p={1.875} // p={1.875} corresponds to 15px
          borderRadius={1} // borderRadius={1} corresponds to 8px
        >
          <Typography variant="h5" color={colors.textPrimary}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  bgcolor: colors.accent, // Updated to use theme color
                  my: 1.25, // my={1.25} corresponds to 10px
                  borderRadius: 0.25, // borderRadius: '2px'
                }}
              >
                <ListItemText
                  primary={
                    <Typography color={colors.textPrimary}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography color={colors.textSecondary}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          ml={1.875} // ml={1.875} corresponds to 15px
          sx={{
            "& .fc-toolbar-title": {
              color: colors.textPrimary,
            },
            "& .fc-event": {
              backgroundColor: colors.accent,
              borderColor: colors.accent,
            },
            "& .fc-button": {
              backgroundColor: colors.primary,
              color: colors.textPrimary,
            },
            "& .fc-button:hover": {
              backgroundColor: colors.accent,
            },
            "& .fc-daygrid-day-number": {
              color: colors.textPrimary,
            },
            "& .fc .fc-col-header-cell-cushion": {
              color: colors.textPrimary,
            },
          }} // Added custom styles for FullCalendar
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
