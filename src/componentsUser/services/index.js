import React from 'react';
import Icon1 from '../../images/png-4.png';
import Icon2 from '../../images/png-2.png';
import Icon3 from '../../images/png-3.png';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return(
    <ServicesContainer id = "scholarship">
        <ServicesH1>Donate for our Tigers</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2> 2022 NAFA Scholarship</ServicesH2>
                <ServicesP>We are collecting this scholarship for Students that got hamper by Hurrican.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2> Basketball Supporter</ServicesH2>
                <ServicesP> Fundraiser program to Support our Basketball teams, Who Won National Basketball tournament. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Tigers Shirt</ServicesH2>
                <ServicesP>The profit from the sale of the shirt goes to the small kid event happening in NHS.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
