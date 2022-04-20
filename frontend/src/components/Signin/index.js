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
} from "./SigninElements";
import axios from "../../api/axios";
import React, { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Captcha from "../recaptcha/Captcha";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { navHomeObj } from "../../components/Navbar/NavData";

const LOGIN_URL = "/auth";

const SignIn = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecapthca = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
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
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Example@Example.com"
                id="username"
                ref={userRef}
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="password">Password:</FormLabel>
              <FormInput
                type="password"
                id="password"
                placeholder="Enter password"
                required
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <Captcha handleRecapthca={handleRecapthca} />

              <FormButton
                className="btn-primary btn"
                type="submit"
                disabled={!recaptchaVerified}
              >
                Sign In
              </FormButton>
            </Form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
