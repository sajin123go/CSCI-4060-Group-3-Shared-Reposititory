import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/AccountInfoSections";
import { userObjOne } from "../components/AccountInfoSections/Data";
import Footer from "../components/Footer";
import { navUserObj } from "../components/Navbar/NavData";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <InfoSection {...userObjOne} />
      <Footer />
    </>
  );
};

export default Account;
