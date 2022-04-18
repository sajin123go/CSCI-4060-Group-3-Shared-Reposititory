import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { navUserObj } from "../components/Navbar/NavData";
import Services from "../components/services";
import { eventsComponenets } from "../components/services/ServicesData";

const UserEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <Services {...eventsComponenets} />
      <Footer />
    </>
  );
};

export default UserEvent;
