import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import LoginApp from "./components/login-register/LoginApp";
import AdminPage from "./pages/AdminPage";
import User from "./pages/UserPage";
import Account from "./pages/UserAccountDetail";
import Edit from "./pages/EditProfile";
import Mpayment from "./pages/Mpayment";
import UserEvent from "./pages/UserEvent";
import UserScholarship from "./pages/UserScholarship";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<LoginApp />} exact />
        <Route path="/adminPage" element={<AdminPage />} exact />
        <Route path="/user" element={<User />} exact />
        <Route path="/account" element={<Account />} exact />
        <Route path="/userEdit" element={<Edit />} exact />
        <Route path="/payment" element={<Mpayment />} exact />
        <Route path="/events" element={<UserEvent />} exact />
        <Route path="/scholarship" element={<UserScholarship />} exact />
      </Routes>
    </Router>
  );
}

export default App;
