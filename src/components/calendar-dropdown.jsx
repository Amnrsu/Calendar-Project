import React, { useRef } from 'react'
import FullCalendar from '@fullcalendar/react'

const CalendarDropdown = (e, calendarRef) => {
  const info = e.event.event
  const offsets = e.event.jsEvent.target.getBoundingClientRect();
 
  const saveChanges = () => {
    console.log("sadmop")
    const calendarApi = calendarRef.current.getApi()
    const event = calendarApi.getEventById(info.id)
    event.setProp("title", document.getElementById("titleInput").value)
  }

  return (
    <div id="event-popup-view" style={{position: 'absolute', top: `${offsets.top}px`, left: `${offsets.right}px`, zIndex: 999}}>
        <input id="titleInput" type="text" value={info.title} onChange={saveChanges} />
        <input id="color" type="color" value={info.color} />
        <div>
          <input id="startDate" type="date" value={info.start.toISOString().split('T')[0]} />
          <input id="startTime" type="time" value={info.start.toISOString().split('T')[1].split(':')[0] + ':' + info.start.toISOString().split('T')[1].split(':')[1]}/>
          to
          <input id="endDate" type="date" value={info.end ? info.end.toISOString().split('T')[0] : null} />
          <input id="endTime" type="time" value={info.end ? info.end.toISOString().split('T')[1].split(':')[0] + ':' + info.end.toISOString().split('T')[1].split(':')[1] : null} />
        </div>

        <textarea id="contentInput" placeholder="Write something here"></textarea>
        <button id="validate">Save</button>
        <button id="delete">Delete</button>
        <button id="cancel">Cancel</button>
      </div>
  )
}

export default CalendarDropdown