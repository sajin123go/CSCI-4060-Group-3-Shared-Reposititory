import "./newEvent.css";

export default function NewEvent() {
  return (
    <div className="newEvent">
      <h1 className="addEventTitle">New Event</h1>
      <form className="addEventForm">
        <div className="addEventItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addEventItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addEventItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addEventItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addEventButton">Create</button>
      </form>
    </div>
  );
}
