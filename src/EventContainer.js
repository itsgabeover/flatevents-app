import EventCard from "./EventCard"

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
          <option value="Career">Career</option>
          <option value="Meetups">Meetups</option>
          <option value="Study Groups">Study Groups</option>
          <option value="Community">Community</option>
          <option value="Networking">Networking</option>
        </select>
      {eachCard}
    </div>
  )
}

export default EventContainer