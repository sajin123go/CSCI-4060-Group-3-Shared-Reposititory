import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick = {toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to = "about" onClick={toggle}>
                      About
                  </SidebarLink>
                  <SidebarLink to = "membership" onClick={toggle}>
                      Membership
                  </SidebarLink>
                  <SidebarLink to = "scholarship" onClick={toggle}>
                      Scholarship
                  </SidebarLink>
                  <SidebarLink to = "signup" onClick={toggle}>
                      Sign Up
                  </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/signin">
                      Sign In
                  </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
