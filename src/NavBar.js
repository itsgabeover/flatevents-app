import { useHistory } from "react-router-dom"

function NavBar({ onAddEvent }) {
  let history = useHistory()
  function handleClick() {
    history.push("/addevent")
  }
  return (
    <div>
      <h1>Flatevents</h1>
      <span>
        <h2 onClick={() => history.push("/")} >Home | </h2>
        <h2 onClick={() => history.push("/addevent")}>Add Event | </h2>
        <h2 onClick={() => history.push("/calendar")}>Calendar View</h2>
      </span>
    </div>
  )
}

export default NavBar