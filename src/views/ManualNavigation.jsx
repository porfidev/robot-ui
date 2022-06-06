import React from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import BatteryLifeMeter from '../components/BatteryLifeMeter/BatteryLifeMeter.js';
import CameraView from '../components/CameraView.js';
import MinimapView from '../components/MinimapView.js';
import QuickActionButton from '../components/QuickActionButton.js';
import RobotControls from '../components/RobotControls.js';
import { RobotQuickActionsContainer } from '../components/RobotQuickActionsContainer.js';

const NavigationContainer = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: rebeccapurple;
  overflow: hidden;
`;

const ManualNavigation = ({socket}) => {
  const {width, height} = useWindowSize();
  return (
    <NavigationContainer width={width} height={height}>

      <RobotQuickActionsContainer>
        <QuickActionButton type={'notification'}/>
        <QuickActionButton type={'back'} color={'#1ABFD5'} onTap={() => console.log('ir atrás')}/>
      </RobotQuickActionsContainer>

      <BatteryLifeMeter/>
      <MinimapView />
      <CameraView socket={socket}/>
      <RobotControls socket={socket}/>
    </NavigationContainer>
  );
};

export default ManualNavigation;
