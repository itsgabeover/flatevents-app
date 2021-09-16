import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//Documentation for 
function CalendarView({events}) {

  const newArray = events.map(event => ({ title: event.name, date:event.date}));
  console.log(newArray)
  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={newArray}
      />
  )
}

export default CalendarView