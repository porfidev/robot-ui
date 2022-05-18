import React, { useCallback } from 'react';
import { ActionButton } from '../components/ActionButton.js';
import { FormContainer } from '../components/forms/FormContainer.js';
import { InputText } from '../components/forms/InputText.js';
import MainContainer from "../components/MainContainer.js";
import styled from "styled-components";
import { PromptAlert, PromptAlertText } from '../components/PromptAlert.js';

const PatternBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e5f7;
  opacity: 0.8;
  background: linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0/
      20px 20px,
    linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px,
    linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px;
`;

const HorizontalButtons = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const AddTextToSpeechAlert = () => {

  const handleSubmit = useCallback(() => {
    console.log('Call API REQUEST');
  }, []);

  return (
    <MainContainer>
      <PatternBack />
      <PromptAlert showCloseButton={false}>
        <PromptAlertText>
            Agregar intención Text to speech
        </PromptAlertText>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputText label={'Escribe el texto a reproducir'} />
            <HorizontalButtons>
              <ActionButton>Cancelar</ActionButton>
              <ActionButton>Continuar</ActionButton>
            </HorizontalButtons>
          </form>
        </FormContainer>
      </PromptAlert>
    </MainContainer>
  );
};

export { AddTextToSpeechAlert };
