import {useHistory} from 'react-router-dom'

function EventCard({ event, setCurrentEvent, handleDeleteEvent }) {
  let history = useHistory()
  let eDate = event.date
  let formattedDate = ((new Date(eDate)).toUTCString()).substring(0,16)
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
      <p>Date: {formattedDate}</p>
      <span>
        <button className="card-button" onClick={showDetails}>See Details</button>
        <button className="card-button" onClick={handleDeleteClick}>Delete Event</button>
      </span>
    </div>
  )
} 



export default EventCard
