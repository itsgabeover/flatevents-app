import { useHistory } from "react-router-dom"

function NavBar() {
  let history = useHistory()

  return (
    <div className="navbar">
      <div>
        <h1><img className="navbar-logo" src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png"/>Flatevents</h1>
      </div>
        <h3 className="navbarh3" onClick={() => history.push("/")}>Home</h3>
        <h3 className="navbarh3" onClick={() => history.push("/addevent")}>Add Event</h3>
        <h3 className="navbarh3" onClick={() => history.push("/calendar")}>Calendar View</h3>
    </div>
  )
}

export default NavBar