import React from 'react';
import styled from 'styled-components';

import bgimg from '../../assets/bgimg.png';
import { useModal } from './useModal';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Background = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: -1;
`;

const Greeting = styled.h1`
  position: absolute;
  width: 33vw;
  margin-top: 55vh;
  background-color: #f5efef;
  border-radius: 20px;
  padding: 2vh;
`;

const App = () => {
  const { show, RenderModal } = useModal();

  return (
    <MainWrapper>
      <Background src={bgimg} />
      <Greeting>
        Hello Gather Town Team! My name is Zach and I am a passionate Frontend Engineer! 
        Here is an interactive resume that I've built. 
        Click on the Pokeballs to learn more about me!
      </Greeting>
      <button onClick={show}>bleh</button>
      <RenderModal>
        <p>blah blah</p>
      </RenderModal>
      <div id='modal-root' />
    </MainWrapper>
  );
}

export default App;