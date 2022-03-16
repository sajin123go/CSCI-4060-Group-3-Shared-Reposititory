import React, {useState, useEffect} from 'react';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/nafa-logo.png';
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
  Icon,
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

  
  return (
      <>
      <IconContext.Provider value = {{ color : '#fff'}}>
        <Nav scrollNav={scrollNav}>
              <NavbarContainer>
              <Icon src={logo} onClick={toggleHome} scrollNav={scrollNav}/>

                {/* <NavLogo to='/' onClick={toggleHome}>
                    Nafa
                </NavLogo> */}
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
                    <NavLinks to='signup' smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>Sign Up</NavLinks>
                  </NavItem> 
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/user'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
  );
};

export default Navbar;