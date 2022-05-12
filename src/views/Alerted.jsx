import { Close } from "@mui/icons-material";
import React from "react";
import MainContainer from "../components/MainContainer.js";
import styled from "styled-components";

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

const AlertContainer = styled.div`
  backdrop-filter: blur(2px);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Alert = styled.div`
  display: flex;
  background-color: #000000;
  width: 40rem;
  min-height: 10rem;
  color: #fff;
  padding: 1.2rem;
  border-radius: 1.6rem;
  flex-direction: column;

  p {
    font-size: 2rem;
  }
`;

const CloseAlertButton = styled.div`
  display: flex;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:hover {
    background-color: #2f2f2f;
  }
`;

const Alerted = () => {
  return (
    <MainContainer>
      <PatternBack />
      <AlertContainer>
        <Alert>
          <CloseAlertButton>
            <Close sx={{ color: "#FFFFFF", fontSize: 50 }} />
          </CloseAlertButton>
          <p>
            El operado debe activar el modo mesero para poder ver las opciones
          </p>
        </Alert>
      </AlertContainer>
    </MainContainer>
  );
};

export default Alerted;
