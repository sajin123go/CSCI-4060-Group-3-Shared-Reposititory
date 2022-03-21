import React, { useState } from "react";
import { ButtonS } from "../ButtonElement";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./ServicesElements";
import Cards from "./Cards";

const Services = ({
  id,
  heading,
  cardsData,
  buttonTo,
  buttonLable,
  lightBg,
  lightText,
  cLightBg,
}) => {
  const [hover, setHover] = useState(false);
  const [users, setUsers] = useState(cardsData);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ServicesContainer id={id} lightBg={lightBg}>
      <ServicesH1 lightText={lightText}>{heading}</ServicesH1>
      <ServicesWrapper>
        {users.map((user) => (
          <Cards
            icon={user.icon}
            heading={user.heading}
            description={user.description}
            lightText={lightText}
            cLightBg={cLightBg}
          />
        ))}
      </ServicesWrapper>
      <HeroBtnWrapper>
        <ButtonS
          to={buttonTo}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          {buttonLable} {hover ? <ArrowForward /> : <ArrowRight />}
        </ButtonS>
      </HeroBtnWrapper>
    </ServicesContainer>
  );
};

export default Services;
