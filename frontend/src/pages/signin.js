import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SignIn from "../components/Signin";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { navHomeObj } from "../components/Navbar/NavData";
import Footer from "../components/Footer";
//  import { Botton } from 'react-bootstrap';

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ScrollToTop />
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <SignIn />
      <Footer />
    </div>
  );
};

export default SigninPage;
