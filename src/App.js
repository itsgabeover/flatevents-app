import React, { useState, useEffect } from "react"
import NavBar from './NavBar'
import EventContainer from './Home'
import EventDetails from './EventDetails'

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then(eventData => console.log(eventData))
  }, [])

  return (
    <>
    <NavBar />
    <EventContainer />
    {/* <EventDetails /> */}
    </>
  )
}

export default App;
