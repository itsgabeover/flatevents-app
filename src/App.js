import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import NavBar from './NavBar'
import EventContainer from './EventContainer'
import EventDetails from './EventDetails'
import CalendarView from './CalendarView'
import AddEvent from './AddEvent'

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
      <BrowserRouter>
        <NavBar onAddEvent={handleAddEvent}/>
        <Route exact path="/"><EventContainer events={events}/></Route>
        <Route exact path="/details" component={EventDetails}/>
        <Route exact path="/addevent" component={AddEvent}/>
        <Route exact path="/calendar"><CalendarView events={events}/></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
