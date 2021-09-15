import React from "react"
import EventCard from "./EventCard"

function EventDetails({key, event}) {

  const updateAttendence = (e) =>
  {
    e.preventDefault()
    console.log(e.target.fname.value)
    fetch(`http://localhost:3000/events/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
              attending: [...event.attending,
                {name: e.target.fname.value,
                  sirName  : e.target.lname.value, 
                  email: e.target.email.value
                }]
            })
      })
      .then (res => res.json())
      .then (updatedEvent => console.log(updatedEvent))
  }



  

return(
  
    <div>  
      <p>Event Details</p>
      <h1>{event.name}</h1>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.description}</p>
      <p>{event.location}</p>
 
      <a href="Zoom Link">{event.zoom} </a>
      <br/>
      <br/>
    <form onSubmit ={updateAttendence}>
      <label> First Name:
      <input type="text" name="fname" />
      </label> 
      <br/>
      <label>Sir Name
      <input type="text" name="lname" />
      </label>
      <br/>
      <label>Email Address
      <input type="text" name="email" />
      </label>   
        <input type="submit" value="Submit" />
      </form>
  
      <img src= {event.image} alt={event.name} width="350" height="300"/>
  </div>
  )
}

export default EventDetails
