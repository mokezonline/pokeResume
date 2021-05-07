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
  width: 100vw;
  height: 100vh;
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

const Message = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 80vw;
  height: 90vh;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 15px;
`;

const PokeButton4 = styled.div`
  position: absolute;
  background-color: red;
  width: 2vw;
  height: 3vh;
  margin-top: 21.4vh;
  margin-right: 43.1vw;
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
      <PokeButton4 onClick={show}></PokeButton4>
      <RenderModal>
        <Message>
          <p>blah blah</p>
        </Message>
      </RenderModal>
      <div id='modal-root' />
    </MainWrapper>
  );
}

export default App;