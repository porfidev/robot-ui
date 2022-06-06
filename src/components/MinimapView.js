import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { ApiContext } from '../contexts/apiContext.js';
import { EVENT_MODES } from '../enums/eventModes.js';
import styled from 'styled-components';

const MinimapContainer = styled.div`
  position: absolute;
  min-width: 360px;
  min-height: 240px;
  top: 2rem;
  left: 3rem;
  z-index: 10;
`;

const StageContainer = styled.div`
  position: absolute;
  width: 360px;
  height: 240px;
  background-color: gray;
  border: 2px solid white;
`;

const MinimapView = () => {
  const stageRef = React.useRef();
  const [minimap, setMinimap] = useState({
    map: '',
    width: 0,
    height: 0,
    resolution: 0,
    origin: [0, 0, 0]
  });
  const [minimapImage, setMinimapImage] = useState('https://i.pravatar.cc/300');
  const [image, status] = useImage(minimapImage);
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0
  });

  const api = useContext(ApiContext);

  useEffect(() => {
    async function fetchData() {
      const minimapRequest = await requestMinimap();
      const {payload} = minimapRequest.data;

      if (payload.status === 'OK') {
        const newMinimapData = payload.data;
        setMinimap(newMinimapData);
        setMinimapImage(newMinimapData.map);
      }
    }

    fetchData();

  }, []);

  const requestMinimap = async () => {
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

  const zoomOut = () => {
    if (stage.scale <= 0.8) {
      return;
    }
    const newStage = {
      ...stage,
      scale: stage.scale - 0.1
    };

    setStage(newStage);
  };

  const zoomIn = () => {
    if (stage.scale >= 1.5) {
      return;
    }
    const newStage = {
      ...stage,
      scale: stage.scale + 0.1
    };

    setStage(newStage);
  };

  return (
    <MinimapContainer>
      <StageContainer>
        <Stage width={360} height={240} scaleX={stage.scale} scaleY={stage.scale} ref={stageRef}>
          <Layer>
            <Image fill="red" image={image} width={minimap.width} height={minimap.height} draggable={true}/>
          </Layer>
        </Stage>
      </StageContainer>

      <button style={{position: 'relative'}} onClick={zoomIn}>+</button>
      <button style={{position: 'relative'}} onClick={zoomOut}>-</button>
    </MinimapContainer>
  );
};

export default MinimapView;
