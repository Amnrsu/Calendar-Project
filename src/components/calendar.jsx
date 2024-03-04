import React, { useState } from 'react'
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import CalendarDropdown from './calendar-dropdown';

const CalendarComponent = () => {
  const calendarRef = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (info) => {
    const calendar = calendarRef.current.getApi()

    if (window.activePopup) {
      window.closePopup();
    } else {
      calendar.addEvent({
        id: uuidv4(),
        title: "My event",
        start: info.dateStr,
        extendedProps:{content:""}
      });
    }
  }

  const handleEventClick = (info) => {
    setSelectedEvent(info)
    setDropdownOpen(true)
  }

  return (
    <>
      <div class="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          events={JSON.parse(localStorage.getItem("calendarEvents")) || []}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
        {dropdownOpen}
        {dropdownOpen && selectedEvent &&
          <CalendarDropdown event={selectedEvent} calendarRef={calendarRef} />
        }
      </div>
    </>
  )
}

export default CalendarComponent;