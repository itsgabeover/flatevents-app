import EventCard from "./EventCard";
import React, { useState } from 'react'

function EventContainer({ events, setCurrentEvent }) {
  const [filterBy, setFilterBy] = useState("All")

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  const eventsToDisplay = events.filter(event => {
    if (filterBy === "All") {
      return true
    } else {
      return event.location === filterBy
    }
  })

  const [detailsClicked, setDetailsClicked] = useState(false)
  
  const eachCard = eventsToDisplay.map(event => 
    <EventCard 
    setCurrentEvent={setCurrentEvent}
    detailsClicked = {detailsClicked} 
    setDetailsClicked ={setDetailsClicked}
      event={event}
      key={event.id}
    />
  )

  return (
    <div>
        <label for="locations">Choose Location:</label>
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="New York Campus">New York Campus</option>
          <option value="Chicago Campus">Chicago Campus</option>
          <option value="Denver Campus">Denver Campus</option>
          <option value="San Francisco Campus">San Francisco Campus</option>
          <option value="Seattle Campus">Seattle Campus</option>
          <option value="Online">Online</option>
        </select>
      {eachCard}
    </div>
  )
}

export default EventContainer