import React, { useState } from "react";
import Navbar from "../componentsUser/Navbar";
import Sidebar from "../componentsUser/Sidebar";
import Footer from "../componentsUser/Footer";
import EditSections from "../userAccountComponents/EditSections";

const Edit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <EditSections />
      <Footer />
    </>
  );
};

export default Edit;
