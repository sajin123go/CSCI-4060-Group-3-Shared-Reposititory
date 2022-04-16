import "./newUser.css";
import {useState} from 'react';
import axios from '../../axios';
import { useNavigate } from "react-router-dom";


export default function NewUser() {
  const navigate = useNavigate(); 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUserHandler = () => { 
    axios
      //.post("/register", {token,firstName,lastName, email, password })
      .post("/member/register", {firstName,lastName, email, password })
      .then((res) => {
        console.log(res);
        navigate("/users");

      })
      .catch((err) => {
        console.log(err);
        
      })
  };


  return (
    <div className="base-container" >
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">FirstName</label>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">lastName</label>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button"  className="btn" onClick={registerUserHandler}>
          Register
        </button>
      </div>
    </div>
  );
}
