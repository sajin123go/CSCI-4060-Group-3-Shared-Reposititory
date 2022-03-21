import React, { useState } from "react";
import { ButtonS } from "../ButtonElement";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./ServicesElements";

const Cards = ({
  icon,
  heading,
  description,
  cButtonTo,
  cButtonLabel,
  lightText,
  cLightBg,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ServicesCard cLightBg={cLightBg}>
        <ServicesIcon src={icon} />
        <ServicesH2 lightText={lightText}> {heading}</ServicesH2>
        <ServicesP lightText={lightText}>{description}</ServicesP>
        <HeroBtnWrapper>
          <ButtonS
            to={cButtonTo}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            {cButtonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonS>
        </HeroBtnWrapper>
      </ServicesCard>
    </>
  );
};

export default Cards;
