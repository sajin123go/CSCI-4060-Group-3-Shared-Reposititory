
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginApp from "./components/login-register/LoginApp";
<<<<<<< HEAD
=======
import AdminPage from './pages/AdminPage';
import User from './pages/UserPage';

>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path= "/" element={<Home />} exact />
        <Route path= "/signin" element = {<LoginApp />} exact />
=======
        <Route path= "/" element={<Home />}  exact />
        <Route path= "/signin" element = {<LoginApp />} exact />
        <Route path= "/adminPage" element = {<AdminPage />} exact />
        <Route path= "/user" element = {<User />} exact />
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
      </Routes>
    </Router>
  );
}

export default App;
