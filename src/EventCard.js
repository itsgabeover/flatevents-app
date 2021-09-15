import {useHistory} from 'react-router-dom'

function EventCard({ event, setCurrentEvent, handleDeleteEvent }) {
  let history = useHistory()

  const showDetails = () => {
    setCurrentEvent(event)
    history.push("/details")
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/events/${event.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDeleteEvent(event))
  }

  return (
    <div className="card">   
      <h2>{event.name}</h2>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <span>
        <button onClick={showDetails}>See Details</button>
        <button onClick={handleDeleteClick}>Delete Event</button>
      </span>
    </div>
  )
} 



export default EventCard
