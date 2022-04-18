import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { navUserObj } from "../components/Navbar/NavData";
import Services from "../components/services";
import { scholarshipComponents } from "../components/services/ServicesData";
import axios from "../axios";

const UserScholarship = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scholarship,setScholarship]= useState();
  useEffect(() => {
    const dummyArray = [];
  // Update the document title using the browser API
  axios.get("/scholarship/all").then(
    res=>{
    res.data.map(scholarship=>dummyArray.push({id:scholarship.scholarshipId,...scholarship}))
    setScholarship(dummyArray);
  }
    ).catch(err=>console.log(err));
});

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navUserObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navUserObj} toggle={toggle} />
      <Services {...scholarshipComponents} />
      <Footer />
    </>
  );
};

export default UserScholarship;
