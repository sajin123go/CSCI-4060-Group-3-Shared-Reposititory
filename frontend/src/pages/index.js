import React, {useState} from 'react';
import HeroSection from '../components/HeroSelections';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSections';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSections/Data';
import Services from '../components/services';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
      <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle ={toggle}  />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
      </>      
  );
};

export default Home;
