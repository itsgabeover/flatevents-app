
function EventCard({ event }) {
  return (
    <div className="card">
     <h2>{event.name}</h2>
     {/* <img src={event.image} alt={event.name} /> */}
     <p>Location: {event.location}</p>
     <p>Date: {event.date}</p>
     <span>
      <button>See Details</button>
      <button>Delete Event</button>
     </span>
    </div>
  )
}

export default EventCard
