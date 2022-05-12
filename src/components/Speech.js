import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from '@mui/icons-material/Pause';

const SpeechContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 1rem;
  color: #000;
  border-radius: 1rem 1rem 0 1rem;
  min-height: 4rem;

  &:hover {
    background-color: lightblue;
  }
`;

const PlayButton = styled.button`
  border: 0;
  margin: 0;
  display: flex;
  flex: 2;
  background-color: #1abfd5;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  &:hover {
    background-color: #78cbd9;
  }
`;

const SpeechInfo = styled.div`
  flex: 6;
  display: flex;
  flex-direction: row;
`;

const SpeechIndex = styled.span`
  padding: 0.5rem 1rem;
  font-size: 2rem;
  flex: 1;
`;

const SpeechData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  flex: 8;
`;

const DeleteButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a3a3a3;
  border-top-right-radius: 1rem;

  &:hover {
    background-color: #d5d5d5;
  }
`;

const Speech = ({ index, name, message, sound }) => {
  console.log(sound);
  const [playSound, setPlaySound] = useState({
    speech: new Audio(sound),
    isPlaying: false,
    canBePlayer: false,
  });

  useEffect(() => {
    playSound.speech.addEventListener('canplaythrough', (event) => {
      console.log('I think I can play through the entire ' +
        'video without ever having to stop to buffer.');
    });

    playSound.speech.addEventListener('ended', (event) => {
      setPlaySound({...playSound, isPlaying: false})
    });
  }, [sound])

  // const audioRef = useRef();
  const handlePlay = () => {
    playSound.speech.play();
    setPlaySound({ ...playSound, isPlaying: true });
  };

  const handlePause = () => {
    playSound.speech.pause();
    setPlaySound({ ...playSound, isPlaying: false });
  };

  return (
    <SpeechContainer>
      {/*<audio ref={audioRef}>*/}
      {/*  <source />*/}
      {/*  Your browser does not support the audio element.*/}
      {/*</audio>*/}
      {playSound.isPlaying ? (
        <PlayButton onClick={handlePause}>
          <PauseIcon sx={{ fontSize: 60, color: "#FFF" }} />
        </PlayButton>
      ) : (
        <PlayButton onClick={handlePlay}>
          <PlayArrowIcon sx={{ fontSize: 60, color: "#FFF" }} />
        </PlayButton>
      )}

      <SpeechInfo>
        <SpeechIndex>{index}</SpeechIndex>
        <SpeechData>
          <b>{name}</b>
          {message}
        </SpeechData>
      </SpeechInfo>
      <DeleteButton>
        <DeleteIcon sx={{ fontSize: 30, color: "#727272B0" }} />
      </DeleteButton>
    </SpeechContainer>
  );
};

export { Speech };
