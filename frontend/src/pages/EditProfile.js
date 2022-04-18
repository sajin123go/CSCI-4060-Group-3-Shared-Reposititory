import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import EditSections from "../components/EditSections";
import { navUserObj } from "../components/Navbar/NavData";

const Edit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj}toggle={toggle} />
      <EditSections />
      <Footer />
    </>
  );
};

export default Edit;
