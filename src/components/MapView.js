import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { Circle, Image, Layer, Stage } from 'react-konva';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import useImage from 'use-image';
import { ApiContext } from '../contexts/apiContext.js';
import { EVENT_MODES } from '../enums/eventModes.js';

const MapViewContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const MapView = ({socket}) => {
  const [mapData, setMapData] = useState({
    map: '',
    width: 0,
    height: 0,
    resolution: 0,
    origin: [0, 0, 0]
  });
  const [mapImage, setMapImage] = useState('');
  const [image, status] = useImage(mapImage) ;
  const {width, height} = useWindowSize();
  const [stage, setStage] = useState({
    scale: 2.0,
    x: 0,
    y: 0
  });

  const api = useContext(ApiContext);

  useEffect(() => {
    async function fetchData() {
      const minimapRequest = await requestMap();
      const {payload} = minimapRequest.data;

      if (payload.status === 'OK') {
        const newMinimapData = payload.data;
        console.log('minimap data', newMinimapData);
        setMapData(newMinimapData);
        setMapImage(newMinimapData.map);
      }
    }

    fetchData();

  }, []);

  const requestMap = async () => {
    try {
      const {robotUrl} = api;
      return axios.post(`${robotUrl}ros/map`, {
        'map': 'map',
        'mode': EVENT_MODES.UNIQUE
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {

    // TODO: Move this to UPPER LEVEL
    socket.emit('Connected', {
      'type': 'navigation'
    });

    socket.on('CurrentPosition', CurrentPositionListener);
    socket.on('Map', MapListener);

    // initLiveMap();
    initLiveCurrentPosition();

    return () => {
      socket.off('CurrentPosition', CurrentPositionListener);
      socket.off('Map', MapListener);
      // stopLiveMap();
      stopLiveCurrentPositon();
    };
  }, [socket]);

  const MapListener = data => {
    console.log('MAP LISTENER', data);
    setMapData(data.data.image);
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
      setMapData(payload.data);
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
      console.log('INITIAL POSITION', data);
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
        <pre>{JSON.stringify(mapData,null,2)}</pre>
        <Stage width={width} height={height} scaleX={stage.scale} scaleY={stage.scale} >
          <Layer>
            <Image image={image} width={mapData.width} height={mapData.height} draggable={true}/>
          </Layer>
          <Layer>
            <Circle fill="red" stroke={'white'} width={10} height={10} x={mapData.origin[0] + mapData.width / 2}
                    y={mapData.origin[1] + mapData.height / 2}/>
          </Layer>
        </Stage>
    </MapViewContainer>
  );
};

export default MapView;
