import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import EventContainer from './EventContainer'
import EventDetails from './EventDetails'

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then(setEvents)  
  }, [])

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent])
  }

  return (
    <div>
    <NavBar onAddEvent={handleAddEvent}/>
    <EventContainer events={events}/>
    <EventDetails />
    </div>
  )
}

export default App;
