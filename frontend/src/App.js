import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages";
import SigninPage from "./pages/signin";
import RegisterPage from "./pages/register";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Account from "./pages/UserAccountDetail";
import Edit from "./pages/EditProfile";
import Mpayment from "./pages/Mpayment";
import UserEvent from "./pages/UserEvent";
import UserScholarship from "./pages/UserScholarship";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

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
  // const token = localStorage.getItem("USER_KEY");
  // const [userData, setUserData] = useState({});
  // const notLoggedIn = {
  //   role: "Na",
  // };

  // React.useEffect(() => {
  //   fetchUserData()
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((e) => {
  //       localStorage.clear();
  //     });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/user" element={<UserPage />} exact />
      <Route path="/account" element={<Account />} exact />
      <Route path="/userEdit" element={<Edit />} exact />

      {/* <Routes>
        <Route path="/" element={<Home />} exact />
        
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/user" element={<UserPage />} exact />
        <Route path="/account" element={<Account />} exact />
        <Route path="/userEdit" element={<Edit />} exact />
        <Route path="/payment" element={<Mpayment />} exact />
        <Route path="/events" element={<UserEvent />} exact />

        <Route path="/scholarship" element={<UserScholarship />} exact /> 


      </Routes> */}

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
    </Routes>
  );
}

export default App;
