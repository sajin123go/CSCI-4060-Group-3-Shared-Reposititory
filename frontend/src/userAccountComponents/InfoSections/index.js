import React from "react";
import { ButtonR } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  NavBtnLink,
  NavBtn,
} from "./infoElements";

const InfoSecton = ({
  lightBg,
  id,
  imgStart,
  flname,
  lightText,
  who,
  darkText,
  email,
  phone,
  address1,
  address2,
  city,
  state,
  zip,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{flname}</TopLine>
                <Heading lightText={lightText}>{who}</Heading>
                <Subtitle darkText={darkText}>{email}</Subtitle>
                <Subtitle darkText={darkText}>{phone}</Subtitle>
                <Subtitle darkText={darkText}>{address1}</Subtitle>
                <Subtitle darkText={darkText}>{address2}</Subtitle>
                <Subtitle darkText={darkText}>
                  {city + ", " + state + " " + zip}
                </Subtitle>
                <BtnWrap>
                  <ButtonR
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSecton;
