import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { useWindowSize } from 'react-use';
import { ApiContext } from '../contexts/apiContext.js';
import { EVENT_MODES } from '../enums/eventModes.js';
import styled from 'styled-components';

const CameraViewContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const CameraView = ({socket}) => {
  const [cameraImage, setCameraImage] = useState('');
  const {width, height} = useWindowSize();
  const api = useContext(ApiContext);

  useEffect(() => {

    // TODO: Move this to UPPER LEVEL
    socket.emit('Connected', {
      'type': 'navigation'
    });

    socket.on('Camera', CameraListener);
    initLiveCamera();

    return () => {
      socket.off('Camera', CameraListener);
      stopLiveCamera();
    };
  }, [socket]);

  const CameraListener = data => {
    //console.log('CAMERA MESSAGE', data.data);
    setCameraImage(data.data.image);
  };

  const initLiveCamera = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/camera`, {
      'camera': 'front',
      'mode': EVENT_MODES.EVENT
    });
  };

  const stopLiveCamera = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/camera`, {
      'camera': 'front',
      'mode': EVENT_MODES.STOP
    });
  };

  return (
    <CameraViewContainer width={width} height={height}>
      {cameraImage && <img alt="imageView" src={cameraImage} width={width} height={height}/>}
    </CameraViewContainer>
  );
};

export default CameraView;
