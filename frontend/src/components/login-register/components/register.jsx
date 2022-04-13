import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//import loginImg from "../../login.svg";
import axios from "../../../axios";
import ReCAPTCHA from "react-google-recaptcha";


// export class Register extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Register</div>
//         <div className="content">
//           <div className="image">
//             <img src="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png" alt=""/>
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="text" name="email" placeholder="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="text" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const Register = (props) => {
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        
      })
  };

  const getAllUsersHandler = ()=>{
    axios.get("/admin/allMembers").then(res=>console.log(res.data)).catch(err=>console.log(err))
  }
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img
            src="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png"
            
          />
        </div>
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
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={registerUserHandler}
        />
        <button type="button"  className="btn" onClick={registerUserHandler}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
