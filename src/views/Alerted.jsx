import { Close } from "@mui/icons-material";
import React from "react";
import MainContainer from "../components/MainContainer.js";
import styled from "styled-components";
import { PromptAlert, PromptAlertText } from '../components/PromptAlert.js';

const PatternBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e5f7;
  opacity: 0.8;
  background: linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0/
      20px 20px,
    linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px,
    linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px;
`;



const Alerted = () => {
  return (
    <MainContainer>
      <PatternBack />
      <PromptAlert>
        <PromptAlertText>
          El operado debe activar el modo mesero para poder ver las opciones
        </PromptAlertText>
      </PromptAlert>
    </MainContainer>
  );
};

export default Alerted;
