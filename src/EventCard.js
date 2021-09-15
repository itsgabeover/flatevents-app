import EventDetails from "./EventDetails"
import { useState} from 'react'
import {useHistory} from 'react-router-dom'

function EventCard({key, event, detailsClicked, setDetailsClicked, setCurrentEvent}) {
  // const [detailsClicked, setDetailsClicked] = useState(false)
   const [selectedNo, setSelectedNo] = useState(0)
    let history = useHistory()

    const showDetails = () => {
      setCurrentEvent(event)
      history.push("/details")
    }

      const eventBasics = () => {

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

    const seeDetails = (e) => {
      setSelectedNo(event.id)
      setDetailsClicked(!detailsClicked);
      console.log(selectedNo)
   
    }

    const eventDetails = (key, event)=>{
      return( 
      <div> 
             { (selectedNo === event.id) ? <EventDetails key={selectedNo} event={event}/> : null }
      </div>
      )
    }


 return(
   <div>

   { detailsClicked ? eventDetails(key,event) : eventBasics(key,event)} 
  
   </div>
   )
 }


export default EventCard
//https://flaviocopes.com/react-show-different-component-on-click/