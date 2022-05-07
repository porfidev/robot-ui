import React from 'react';
import LogoOctopy from '../components/LogoOctopy.js';
import MainContainer from '../components/MainContainer.js';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const ShutDownButton = styled.div`
  position: absolute;
  background-color: #C30C3B;
  color: #FFFFFF;
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
`

const RobotQuickActionsContainer = styled.div`
  position: absolute;
  background-color: #727272B0;
  color: #FFFFFF;
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
`

const Main = () => {
  return (
    <MainContainer>
      <LogoOctopy />

      <ShutDownButton>
        <PowerSettingsNewIcon sx={{ fontSize: 60 }}/>
        <span>Apagar Robot</span>
      </ShutDownButton>

      <RobotQuickActionsContainer />

      <div>
        <h1>Bienvenido</h1>
        <h2>Seleccione el modo al que desea acceder</h2>
      </div>
    </MainContainer>
  );
};

export default Main;
