import React from "react";
import LogoOctopy from "../components/LogoOctopy.js";
import MainActionButton from '../components/MainActionButton.js';
import MainContainer from "../components/MainContainer.js";
import styled from "styled-components";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AppleIcon from "@mui/icons-material/Apple";
import { MainContent } from '../components/MainContent.js';
import { MainLegend } from '../components/MainLegend.js';
import QuickActionButton from '../components/QuickActionButton.js';
import { RobotIdentificator } from '../components/RobotIdentificator.js';
import { RobotQuickActionsContainer } from '../components/RobotQuickActionsContainer.js';
import { ShutDownButton } from '../components/ShutDownButton.js';


const MainMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 8rem;
`;

const Main = () => {
  return (
    <MainContainer>
      <LogoOctopy />

      <ShutDownButton>
        <PowerSettingsNewIcon sx={{ fontSize: 60 }} />
        <span>Apagar Robot</span>
      </ShutDownButton>

      <RobotIdentificator>
        Robot 01
      </RobotIdentificator>

      <RobotQuickActionsContainer>
        <QuickActionButton type={'battery'}/>
        <QuickActionButton type={'notification'}/>
        <QuickActionButton type={'security'}/>
        <QuickActionButton type={'logout'} color={'#1ABFD5'}/>
      </RobotQuickActionsContainer>

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
