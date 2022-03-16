import React, {useState} from 'react';
import HeroSection from '../componentsUser/HeroSelections';
import Navbar from '../componentsUser/Navbar';
import Sidebar from '../componentsUser/Sidebar';
import InfoSection from '../componentsUser/InfoSections';
import {userObjOne, userObjTwo, userObjThree} from '../componentsUser/InfoSections/Data';
import Services from '../componentsUser/services';
import Footer from '../componentsUser/Footer';

const User = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
      <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle ={toggle}  />
        <HeroSection />
        <InfoSection {...userObjOne}/>
        <InfoSection {...userObjTwo}/>
        <Services />
        <InfoSection {...userObjThree}/>
        <Footer />
      </>      
  );
};

export default User;