import React, { useState } from "react";
import HeroSection from "../components/HeroSelections";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSections";
import { heroHomeObj } from "../components/HeroSelections/HeroData";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSections/Data";
import Services from "../components/services";
import Footer from "../components/Footer";
import { navHomeObj } from "../components/Navbar/NavData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <HeroSection {...heroHomeObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
