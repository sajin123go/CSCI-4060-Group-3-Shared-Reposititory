import { Link } from "react-router-dom";
import "./event.css";
import Chart from "../../components/chart/Chart"
import {eventData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Event() {
  return (
    <div className="event">
      <div className="eventTitleContainer">
        <h1 className="eventTitle">Event</h1>
        <Link to="/newevent">
          <button className="eventAddButton">Create</button>
        </Link>
      </div>
      <div className="eventTop">
          <div className="eventTopLeft">
              <Chart data={eventData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="eventTopRight">
              <div className="eventInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="eventInfoImg" />
                  <span className="eventName">Apple Airpods</span>
              </div>
              <div className="eventInfoBottom">
                  <div className="eventInfoItem">
                      <span className="eventInfoKey">id:</span>
                      <span className="eventInfoValue">123</span>
                  </div>
                  <div className="eventInfoItem">
                      <span className="eventInfoKey">sales:</span>
                      <span className="eventInfoValue">5123</span>
                  </div>
                  <div className="eventInfoItem">
                      <span className="eventInfoKey">active:</span>
                      <span className="eventInfoValue">yes</span>
                  </div>
                  <div className="eventInfoItem">
                      <span className="eventInfoKey">in stock:</span>
                      <span className="eventInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="eventBottom">
          <form className="eventForm">
              <div className="eventFormLeft">
                  <label>Event Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="eventFormRight">
                  <div className="eventUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="eventUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="eventButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
