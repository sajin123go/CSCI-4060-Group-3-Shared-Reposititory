import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import {useState,useEffect} from 'react';
import axios from '../../axios';

export default function User() {
const navigate = useNavigate();
const userId = window.location.pathname.split('/')[2];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
// Update the document title using the browser API
axios.get("/admin/member/"+userId).then(
  res=>{
    console.log(res.data);
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setEmail(res.data.email);
    setPassword(res.data.password);
}
  ).catch(err=>console.log(err));
},[]);


const updateUserHandler = () => { 
axios
//.post("/register", {token,firstName,lastName, email, password })
.put("/member/update", {memberId:userId,firstName,lastName, email, password })
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
    <div className="header">Edit</div>
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
      <button type="button"  className="btn" onClick={updateUserHandler}>
        Register
      </button>
    </div>
  </div>
);
}
