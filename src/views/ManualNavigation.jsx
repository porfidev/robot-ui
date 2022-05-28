import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import BatteryLifeMeter from '../components/BatteryLifeMeter.js';
import CameraView from '../components/CameraView.js';
import RobotControls from '../components/RobotControls.js';
import { EVENT_MODES } from '../enums/eventModes.js';

const serverUrl = process.env.REACT_APP_SOCKET_BASE_URL;

const NavigationContainer = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: rebeccapurple;
`;

const ManualNavigation = ({socket}) => {
  const {width, height} = useWindowSize();
  const [cameraImage, setCameraImage] = useState('');

  console.log('socket manual navigation', socket);
  const requestBattery = async () => {
    await axios.post(`${serverUrl}ros/battery`, {
      'mode': 'event'
    });
  };

  const stopBattery = async () => {
    await axios.post(`${serverUrl}ros/battery`, {
      'mode': 'stop'
    });
  };



  // useEffect(() => {
  //   socket.emit('Connected', {
  //     'type': 'navigation'
  //   }, (answer) => {
  //     console.log('SOCKET ANSWER', answer);
  //   });
  //
  //   socket.on('Camera', CameraListener);
  //   socket.on('Battery', BatteryListener);
  //
  //   return () => {
  //     socket.off('Battery', BatteryListener);
  //     socket.off('Camera', CameraListener);
  //   };
  // }, [socket]);

  const BatteryListener = data => {
    console.log('BATTERY MESSAGE', data);
  };





  const goLeft = () => {
    socket.emit('Move', {
      "linear_x": 0,
      "angular_z": -0.2,
    });
  };

  const goRight = () => {
    socket.emit('Move', {
      "linear_x": 0,
      "angular_z": 0.2,
    });
  };
  return (
    <NavigationContainer width={width} height={height}>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <small>{process.env.REACT_APP_SOCKET_BASE_URL}</small>
      <button onClick={requestBattery}>iniciar bateria</button>
      <button onClick={stopBattery}>detener bateria</button>
      <button onClick={goLeft}>Izquierda</button>
      <button onClick={goRight}>Derecha</button>
      <BatteryLifeMeter />
      <CameraView socket={socket} />
      <RobotControls socket={socket} />
    </NavigationContainer>
  );
};

export default ManualNavigation;
