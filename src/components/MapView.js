import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import { ApiContext } from '../contexts/apiContext.js';
import { EVENT_MODES } from '../enums/eventModes.js';

const MapViewContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const MapView = ({socket}) => {
  const [mapImage, setMapImage] = useState({
    map: '',
    width: 0,
    height: 0
  });
  const {width, height} = useWindowSize();
  const api = useContext(ApiContext);

  useEffect(() => {

    // TODO: Move this to UPPER LEVEL
    socket.emit('Connected', {
      'type': 'navigation'
    });

    socket.on('CurrentPosition', CurrentPositionListener);
    socket.on('Map', MapListener);

    initLiveMap();
    initLiveCurrentPosition();

    return () => {
      socket.off('CurrentPosition', CurrentPositionListener);
      socket.off('Map', MapListener);
      stopLiveMap();
      stopLiveCurrentPositon();
    };
  }, [socket]);

  const MapListener = data => {
    console.log('MAP LISTENER', data);
    setMapImage(data.data.image);
  };

  const CurrentPositionListener = data => {
    console.log('POSITION LISTENER OYENDO', data);
  };

  const initLiveMap = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/map`, {
      'map': 'map',
      'mode': EVENT_MODES.EVENT
    }).then(data => {
      console.log('DATA MAP', data);
      const {payload} = data.data;
      setMapImage(payload.data);
    });
  };

  const stopLiveMap = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/map`, {
      'map': 'map',
      'mode': EVENT_MODES.STOP
    });
  };

  const initLiveCurrentPosition = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/amcl-pose`, {
      'mode': EVENT_MODES.EVENT
    }).then(data => {
      console.log('DATA POSITON', data);
    });
  };

  const stopLiveCurrentPositon = async () => {
    const {robotUrl} = api;
    await axios.post(`${robotUrl}ros/amcl-pose`, {
      'mode': EVENT_MODES.STOP
    });
  };

  return (
    <MapViewContainer width={width} height={height}>
      {mapImage && <img alt="imageView" src={mapImage.map} width={mapImage.width} height={mapImage.height}/>}
    </MapViewContainer>
  );
};

export default MapView;
