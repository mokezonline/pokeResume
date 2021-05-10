import React from 'react';
import styled from 'styled-components';

const CoverLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.p`
  font-size: 3.5vh;
  width: 70%;
  margin-bottom: 2vh;
  margin-top: 0;
`;

const CoverLetter = () => (
  <CoverLetterWrapper>
    <h1>Cover Letter</h1>
    <Content>Dear Gather Town Team,</Content>
    <Content>
      Please excuse me as I try to contain my excitement for the Frontend Engineer positions at Gather Town. 
      Not only is Gather Town a product that I can see myself avidly using, but I envision that helping build 
      this interactive world of gamified communication would provide a plethora of opportunities for me to think 
      creatively and utilize my knowledge of communication platforms, such as Discord and Zoom, to implement 
      services that add value to your team!
    </Content>
    <Content>
      I am a passionate Frontend Engineer, and I have a healthy obsession with gamified frontend development.  
      I am currently working on a React Native mobile app that encourages productivity by evolving a Pokemon-esque pet 
      on the completion of tasks.  My favorite thing about this project is creating ways to reflect daily life in a virtual
      environment.  For this project, I am leveraging flexbox and wrappers to keep my code organized, and I’m utilizing a 
      solid understanding of CSS and animations to make the app come to life.  I see a lot of crossover between Gather and 
      my current project, and I believe this will allow me to hit the ground running, if I were to join the team!
    </Content>
    <Content>
      When I’m not coding, I’m dancing, editing videos, or just hanging with friends on Discord.  When on Discord, there 
      are often times where I think it would be neat to have a certain feature.  As a Frontend Engineer at Gather, I would
      aim to apply this creativity to my development, and constantly ask the question “What could make this better?”
    </Content>
    <Content>Sincereley,</Content>
    <Content>Zachary Cush</Content>
  </CoverLetterWrapper>
);

export default CoverLetter;