import React from 'react';
import styled from 'styled-components';

import headshot from '../public/assets/Headshot.jpg';

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headshot = styled.img`
  position: absolute;
  width: 9vw;
  height: 25vh;
  border-radius: 50%;
  margin-top: 20vh;
  margin-left: -60vw;
  border: solid black;
  border-width: .2vw;
`;

const InfoBorder = styled.div`
  display: flex;
  width: 37vw;
  flex-direction: column;
  margin-top: 17vh;
  padding: 2vh;
  border: solid black;
  border-width: .2vw;
  border-radius: 5px;
  padding-bottom: 6vh;
  padding-left: 4vw;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 40vw;
  height: 3.7vh;
  justify-content: flex-start;
  margin-bottom: 1vh;
`;

const Description = styled.h2`
  font-size: 4vh;
  margin-right: 1vw;
`;

const Link = styled.a`
  font-size: 4vh;
  margin-top: 1.5vw;
`;

const ConnectMessage = styled.h2`
  font-size: 5vh;
  margin-top: 20vh;
`;

const ContactInfo = () => (
  <ContactInfoWrapper>
    <h1>Contact Info and Links</h1>
    <Headshot src={headshot} />
    <InfoBorder>
    <InfoWrapper>
      <Description>Phone -</Description>
      <Description>510 - 833 - 3923</Description>
    </InfoWrapper>
    <InfoWrapper>
      <Description>Email - </Description>
      <Description>zachcushonline@gmail.com</Description>
    </InfoWrapper>
    <InfoWrapper>
      <Description>LinkedIn - </Description>
      <Link href="https://www.linkedin.com/in/zach-cush/" target="_blank">https://www.linkedin.com/in/zach-cush/</Link>
    </InfoWrapper>
    <InfoWrapper>
      <Description>Github - </Description>
      <Link href="https://github.com/mokezonline" target="_blank">https://github.com/mokezonline</Link>
    </InfoWrapper>
    <InfoWrapper>
      <Description>The code for this project - </Description>
      <Link href="https://github.com/mokezonline/pokeResume" target="_blank">PokeResume!</Link>
    </InfoWrapper>
    </InfoBorder>
    <ConnectMessage>Let's connect and chat about why I would be a great fit for the Gather Town Team!</ConnectMessage>
  </ContactInfoWrapper>

);

export default ContactInfo;