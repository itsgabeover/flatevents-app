
function Search({ handleFilterChange }) {
  return (
    <div>
        <label for="locations">Choose Location:</label>
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="New York Campus">New York Campus</option>
          <option value="Chicago Campus">Chicago Campus</option>
          <option value="Denver Campus">Denver Campus</option>
          <option value="San Francisco Campus">San Francisco Campus</option>
          <option value="Seattle Campus">Seattle Campus</option>
          <option value="Online">Online</option>
        </select>
    </div>
  )
}

export default Search