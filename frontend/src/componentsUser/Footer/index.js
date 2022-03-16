import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import logo from '../../images/nafa-logo.png';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    Icon,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink 
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to = '/signin'>How it works </FooterLink>
                        <FooterLink to = '/signin'>Testimonials</FooterLink>
                        <FooterLink to = '/signin'>Careers</FooterLink>
                        <FooterLink to = '/signin'>Investors </FooterLink>
                        <FooterLink to = '/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                        <FooterLink to = '/'>Contact </FooterLink>
                        <FooterLink to = '/'>Support</FooterLink>
                        <FooterLink to = '/'>Destinatons</FooterLink>
                        <FooterLink to = '/'>Sponsorships </FooterLink>
                        <FooterLink to = '/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                        <FooterLink to = '/'>Submit Video </FooterLink>
                        <FooterLink to = '/'>Ambassadors</FooterLink>
                        <FooterLink to = '/'>Agency</FooterLink>
                        <FooterLink to = '/'>Influencer </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Social Media</FooterLinkTitle>
                        <FooterLink to = '/'>Instagram</FooterLink>
                        <FooterLink to = '/'>Facebook</FooterLink>
                        <FooterLink to = '/'>Youtube</FooterLink>
                        <FooterLink to = '/'>Twitter </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>

                    <Icon src={logo} onClick={toggleHome}/>

                    {/* <SocialLogo to='/' onClick={toggleHome}>
                        Nafa
                    </SocialLogo> */}
                    <WebsiteRights>
                        NAFA © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href = "/" target = "_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label="Instragram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
