import React from "react";
import styled from "styled-components";
import LogoOctopy from './LogoOctopy.js';

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100vw;
  height: 91vh;
  margin: auto;
  color: #ffffff;
  background: rgb(77, 77, 77);
  background: radial-gradient(circle, rgb(77, 77, 77) 0%, rgba(0, 0, 0, 1) 90%);
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
    <Container>
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
