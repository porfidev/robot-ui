import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 1366px;
  height: 1024px;
  background-color: black;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FooterOctopy = styled.div`
  position: absolute;
  bottom: 0;
  height: 2rem;
  width: calc(100% - (2rem * 2));
  background-color: #171717;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const MainContainer = ({ children }) => {
  return (
    <Container>
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
