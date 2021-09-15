import EventCard from "./EventCard";
import React, { useState, useEffect } from 'react'

function EventContainer({ events }) {
  const [detailsClicked, setDetailsClicked] = useState(false)

  
  const eachCard = events.map(event => 
    <EventCard 
    detailsClicked = {detailsClicked} 
    setDetailsClicked ={setDetailsClicked}
      event={event}
      key={event.id}
    />
  )

  return (
    <div>
       
      
      {eachCard}
    </div>
  )
}

export default EventContainer