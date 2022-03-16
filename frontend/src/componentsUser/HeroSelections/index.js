import React, {useState} from 'react';
import ImageSlider from '../Imageslider/ImageSlider';
import { SliderData } from '../Imageslider/SliderData';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {

        setHover(!hover)
    }

  return (
    <HeroContainer id= 'home'>
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src= {Video} type='video/mp4' /> */}
            <ImageSlider slides={SliderData} />
        </HeroBg>
        <HeroContent>
            <HeroH1> Welcome to NAFA.</HeroH1>
            <HeroP>
                Be a Member to keep connecting with friends and family. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary = "true" dark = "true"
                smooth= {true} duration={500} spy={true} exact= 'true' offset={-80}>
                    Go to Account  {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
    
  );
};

export default HeroSection;
