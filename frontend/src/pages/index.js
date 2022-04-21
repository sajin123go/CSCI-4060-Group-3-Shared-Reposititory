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
  homeObjFour,
} from "../components/InfoSections/Data";
import Services from "../components/services";
import Footer from "../components/Footer";
import { navHomeObj } from "../components/Navbar/NavData";
import { eventsComponents } from "../components/services/ServicesData";
import { scholarshipComponents } from "../components/services/ServicesData";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar {...navHomeObj} isOpen={isOpen} toggle={toggle} />
      <Navbar {...navHomeObj} toggle={toggle} />
      <HeroSection {...heroHomeObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...eventsComponents}/>
      <Services {...scholarshipComponents}/>
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
