import React from "react";
import LogoOctopy from "../components/LogoOctopy.js";
import MainActionButton from '../components/MainActionButton.js';
import MainContainer from "../components/MainContainer.js";
import styled from "styled-components";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AppleIcon from "@mui/icons-material/Apple";

const ShutDownButton = styled.div`
  position: absolute;
  background-color: #c30c3b;
  color: #ffffff;
  width: 6rem;
  height: 9rem;
  top: 2rem;
  left: 0;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #ec124b;
  }
`;

const RobotQuickActionsContainer = styled.div`
  position: absolute;
  background-color: #727272b0;
  color: #ffffff;
  width: 6rem;
  min-height: 9rem;
  top: 2rem;
  right: 0;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 8rem;
`;



const MainLegend = styled.div`
  h1, h2 {
    margin: 0;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <LogoOctopy />

      <ShutDownButton>
        <PowerSettingsNewIcon sx={{ fontSize: 60 }} />
        <span>Apagar Robot</span>
      </ShutDownButton>

      <RobotQuickActionsContainer />

      <MainContent>
        <MainLegend>
          <h1>Bienvenido</h1>
          <h2>Seleccione el modo al que desea acceder</h2>
        </MainLegend>
        <MainMenuContainer>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Navegación</span>
          </MainActionButton>
          <MainActionButton enabled={false}>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Mapeo</span>
          </MainActionButton>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Manual</span>
          </MainActionButton>
          <MainActionButton enabled={false}>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Estático</span>
          </MainActionButton>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Agregar Trayectoria</span>
          </MainActionButton>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Establecer Zona</span>
          </MainActionButton>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Delivery</span>
          </MainActionButton>
          <MainActionButton>
            <AppleIcon sx={{ fontSize: 60 }} />
            <span>Redes</span>
          </MainActionButton>
        </MainMenuContainer>
      </MainContent>

    </MainContainer>
  );
};

export default Main;
