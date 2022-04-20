import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Captcha from "../recaptcha/Captcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import "./App.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { navHomeObj } from "../../components/Navbar/NavData";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./RegisterElements";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const navigate = useNavigate();

  const errRef = useRef();

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [middleName, setMiddleName] = useState("");

  const [pwd, setPwd] = useState("");

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isAlumi, setIsAlumni] = useState("");
  const [phone, setPhone] = useState("");
  const [graduatedYear, setGraduatedYear] = useState("");
  const [Address, setAddress] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [membershipType, setmembershipType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecapthca = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v2 = PWD_REGEX.test(pwd);
    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios
        .post("/register", {
          firstName,
          lastName,
          middleName,
          email,
          birthdate,
          isAlumi,
          graduatedYear,
          membershipType,
          Address,
          phone,
          pwd,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/signin");
        })
        .catch((err) => console.log(err));
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <p
                style={{ color: "red" }}
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <FormH1>Register your account</FormH1>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <FormLabel htmlFor="fName">First Name</FormLabel>
                    <FormInput
                      type="text"
                      id="fName"
                      placeholder="Enter first name"
                      onChange={(e) => setfirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <FormLabel htmlFor="lName">Last Name</FormLabel>
                    <FormInput
                      type="text"
                      id="lName"
                      placeholder="Last name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <FormLabel htmlFor="mName">Middle Name</FormLabel>
                  <div className="col-md-12">
                    <FormInput
                      type="text"
                      placeholder="Middle name"
                      id="mName"
                      onChange={(e) => setMiddleName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                      type="Email"
                      placeholder="Email address"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="password">
                      Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                    </FormLabel>
                    <FormInput
                      type="Password"
                      placeholder="Enter password"
                      id="password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      required
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <p
                      style={{ color: "red" }}
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  </div>

                  <div className="col-md-12">
                    <FormLabel htmlFor="confirm_pwd">
                      Confirm Password
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                    </FormLabel>
                    <FormInput
                      type="Password"
                      placeholder="Confirm password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      required
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    <p
                      style={{ color: "red" }}
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="birthDate">Date of Birth</FormLabel>
                    <FormInput
                      type="date"
                      placeholder="date of birth"
                      id="birthDate"
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Phone Number"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="address">Street Address</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Street Address"
                      id="address"
                      onChange={(e) => setStreetAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="city">City</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="City"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <FormLabel htmlFor="state">State</FormLabel>
                      <FormInput
                        type="text"
                        placeholder="State"
                        id="state"
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <FormLabel htmlFor="zip">Zip Code</FormLabel>
                      <FormInput
                        type="text"
                        placeholder="Zip Code"
                        id="zip"
                        onChange={(e) => setZip(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="country">Country</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Country"
                      id="country"
                      onChange={(e) =>
                        setAddress(
                          streetAddress +
                            ", " +
                            city +
                            ", " +
                            state +
                            ", " +
                            e.target.value +
                            " " +
                            streetAddress +
                            ", " +
                            city +
                            ", " +
                            state +
                            " " +
                            zip
                        )
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <Captcha handleRecapthca={handleRecapthca} />

              <FormButton
                type="submit"
                className="btn-primary btn"
                disabled={!validPwd || !validMatch || !recaptchaVerified}
              >
                Register
              </FormButton>
              <p style={{ color: "red" }}>
                Already registered?
                <br />
                <span className="line">
                  <Link to="/signin">Sign In</Link>
                </span>
              </p>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
