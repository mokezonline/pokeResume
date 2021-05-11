import React, { useState } from 'react';
import styled from 'styled-components';

import { useModal } from './useModal';
import bgimg from '../../assets/bgimg.png';
import ResHighlights from './ResHighlights';
import ContactInfo from './ContactInfo';
import CoverLetter from './CoverLetter';
import EasterEgg from './EasterEgg';

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
  filter: blur(${
  ({ blur }) => {
    if (blur === true) {
      return 5;
    } else {
      return 0;
    }
  }
}px);
`;

const Greeting = styled.h1`
  position: absolute;
  width: 33vw;
  margin-top: 55vh;
  background-color: #f5efef;
  border-radius: 20px;
  padding: 2vh;
  font-size: 3.5vh;
`;

const Message = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 80vw;
  height: 90vh;
  background-color: #e1f8fa;
  z-index: 1;
  border-radius: 15px;
`;

const PokeButtonA = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 3.5vh;
  margin-top: 6.5vh;
  margin-right: 76vw;
  cursor: pointer;
`;

const PokeButtonB = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 3.5vh;
  margin-top: 21.3vh;
  margin-right: 56.3vw;
  cursor: pointer;
`;

const PokeButtonC = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 3.5vh;
  margin-top: 21.3vh;
  margin-right: 49.7vw;
  cursor: pointer;
`;

const PokeButtonD = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 3.5vh;
  margin-top: 21.3vh;
  margin-right: 43.1vw;
  cursor: pointer;
`;

const App = () => {
  const { show: showA, RenderModal: RenderModalA } = useModal();
  const { show: showB, RenderModal: RenderModalB } = useModal();
  const { show: showC, RenderModal: RenderModalC } = useModal();
  const { show: showD, RenderModal: RenderModalD } = useModal();

  const [blur, setBlur] = useState(false);

  const onOpen = () => {
    setBlur(true);
  }
  
  const onClose = () => {
    setBlur(false);
  }
  return (
    <MainWrapper>
      <Background src={bgimg} blur={blur}/>
      <Greeting>
        Hello Gather Town Team! My name is Zach and I am a passionate Frontend Engineer. 
        Here is an interactive resume that I've built in the spirit of Gather Town!
        Click on the Pokeballs to learn more about me and my work.
      </Greeting>
      <PokeButtonA onClick={() => {showA(); onOpen();}}></PokeButtonA>
      <PokeButtonB onClick={() => {showB(); onOpen();}}></PokeButtonB>
      <PokeButtonC onClick={() => {showC(); onOpen();}}></PokeButtonC>
      <PokeButtonD onClick={() => {showD(); onOpen();}}></PokeButtonD>
      <RenderModalA onClose={onClose}>
        <Message>
          <EasterEgg />
        </Message>
      </RenderModalA>
      <RenderModalB onClose={onClose}>
        <Message>
          <ContactInfo />
        </Message>
      </RenderModalB>
      <RenderModalC onClose={onClose}>
        <Message>
        <ResHighlights />
        </Message>
      </RenderModalC>
      <RenderModalD onClose={onClose}>
        <Message>
          <CoverLetter />
        </Message>
      </RenderModalD>
      <div id='modal-root' />
    </MainWrapper>
  );
}

export default App;