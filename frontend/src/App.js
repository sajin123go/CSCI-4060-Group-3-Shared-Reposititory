
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginApp from "./components/login-register/LoginApp";
import AdminPage from './pages/AdminPage';
import User from './pages/UserPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Home />}  exact />
        <Route path= "/signin" element = {<LoginApp />} exact />
        <Route path= "/adminPage" element = {<AdminPage />} exact />
        <Route path= "/user" element = {<User />} exact />
      </Routes>
    </Router>
  );
}

export default App;
