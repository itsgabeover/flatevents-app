import React from "react"
import emailjs from 'emailjs-com';

function EventDetails({event}) {

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
      sendEmail(e)
      e.target.reset()
  }
  function sendEmail(e) {
    console.log('send e-mail function is invoked')
    e.preventDefault();
    emailjs.sendForm('service_9ysbp52', 'template_zar2r8q', e.target, 'user_5nAdsdOVhTMUsq7fIQgxH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Your attendance is confirmed')
  }
return(
    <div>  
      <div className="event-details">
        <h1>Event Details</h1>
        <h2>{event.name}</h2>
        <img src= {event.image} alt={event.name} width="350" height="300"/>
        <p>{event.description}</p>
        <p>Location: {event.location}</p>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <a href="Zoom Link">{event.zoom} </a>
        <p>*Enter your information below to attend!*</p>
      </div>

      <form onSubmit={updateAttendence} className="attendance-form">
        <label> First Name: </label>
        <input type="text" name="fname" className="attendance-input"/> 
        <label>Sir Name: </label>
        <input type="text" name="lname" className="attendance-input"/>
        <label>Email Address: </label> 
        <input type="text" name="email" className="attendance-input"/> 
        <input type="submit" value="Submit" className="attendance-button" />
      </form>
  </div>
  )
}

export default EventDetails
