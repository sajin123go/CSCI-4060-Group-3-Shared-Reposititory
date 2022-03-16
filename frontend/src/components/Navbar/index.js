import React, {useState, useEffect} from 'react';
import { IconContext } from 'react-icons/lib';
<<<<<<< HEAD
=======
import logo from '../../images/nafa-logo.png';
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
import {animateScroll as scroll} from 'react-scroll';

import {FaBars} from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
<<<<<<< HEAD
=======
  Icon,
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
  NavBtnLink
   
} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
<<<<<<< HEAD
=======

  
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
  return (
      <>
      <IconContext.Provider value = {{ color : '#fff'}}>
        <Nav scrollNav={scrollNav}>
<<<<<<< HEAD
            <NavbarContainer>

                <NavLogo to='/' onClick={toggleHome}>
                    Nafa
                </NavLogo>
=======
              <NavbarContainer>
              <Icon src={logo} onClick={toggleHome} scrollNav={scrollNav}/>

                {/* <NavLogo to='/' onClick={toggleHome}>
                    Nafa
                </NavLogo> */}
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
                <MobileIcon onClick={toggle}> 
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about' smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>About</NavLinks>
                  </NavItem> 
                  <NavItem>
                    <NavLinks to='membership' smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>Membership</NavLinks>
                  </NavItem> 
                  <NavItem>
                    <NavLinks to='scholarship' smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>Scholarship</NavLinks>
                  </NavItem> 
                  <NavItem>
<<<<<<< HEAD
                    <NavLinks to="LoginApp" smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>Sign Up</NavLinks>
                  </NavItem> 
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='signin'>Sign In</NavBtnLink>
=======
                    <NavLinks to='signup' smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>Sign Up</NavLinks>
                  </NavItem> 
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/user'>Sign In</NavBtnLink>
>>>>>>> e0c230ad3e95ad75dd1173857c2f6173f7bd243e
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
  );
};

export default Navbar;
