import React from 'react';
import styled from 'styled-components';

import bgimg from '../../assets/bgimg.png';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: -1;
`;

const Greeting = styled.h1`
  width: 38vw;
  margin-top: 55vh;
  background-color: #f5efef;
  border-radius: 20px;
  padding: 1vh;
`;

const App = () => {
  return (
    <MainWrapper>
      <Background src={bgimg} />
      <Greeting>Hello Gather Town Team! I'm Zach, and here is an interactive resume that I've built. Click on the Pokeballs to learn more about me!</Greeting>
    </MainWrapper>
  );
}

export default App;