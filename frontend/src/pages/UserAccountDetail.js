import React, { useState } from "react";
import Navbar from "../componentsUser/Navbar";
import Sidebar from "../componentsUser/Sidebar";
//import InfoSection from "../userAccountComponents/InfoSections";
//import {
  //userObjOne
//} from "../userAccountComponents/InfoSections/Data";
import Footer from "../componentsUser/Footer";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <InfoSection {...userObjOne} /> */}
      <Footer />
    </>
  );
};

export default Account;
