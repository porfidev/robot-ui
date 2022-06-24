import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../components/ActionButton.js';
import { FormContainer } from '../components/forms/FormContainer.js';
import { InputText } from '../components/forms/InputText.js';
import LogoOctopy from '../components/LogoOctopy.js';
import MainActionButton from '../components/MainActionButton.js';
import MainContainer from '../components/MainContainer.js';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AppleIcon from '@mui/icons-material/Apple';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { MainContent } from '../components/MainContent.js';
import { MainLegend } from '../components/MainLegend.js';
import { PromptAlert, PromptAlertText } from '../components/PromptAlert.js';
import QuickActionButton from '../components/QuickActionButton.js';
import { RobotIdentificator } from '../components/RobotIdentificator.js';
import { RobotQuickActionsContainer } from '../components/RobotQuickActionsContainer.js';
import { ShutDownButton } from '../components/ShutDownButton.js';

const MainMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 5rem;
  flex: 1;
`;

const MODES = {
  DOCK: 'docking',
  STAND_BY: 'stand_by',
  STOP: 'stop',
  MAPPING: 'mapping',
  NAVIGATION: 'navigation',
  MANUAL: 'manual'
};

const initialState = {
  currentMode: MODES.STAND_BY
};

const Main = () => {

  const [robotNavigationState, setRobotNavigationState] = useState(MODES.STAND_BY);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // TODO: Refactor this to STATE MACHINE
  const renderNavigationButtons = (mode) => {
    switch (mode) {
      case MODES.STAND_BY:
      case MODES.STOP:
        return (<>
            <MainActionButton enabled={false} action={() => goToMode(MODES.NAVIGATION)}>
              <MyLocationIcon sx={{fontSize: 60}}/>
              <span>Navegación</span>
            </MainActionButton>
            <MainActionButton enabled={false} action={() => goToMode(MODES.MAPPING)}>
              <ExploreIcon sx={{fontSize: 60}}/>
              <span>Mapeo</span>
            </MainActionButton>
            <MainActionButton enabled={false} action={() => goToMode(MODES.MANUAL)}>
              <ControlCameraIcon sx={{fontSize: 60}}/>
              <span>Manual</span>
            </MainActionButton>
            <MainActionButton>
              <ModeStandbyIcon sx={{fontSize: 60}}/>
              <span>Estático</span>
            </MainActionButton>
          </>
        );

      case MODES.NAVIGATION:
      case MODES.MAPPING:
      case MODES.MANUAL:
        return (<>
            <MainActionButton enabled={true} action={() => goToMode(MODES.NAVIGATION)}>
              <MyLocationIcon sx={{fontSize: 60}}/>
              <span>Navegación</span>
            </MainActionButton>
            <MainActionButton enabled={true} action={() => goToMode(MODES.MAPPING)}>
              <ExploreIcon sx={{fontSize: 60}}/>
              <span>Mapeo</span>
            </MainActionButton>
            <MainActionButton enabled={true} action={() => goToMode(MODES.MANUAL)}>
              <ControlCameraIcon sx={{fontSize: 60}}/>
              <span>Manual</span>
            </MainActionButton>
            <MainActionButton>
              <ModeStandbyIcon sx={{fontSize: 60}}/>
              <span>Estático</span>
            </MainActionButton>
          </>
        );
    }
  };

  const goToMode = (mode) => {
    switch (mode) {
      case MODES.STAND_BY:
      case MODES.STOP:
        // pending call Endpoint
        setRobotNavigationState(mode);

      case MODES.NAVIGATION:
      case MODES.MAPPING:
      case MODES.MANUAL:
        if (robotNavigationState === MODES.STAND_BY || robotNavigationState === MODES.STOP) {
          return setShowModal(true);
        }

        if(mode === MODES.MANUAL)
          return navigate('/manual-navigation')
        if(mode === MODES.MAPPING)
          return navigate('/mapping-navigation')
    }
  };

  const HorizontalButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;
  return (
    <>
      <PromptAlert showCloseButton={false} show={showModal}>
        <PromptAlertText>
          Se desactivará el modo EN ESPERA ¿Desea continuar?
        </PromptAlertText>

        <FormContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <HorizontalButtons>
              <ActionButton onClick={() => {setShowModal(false); setRobotNavigationState(MODES.NAVIGATION) }}>SI</ActionButton>
              <ActionButton onClick={() => {setShowModal(false); }}>NO</ActionButton>
            </HorizontalButtons>
          </form>
        </FormContainer>
      </PromptAlert>
      <MainContainer>

        <ShutDownButton>
          <PowerSettingsNewIcon sx={{fontSize: 60}}/>
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
            {renderNavigationButtons(robotNavigationState)}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{fontSize: 60}}/>*/}
            {/*  <span>Navegación</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton enabled={false}>*/}
            {/*  <AppleIcon sx={{fontSize: 60}}/>*/}
            {/*  <span>Mapeo</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{fontSize: 60}}/>*/}
            {/*  <span>Manual</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton enabled={false}>*/}
            {/*  <AppleIcon sx={{fontSize: 60}}/>*/}
            {/*  <span>Estático</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{ fontSize: 60 }} />*/}
            {/*  <span>Agregar Trayectoria</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{ fontSize: 60 }} />*/}
            {/*  <span>Establecer Zona</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{ fontSize: 60 }} />*/}
            {/*  <span>Delivery</span>*/}
            {/*</MainActionButton>*/}
            {/*<MainActionButton>*/}
            {/*  <AppleIcon sx={{ fontSize: 60 }} />*/}
            {/*  <span>Redes</span>*/}
            {/*</MainActionButton>*/}
          </MainMenuContainer>
        </MainContent>

      </MainContainer>
    </>
  );
};

export default Main;
