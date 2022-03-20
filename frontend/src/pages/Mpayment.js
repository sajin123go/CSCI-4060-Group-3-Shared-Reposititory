import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../componentsUser/Sidebar";
import Footer from "../components/Footer";
import MemberPayment from "../userAccountComponents/MemberPayment";
import { navUserObj } from "../components/Navbar/NavData";

const Mpayment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <MemberPayment />
      <Footer />
    </>
  );
};

export default Mpayment;
