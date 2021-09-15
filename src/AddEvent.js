import React, { useState } from 'react'

function AddEvent({ onAddEvent }) {
  const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/3/36/Careers_blackboard.jpg")
  const [location, setLocation] = useState("")

  function handleChangeImage(e) {
    setImage(e.target.value)
  }

  function handleLocationInput(e) {
   setLocation(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
        category: e.target.category.value,
        location: e.target.location.value,
        date: e.target.date.value,
        time: e.target.time.value,
        zoom: location === "Online" ? e.target.zoom.value : null,
        attending: [],
        image: image
      })
    })
    .then(res => res.json())
    .then(onAddEvent)
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" placeholder="Name..." />
        <label>Description: </label>
        <input type="text" name="description" placeholder="Description..." />
        <label>Category: </label>
        <select name="category" onChange={handleChangeImage}>
          <option value="https://upload.wikimedia.org/wikipedia/commons/3/36/Careers_blackboard.jpg">Career</option>
          <option value="https://www.codingame.com/blog/wp-content/uploads/2015/02/dev4fun-meetup.png">Meetups</option>
          <option value="https://abaforlawstudents.com/wp-content/uploads/2019/11/study-group.jpg">Study Groups</option>
          <option value="https://www.sailthru.com/content/uploads/2020/09/iStock-1202344480-1.jpg">Community</option>
          <option value="https://www.lenfestinstitute.org/wp-content/uploads/2020/08/Networking.jpg">Networking</option>
        </select>
        <label>Location: </label>
        <select name="location" value={location} onChange={handleLocationInput}>
          <option value="New York Campus">New York Campus</option>
          <option value="Chicago Campus">Chicago Campus</option>
          <option value="Denver Campus">Denver Campus</option>
          <option value="San Francisco Campus">San Francisco Campus</option>
          <option value="Seattle Campus">Seattle Campus</option>
          <option value="Online">Online</option>
        </select>
        <label>Date: </label>
        <input type="date" name="date" placeholder="Date..." />
        <label>Time: </label>
        <input type="text" name="time" placeholder="Time..." />
        {location === "Online" ? <><label>Zoom Link: </label><input type="text" name="zoom" placeholder="Zoom Link..." /></> : null}
        <button>Add Event</button>
      </form>
      <img src={image} alt="Category"/>
    </div>
  )
}

export default AddEvent


