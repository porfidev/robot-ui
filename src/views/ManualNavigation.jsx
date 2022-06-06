import React from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import BatteryLifeMeter from '../components/BatteryLifeMeter/BatteryLifeMeter.js';
import CameraView from '../components/CameraView.js';
import RobotControls from '../components/RobotControls.js';

const NavigationContainer = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: rebeccapurple;
`;

const ManualNavigation = ({socket}) => {
  const {width, height} = useWindowSize();
  return (
    <NavigationContainer width={width} height={height}>
      <BatteryLifeMeter />
      <CameraView socket={socket} />
      <RobotControls socket={socket} />
    </NavigationContainer>
  );
};

export default ManualNavigation;
