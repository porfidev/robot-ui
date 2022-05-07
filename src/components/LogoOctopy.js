import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoOctopyImage } from "../assets/logo_solo.svg";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoOctopy = () => (
  <LogoContainer>
    <LogoOctopyImage />
  </LogoContainer>
);

export default LogoOctopy;
