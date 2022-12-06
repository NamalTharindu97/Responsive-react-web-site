import React from "react";
import styled from "styled-components";

const Sqare = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: Sqare 25s linear alternate infinite;

  @keyframes Sqare {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circule = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;

  animation: Circule 25s linear alternate infinite;

  @keyframes Circule {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: Rectangle 25s linear alternate infinite;

  @keyframes Rectangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

export const AnimatedShape = () => {
  return (
    <>
      <Sqare />
      <Rectangle />
      <Circule />
    </>
  );
};
