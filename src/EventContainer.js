import EventCard from "./EventCard";
import React, { useState, useEffect } from 'react'

function EventContainer({ events }) {
  const eachCard = events.map(event => 
    <EventCard 
      event={event}
      key={event.id}
    />
  )

  return (
    <div>
        <label for ="categories">Choose Location:</label>
        <select name="filter">
          <option value="All">All</option>
          <option value="newyork">New York Campus</option>
          <option value="chicago">Chicago Campus</option>
          <option value="denver">Denver Campus</option>
          <option value="sanfrancisco">San Francisco Campus</option>
          <option value="seattle">Seattle Campus</option>
          <option value="online">Online</option>
        </select>
      {eachCard}
    </div>
  )
}

export default EventContainer