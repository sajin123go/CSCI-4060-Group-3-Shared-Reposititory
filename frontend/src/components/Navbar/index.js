import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import logo from "../../images/nafa-logo.png";
import { animateScroll as scroll } from "react-scroll";

import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  NavBtn,
  Icon,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({
  toggle,
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navLink1,
  navLink2,
  navLink3,
  navLink4,
  navLink5,
  navLink6,
  navItem5,
  navItem6,
}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Icon src={logo} onClick={toggleHome} scrollNav={scrollNav} />

            {/* <NavLogo to='/' onClick={toggleHome}>
                    Nafa
                </NavLogo> */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to={navLink1}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {navItem1}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={navLink2}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {navItem2}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={navLink3}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                > 
                  {navItem3}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={navLink4}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {navItem4}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinksR
                  to={navLink5}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {navItem5}
                </NavLinksR>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to={navLink6}> {navItem6}</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
