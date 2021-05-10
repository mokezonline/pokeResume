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

const EasterEgg = () => (
  <EasterEggWrapper>
    <h1>Easter Egg!</h1>
    <Chicken>
      I love to make creative projects, and I wanted to put a little dance clip in here, but I chickened out!
    </Chicken>
    <Pikachu src={pikachu}/>
  </EasterEggWrapper>
);

export default EasterEgg;