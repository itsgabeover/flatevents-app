import React from 'react'

function AddEvent({ onAddEvent }) {

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
        zoom: e.target.zoom.value,
        attending: [],
        image: ""
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
        <select name="category">
          <option value="career">Career</option>
          <option value="meetups">Meetups</option>
          <option value="studygroups">Study Groups</option>
          <option value="community">Community</option>
          <option value="networking">Networking</option>
        </select>
        <label>Location: </label>
        <select name="location">
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
        <label>Zoom: </label>
        <input type="text" name="zoom" placeholder="Zoom Link..." />
        <button>Add Event</button>
      </form>
    </div>
  )
}

export default AddEvent