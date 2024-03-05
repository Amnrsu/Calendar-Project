import React, { useState } from 'react'
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import CalendarDropdown from './calendar-dropdown';

const CalendarComponent = () => {
  const calendarRef = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (info) => {
    const calendar = calendarRef.current.getApi()

    if (window.activePopup) {
      setDropdownOpen(false)
    } else {
      calendar.addEvent({
        id: uuidv4(),
        title: "New event",
        color: "#715AB0",
        start: info.dateStr,
        extendedProps:{content:""}
      });
      localStorage.setItem("calendarEvents", JSON.stringify(calendar.getEvents()))
    }
  }

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault()
    setSelectedEvent(info)
    setDropdownOpen(true)
  }

  return (
    <>
      <h1 class="pageTitle">Calendar</h1>
      <p class="createPrompt">Create and select an event to start editing</p>
      <div class="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGrid, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          allDaySlot={false}
          events={JSON.parse(localStorage.getItem("calendarEvents")) || []}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth'
          }}
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