import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUserData } from "./authenticationService";
import Home from "./pages";
import SigninPage from "./pages/signin";
import RegisterPage from "./pages/register";
import PageNotFound from "./pages/404/404Page";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Account from "./pages/UserAccountDetail";
import Edit from "./pages/EditProfile";
import Mpayment from "./pages/Mpayment";
import UserEvent from "./pages/UserEvent";
import UserScholarship from "./pages/UserScholarship";

// import Sidebar from "./components/Sidebars/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import AdminHome from "./pages/home/AdminHome";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import EventList from "./pages/eventList/EventList";
// import Event from "./pages/event/Event";
// import NewEvent from "./pages/newEvent/NewEvent";

function App() {
  const token = localStorage.getItem("USER_KEY");
  const [userData, setUserData] = useState({});
  const notLoggedIn = {
    role: "Na",
  };

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setUserData(response.data);
      })
      .catch((e) => {
        localStorage.clear();
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="*" exact element={<PageNotFound />} />
        {/*<Route path="/user" element={<UserPage />} exact />
        <Route path="/account" element={<Account />} exact />
        <Route path="/userEdit" element={<Edit />} exact />
        <Route path="/payment" element={<Mpayment />} exact />
        <Route path="/events" element={<UserEvent />} exact />
        <Route path="/scholarship" element={<UserScholarship />} exact />
  <Route path="/" element={<Home />}  />*/}
      </Routes>

      {/* <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<AdminHome />} exact />
          <Route path="/users" element={<UserList />} exact />
          <Route path="/user/:userId" element={<User />} exact />
          <Route path="/newUser" element={<NewUser />} exact />
          <Route path="/events" element={<EventList />} exact />
          <Route path="/event/:eventId" element={<Event />} exact />
          <Route path="/newevent" element={<NewEvent />} exact />
        </Routes>
      </div> */}

    </Router>
  );
}

export default App;
