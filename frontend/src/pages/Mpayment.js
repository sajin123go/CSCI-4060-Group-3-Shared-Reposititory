import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MemberPayment from "../components/MemberPayment";
import { navUserObj } from "../components/Navbar/NavData";
import Services from "../components/services";
import { membershipComponents } from "../components/services/ServicesData";

const Mpayment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <Services {...membershipComponents}/>
      <Footer />
    </>
  );
};

export default Mpayment;
