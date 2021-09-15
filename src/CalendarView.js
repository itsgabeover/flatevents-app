import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//Documentation for 
function CalendarView({events}) {

  console.log(events)
  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2021-09-18' },
          { title: 'event 2', date: '2021-09-02' }
        ]}
      />
  )
}

export default CalendarView