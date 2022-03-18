import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import LoginApp from "./components/login-register/LoginApp";
import AdminPage from "./pages/AdminPage";
import User from "./pages/UserPage";
import Account from "./pages/UserAccountDetail";
import Edit from "./pages/EditProfile";

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
      </Routes>
    </Router>
  );
}

export default App;
