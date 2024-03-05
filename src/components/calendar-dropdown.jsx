import React, { useRef, useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CalendarDropdown = (props) => {
  const event = props.event.event

  const calendar = props.calendarRef.current.getApi()

  const [title, setTitle] = useState(event.title) || ""
  const [color, setColor] = useState(event.backgroundColor) || ""
  const [startDate, setStartDate] = useState(event.start.toISOString().split('T')[0]) || ""
  const [startTime, setStartTime] = useState(event.start.toISOString().split('T')[1].split(':')[0] + ':' + event.start.toISOString().split('T')[1].split(':')[1]) || ""
  const [endDate, setEndDate] = useState(event.end ? event.end.toISOString().split('T')[0] : null) || ""
  const [endTime, setEndTime] = useState(event.end ? event.end.toISOString().split('T')[1].split(':')[0] + ':' + event.end.toISOString().split('T')[1].split(':')[1] : null) || ""
  const [content, setContent] = useState(event.extendedProps.content) || ""

  useEffect(() => {
    setTitle(event.title)
    setColor(event.backgroundColor)
    setStartDate(event.start.toISOString().split('T')[0])
    setStartTime(event.start.toISOString().split('T')[1].split(':')[0] + ':' + event.start.toISOString().split('T')[1].split(':')[1])
    setEndDate(event.end ? event.end.toISOString().split('T')[0] : null)
    setEndTime(event.end ? event.end.toISOString().split('T')[1].split(':')[0] + ':' + event.end.toISOString().split('T')[1].split(':')[1] : null)
    setContent(event.extendedProps.content || "")
  }, [event])
 
  const saveChanges = () => {
    const events = calendar.getEvents()
    const eventToUpdate = events.find(e => e.id === event.id);
    eventToUpdate.setProp('title', title)
    eventToUpdate.setProp('color', color)
    eventToUpdate.setStart(startDate + 'T' + startTime)
    eventToUpdate.setEnd(endDate ? endDate + 'T' + endTime : null)
    eventToUpdate.setExtendedProp('content', content)
    
    localStorage.setItem("calendarEvents", JSON.stringify(calendar.getEvents()))
  }

  const deleteEvent = () => {
    event.remove()
    localStorage.setItem("calendarEvents", JSON.stringify(calendar.getEvents()))
  }

  return (
    <div id="event-popup-view" class="eventPopUpView">
        <input id="titleInput" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <div class="colorCont">
          <p>Colour:</p>
          <input id="color" type="color" value={color} onChange={(event) => setColor(event.target.value)} />
        </div>
        <div class="timeframeCont">
          <div class="startCont">
            <p>Start:</p>
            <input id="startDate" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            <input id="startTime" type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
          </div>
          <div class="endCont">
            <p>End:</p>
            <input id="endDate" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            <input id="endTime" type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
          </div>
        </div>

        <textarea id="contentInput" placeholder="Event description" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
        <button id="validate" onClick={saveChanges}>Save</button>
        <button id="delete" onClick={deleteEvent}>Delete</button>
      </div>
  )
}

export default CalendarDropdown