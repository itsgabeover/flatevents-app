import EventCard from "./EventCard";
import React, { useState } from 'react'

function EventContainer({ events, setCurrentEvent, handleDeleteEvent }) {
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
  
  const eachCard = eventsToDisplay.map(event => 
    <EventCard 
    setCurrentEvent={setCurrentEvent}
    handleDeleteEvent={handleDeleteEvent}
      event={event}
      key={event.id}
    />
  )

  return (
    <div>
      <div className="location-select">
        <label for="locations">Choose Location: </label>
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="New York Campus">New York</option>
          <option value="Chicago Campus">Chicago</option>
          <option value="Denver Campus">Denver</option>
          <option value="San Francisco Campus">San Francisco</option>
          <option value="Seattle Campus">Seattle</option>
          <option value="Online">Online</option>
        </select>
      </div>
      {eachCard}
    </div>
  )
}

export default EventContainer