import React, { useState } from "react";
import ImageSlider from "../Imageslider/ImageSlider";
import { SliderData } from "../Imageslider/SliderData";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({id, header1, header2, to, buttonLable}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id={id}>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src= {Video} type='video/mp4' /> */}
        <ImageSlider slides={SliderData} />
      </HeroBg>
      <HeroContent>
        <HeroH1>{header1}</HeroH1>
        <HeroP>{header2}</HeroP>
        <HeroBtnWrapper>
          <Button
            to={to}
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
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
