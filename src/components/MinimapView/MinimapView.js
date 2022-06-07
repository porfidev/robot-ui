import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { ApiContext } from '../../contexts/apiContext.js';
import { EVENT_MODES } from '../../enums/eventModes.js';
import styled from 'styled-components';
import { ReactComponent as ZoomInIcon } from './assets/plusZoom.svg';
import { ReactComponent as ZoomOutIcon } from './assets/minusZoom.svg';
import { ReactComponent as ExpandIcon } from './assets/expand_icon.svg';
import { ReactComponent as CondenseIcon } from './assets/condense_icon.svg';

const MinimapContainer = styled.div`
  position: absolute;
  background-color: orange;
  width: ${(props) => props.condensed ? '120px' : '360px'};
  height: ${(props) => props.condensed ? '120px' : '240px'};
  top: 2rem;
  left: 3rem;
  z-index: 10;
  display: flex;
  flex-direction: row;
`;

const StageContainer = styled.div`
  flex: 9;
  height: ${(props) => props.condensed ? '120px' : '240px'};
  background-color: gray;
  border: 2px solid white;
`;

const ButtonsContainer = styled.div`
  position: relative;
  flex: 1;
  height: ${(props) => props.condensed ? '120px' : '240px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const ZoomButtonsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MinimapButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: rgb(102, 102, 102);
  background: linear-gradient(0deg, rgb(172, 172, 172) 0%, rgba(204, 204, 204, 1) 60%, rgba(255, 255, 255, 1) 100%);
  border-radius: 0.8rem;
  border: 2px solid #979797;
  margin-top: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: lightgray;
  }
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
  const [condensed, setCondensed] = useState(false);

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

  const toggleMiniMap = useCallback(() => {
    setCondensed(!condensed);
  }, [condensed]);

  return (
    <MinimapContainer condensed={condensed}>
      <StageContainer condensed={condensed}>
        <Stage width={condensed ? 120 : 360} height={condensed ? 120 : 240} scaleX={stage.scale} scaleY={stage.scale}
               ref={stageRef}>
          <Layer>
            <Image fill="red" image={image} width={minimap.width} height={minimap.height} draggable={true}/>
          </Layer>
        </Stage>
      </StageContainer>
      <ButtonsContainer condensed={condensed}>
        <MinimapButton onClick={toggleMiniMap}>
          {
            condensed ?
              <ExpandIcon/> : <CondenseIcon/>
          }
        </MinimapButton>

        {!condensed && <ZoomButtonsContainer>
          <MinimapButton onClick={zoomOut}>
            <ZoomOutIcon/>
          </MinimapButton>
          <MinimapButton onClick={zoomIn}>
            <ZoomInIcon/>
          </MinimapButton>
        </ZoomButtonsContainer>}
      </ButtonsContainer>
    </MinimapContainer>
  );
};

export default MinimapView;
