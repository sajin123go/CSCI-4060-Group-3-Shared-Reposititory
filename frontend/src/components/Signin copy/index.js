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
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  authenticate,
  authFailure,
  authSuccess,
} from "../../redux/authActions";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../authenticationService";
import { Alert, Spinner } from "react-bootstrap";
import Captcha from "../recaptcha/Captcha";
import App from "../../App";

const SignIn = ({ loading, error, ...props }) => {
  const userRef = useRef();
  const errRef = useRef;

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (evt) => {
    evt.preventDefault();
    props.authenticate();

    userLogin(values)
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          props.setUser(response.data);

          navigate("/");
          window.location.reload();

          //props.setToken(localStorage.getItem('USER_KEY'));
        } else {
          props.loginFailure("Something Wrong!Please Try Again1");
        }
      })
      .catch((err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              console.log("401 status");
              props.loginFailure("Authentication Failed.Bad Credentials");
              break;
            default:
              props.loginFailure("Something Wrong!Please Try Again2");
          }
        } else {
          props.loginFailure("Something Wrong!Please Try Again3" + err);
        }
      });
    //console.log("Loading again",loading);
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("Loading ", loading);
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Nafa</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                placeholder="Enter password"
                name="password"
                required
                value={values.password}
                onChange={handleChange}
              />
              <Captcha />

              <FormButton
                type="submit"
                className="btn-primary btn"
                onClick={loginHandler}
              >
                Continue
              </FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  console.log("state ", auth);
  return {
    loading: auth.loading,
    error: auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: () => dispatch(authenticate()),
    setUser: (data) => dispatch(authSuccess(data)),
    loginFailure: (message) => dispatch(authFailure(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
