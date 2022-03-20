import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({
  isOpen,
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
  navItem5,
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={navLink1} onClick={toggle}>
            {navItem1}
          </SidebarLink>
          <SidebarLink to={navLink2} onClick={toggle}>
            {navItem2}
          </SidebarLink>
          <SidebarLink to={navLink3} onClick={toggle}>
            {navItem3}
          </SidebarLink>
          <SidebarLink to={navLink4} onClick={toggle}>
            {navItem4}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={navLink5}>{navItem5}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
