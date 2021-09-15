import {useHistory} from 'react-router-dom'

function EventCard({event, setCurrentEvent}) {
    let history = useHistory()

    const showDetails = () => {
      setCurrentEvent(event)
      history.push("/details")
    }

              return (
              <div className="card">   
              <h2>{event.name}</h2>
              <p>Location: {event.location}</p>
              <p>Date: {event.date}</p>
              <span>
                <button onClick={showDetails}>See Details</button>
                <button>Delete Event</button>
              </span>
              </div>
            )
          } 



export default EventCard
