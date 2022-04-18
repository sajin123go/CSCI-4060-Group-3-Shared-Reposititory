import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  PersonAdd
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Members
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Add User
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Send E-mail
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Finacials and Events</h3>
          <ul className="sidebarList">
            <Link to="/event" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Events
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Scholarships
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                New Members
              </li>
            </Link>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
