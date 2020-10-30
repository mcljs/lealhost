import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
import Icon1 from '../../images/discord.svg';
import Icon2 from '../../images/cs17.png';
import Icon3 from '../../images/mta.png';
import Icon4 from '../../images/ts_stacked_black.png';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nuestro Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>DISCORD(HOST BOTS)</ServicesH2>
          <ServicesP>
            Desde 500MB hasta 4GB. Aprovecha
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>COUNTER STRIKE 1.7</ServicesH2>
          <ServicesP>
            12 SLOTS = $1.38
          </ServicesP>
          <ServicesP>
            24 SLOTS = $2.30
          </ServicesP>
          <ServicesP>
            32 SLOTS = $3.50
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>MULTI THEFT AUTO</ServicesH2>
          <ServicesP>
          50 SLOTS+MYSQL = $1.50
          </ServicesP>
         <ServicesP>
          100 SLOTS+MYSQL = $2.50
          </ServicesP>
         <ServicesP>
          200 SLOTS+MYSQL = $3.50
          </ServicesP>
         <ServicesP>
          300 SLOTS+MYSQL = $4.50
          </ServicesP>

        </ServicesCard>

          <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>TS3</ServicesH2>
          <ServicesP>
           50 SLOTS = $2
          </ServicesP>
           <ServicesP>
           100 SLOTS = $4
          </ServicesP>
         <ServicesP>
           150 SLOTS = $6
          </ServicesP>
         <ServicesP>
           200 SLOTS = $8
          </ServicesP>

        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
