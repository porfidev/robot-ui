import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew.js";
import React from "react";
import LogoOctopy from "../components/LogoOctopy.js";
import MainContainer from "../components/MainContainer.js";
import { MainContent } from "../components/MainContent.js";
import { MainLegend } from "../components/MainLegend.js";
import QuickActionButton from "../components/QuickActionButton.js";
import { RobotIdentificator } from "../components/RobotIdentificator.js";
import { RobotQuickActionsContainer } from "../components/RobotQuickActionsContainer.js";
import { ShutDownButton } from "../components/ShutDownButton.js";
import styled from "styled-components";
import CachedIcon from '@mui/icons-material/Cached';

const MapListSelection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 4rem 6rem;
`;

const MapListCourseSection = styled.div`
  flex: 1;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const MapListMapsSection = styled.div`
  flex: 2;
  margin: 0 1rem;
`;

const SectionTitle = styled.div`
  background-color: black;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1rem 2rem;
`;

const MapListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #727272B0;
  padding: 1rem 2rem;
  margin: 1rem 0;
  
  h3 {
    margin: 0;
  }
  
  span {
    color: #2AA4D5;
  }
`

const MapPathItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #727272B0;
  padding: 1rem 2rem;
  margin: 1rem 0;
  
  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0;
  }
  
  span {
    color: #FFF;
    font-size: 1.2rem;
  }
  
  button {
    margin-top: 1rem;
    background: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 1rem;
    
    &:hover {
      background-color: lightgray;
    }
  }
`
const MapListSectionContent = styled.div`
  overflow: auto;
  // height: 40rem; // TODO: DEFINE this better
`
const SectionButton = styled.button`
  background: #FFFFFF;
  box-shadow: 0 3px 3px #0000001A;
  border: 2px solid #000000;
  color: #000000;
  opacity: 1;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    background-color: lightgray;
  }
`

const mapsConfig = [
  {
    name: "Mapa 1",
    paths: [{}, {}, {}],
  },
  {
    name: "Mapa 2",
    paths: [{}, {}, {}],
  },
  {
    name: "Mapa 3",
    paths: [{}, {}, {}],
  },
  {
    name: "Mapa 4",
    paths: [{}, {}, {}],
  },
];

const pathsConfig = [
  {
    name: "Mapa 1",
    pathName: 'Trayectoria circuito 1',
    paths: [{}, {}, {}],
  },
];

const NavigationMode = () => {
  return (
    <MainContainer>

      <ShutDownButton>
        <PowerSettingsNewIcon sx={{ fontSize: 60 }} />
        <span>Apagar Robot</span>
      </ShutDownButton>

      <RobotIdentificator>Robot 01</RobotIdentificator>

      <RobotQuickActionsContainer>
        <QuickActionButton type={"battery"} />
        <QuickActionButton type={"back"} color={"#1ABFD5"} />
      </RobotQuickActionsContainer>

      <MainContent>
        <MainLegend>
          <h1>Modo Navegación</h1>
          <h2>Selecciona un mapa:</h2>
        </MainLegend>

        <MapListSelection>
          <MapListCourseSection>
            <SectionTitle>Trayectoria activa</SectionTitle>

            {
              pathsConfig.map((path, index) =>
                <MapPathItem key={index}>
                  <h3>{path.name}</h3>
                  <span>{path.pathName}</span>
                  <button><CachedIcon sx={{color: '#FFF', fontSize: 30}} /></button>
                </MapPathItem>)
            }

            <SectionButton>
              Quitar Selección
            </SectionButton>
          </MapListCourseSection>
          <MapListMapsSection>
            <SectionTitle>MApas definidos</SectionTitle>
            <MapListSectionContent>
              {
                mapsConfig.map((map, index )=>
                  <MapListItem key={index}>
                    <h3>{map.name}</h3>
                    <span>{map.paths.length} Trayectorias</span>
                  </MapListItem>)
              }
            </MapListSectionContent>
          </MapListMapsSection>
        </MapListSelection>
      </MainContent>
    </MainContainer>
  );
};

export default NavigationMode;
