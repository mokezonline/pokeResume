import React from 'react';
import styled from 'styled-components';

import pikachu from '../../assets/pikachu.png';

const EasterEggWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pikachu = styled.img`
  background-color: transparent;
  width: 20vw;
  height: 60vh;
`;

const Chicken = styled.p`
  font-size: 3.5vh;
`;

const FullResume = styled.a`
  font-size: 3.5vh;
  margin-bottom: 1vh;
`;

const EasterEgg = () => (
  <EasterEggWrapper>
    <h1>Easter Egg!</h1>
    <Chicken>
      I wanted to put one of my dance clips in here, but I chickened out!
    </Chicken>
    <FullResume href="https://docs.google.com/document/d/1nIvniyWpB_vjSdUlLIXq2vY3qA3VJmTcMOwmY-FqaA4/edit?usp=sharing" target="_blank">
      Click Here For Standard Resume
    </FullResume>
    <Pikachu src={pikachu}/>
  </EasterEggWrapper>
);

export default EasterEgg;