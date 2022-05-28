
import React from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import BatteryLifeMeter from '../components/BatteryLifeMeter.js';
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
      {/*<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>*/}
      {/*<small>{process.env.REACT_APP_SOCKET_BASE_URL}</small>*/}
      <BatteryLifeMeter />
      <CameraView socket={socket} />
      <RobotControls socket={socket} />
    </NavigationContainer>
  );
};

export default ManualNavigation;
