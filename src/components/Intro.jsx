import React from "react";
import styled from "styled-components";
import women from "../Image/women.png";
import { AnimatedShape } from "./AnimatedShape";

const Container = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  height: calc(100vh - 60px);
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Des = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const PhoneText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  margin-top: 5px;
  width: 100%;
`;

export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Des>
          We Believe That designing Products and services in close partnership
          with our clients is the only way to have a real impact on their
          business
        </Des>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us 036 65656510</Phone>
            <PhoneText>For Any Question or Consern</PhoneText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={women} />
      </Right>
      <AnimatedShape />
    </Container>
  );
};
