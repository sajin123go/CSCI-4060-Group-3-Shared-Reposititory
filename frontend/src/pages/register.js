import React, { useState } from "react";
import Register from "../components/Register";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { navHomeObj } from "../components/Navbar/NavData";
import Footer from "../components/Footer";

const RegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <ScrollToTop />
      <Register />
      <Footer />
    </>
  );
};

export default RegisterPage;
