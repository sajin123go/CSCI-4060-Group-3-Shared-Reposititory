import React, { useState } from "react";
import Navbar from "../componentsUser/Navbar";
import Sidebar from "../componentsUser/Sidebar";
import Footer from "../componentsUser/Footer";

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Footer />
    </>
  );
};

export default EditProfile;
