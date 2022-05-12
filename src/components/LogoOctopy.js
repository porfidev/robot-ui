import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoOctopyImage } from "../assets/logo_solo.svg";

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const LogoOctopy = () => (
  <LogoContainer>
    <LogoOctopyImage height={80}/>
  </LogoContainer>
);

export default LogoOctopy;
