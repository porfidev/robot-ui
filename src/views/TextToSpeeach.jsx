import { Close } from '@mui/icons-material';
import React from 'react';
import { Drawer } from '@mui/material';
import { ActionButton } from '../components/ActionButton.js';
import { CloseDrawerButton } from '../components/CloseDrawerButton.js';
import { DrawerContent } from '../components/DrawerContent.js';
import MainContainer from '../components/MainContainer.js';
import { Speech } from '../components/Speech.js';
import styled from 'styled-components';

const testAudio = require('../assets/audios/hola.mp3')
const testAudio2 = require('../assets/audios/quegusto.mp3')
const testAudio3 = require('../assets/audios/olakease.mp3')
const sounds = [{
  name: 'Saludo',
  message: '¡Hola!',
  sound: testAudio
}, {
  name: 'Bienvenido',
  message: '¡Que gusto verte, bienvenido!',
  sound: testAudio2
}, {
  name: 'Otro',
  message: 'ola khe ase',
  sound: testAudio3
}, {
  name: 'Saludo',
  message: '¡Hola!',
  sound: testAudio
}];

const SpeechList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

const TextToSpeeach = () => {
  return (
    <MainContainer>
      <Drawer
        anchor={'right'}
        open={true}
        onClose={() => console.log('cerrar Menu')}
      >
        <DrawerContent>
          <CloseDrawerButton>
            <Close sx={{color: '#FFFFFF', fontSize: 50}}/>
          </CloseDrawerButton>
          <h1>Text to speech</h1>
          <ActionButton>
            Agregar
          </ActionButton>
          <SpeechList>
            {
              sounds.map((sound, index) => {
                return <Speech key={index} {...sound} index={index} />
              })
            }
          </SpeechList>

        </DrawerContent>
      </Drawer>
    </MainContainer>
  );
};

export default TextToSpeeach;
