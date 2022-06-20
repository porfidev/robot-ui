import React from "react";
import styled from "styled-components";
import LogoOctopy from './LogoOctopy.js';
const background = require('../assets/main-background.jpg');

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: auto;
  color: #ffffff;
  background-color: #000000;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.bgImg})`};
  overflow: hidden;
`;

const FooterOctopy = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - (2rem * 2));
  height: 2rem;
  padding: 0 2rem;
  background-color: #171717;
`;

const MainContainer = ({ children }) => {
  return (
    <Container bgImg={background}>
      <LogoOctopy />
      {children}
      <FooterOctopy>
        <span>
          Powered by <span>Octopy</span> 2022
        </span>
      </FooterOctopy>
    </Container>
  );
};

export default MainContainer;
