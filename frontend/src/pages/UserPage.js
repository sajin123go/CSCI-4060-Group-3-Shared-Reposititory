import React, { useState } from "react";
import HeroSection from "../components/HeroSelections";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSections";
import Services from "../components/services";
import Footer from "../components/Footer";
import EventsList from "../components/EventsList";
import { userHomeObj } from "../components/HeroSelections/HeroData";
import { navUserObj } from "../components/Navbar/NavData";
import {
  userAccountObj,
  userPaymentObj,
} from "../components/InfoSections/Data";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <HeroSection {...userHomeObj} />
      <InfoSection {...userAccountObj} />
      <EventsList />
      <Services />
      <InfoSection {...userPaymentObj} />
      <Footer />
    </>
  );
};

export default User;
