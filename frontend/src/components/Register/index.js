import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../axios";
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

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [password, setPassword] = useState("");
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen);}
   



  function signinHandler(event) {
    axios
      .post("/register", {
        firstName,
        lastName,
        maidenName,
        email,
        birthdate,
        isAlumi,
        graduatedYear,
        membershipType,
        Address,
        phone,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  }

  
    

  return (
    <>
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <FormH1>Register your account</FormH1>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <FormLabel htmlFor="for">First Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Enter first name"
                      name="First Name"
                      onChange={(e) => setfirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <FormLabel htmlFor="for">Last Name</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Last name"
                      name="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <FormLabel htmlFor="for">Middle Name</FormLabel>
                  <div className="col-md-12">
                    <FormInput
                      type="text"
                      placeholder="Middle name"
                      name="Maiden Name"
                      onChange={(e) => setMaidenName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                      type="Email"
                      placeholder="Email address"
                      name="email_address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Password</FormLabel>
                    <FormInput
                      type="Password"
                      placeholder="Enter password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Date of Birth</FormLabel>
                    <FormInput
                      type="date"
                      placeholder="date of birth"
                      name="birthDate"
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Phone Number</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Phone Number"
                      name="Phone Number "
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Street Address</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Street Address"
                      name="Street Address"
                      onChange={(e) => setStreetAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">City</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="City"
                      name="City"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <FormLabel htmlFor="for">State</FormLabel>
                      <FormInput
                        type="text"
                        placeholder="State"
                        name="State"
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <FormLabel htmlFor="for">Zip Code</FormLabel>
                      <FormInput
                        type="text"
                        placeholder="Zip Code"
                        name="Zip Code"
                        onChange={(e) => setZip(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <FormLabel htmlFor="for">Country</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="Country"
                      name="Country"
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
              <FormButton
                type="submit"
                className="btn-primary btn"
                onClick={signinHandler}
              >
                Register
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
