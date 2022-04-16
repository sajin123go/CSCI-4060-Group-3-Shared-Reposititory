import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebars/Sidebar";
import Topbar from "./components/topbar/Topbar";
import AdminHome from "./pages/home/AdminHome";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import EventList from "./pages/eventList/EventList";
import Event from "./pages/event/Event";
import NewEvent from "./pages/newEvent/NewEvent";

function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<AdminHome />} exact />
          <Route path="/users" element={<UserList />} exact />
          <Route path="/user/:userId" element={<User />} exact />
          <Route path="/newUser" element={<NewUser />} exact />
          <Route path="/event" element={<EventList />} exact />
          <Route path="/event/:eventId" element={<Event />} exact />
          <Route path="/newevent" element={<NewEvent />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default Admin;
