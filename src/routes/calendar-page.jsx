import React from 'react'
import CalendarComponent from '../components/calendar'
import CalendarDropdown from '../components/calendar-dropdown'
import SidebarCalendar from '../components/sidebar-calendar'
import '../styles/calendar-page.css'

const Calendar = () => {
  return (
    <>
      <SidebarCalendar />
      <CalendarComponent />
    </>
  )
}

export default Calendar