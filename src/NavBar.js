import Home from "./Home"
import AddEvent from "./AddEvent"
import CalendarView from "./CalendarView"

function NavBar({ onAddEvent }) {
  return (
    <div>
      <h1>Flatevents</h1>
      <h2>Home | Add Event | Calendar View</h2>
      <Home />
      <AddEvent onAddEvent={onAddEvent}/>
      <CalendarView />
    </div>
  )
}

export default NavBar