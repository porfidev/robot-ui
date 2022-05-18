import { Close } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  backdrop-filter: blur(2px);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Alert = styled.div`
  display: flex;
  background-color: #000000;
  width: 40rem;
  min-height: 10rem;
  color: #fff;
  padding: 1rem;
  border-radius: 1.6rem;
  flex-direction: column;
`;

const CloseAlertButton = styled.div`
  display: flex;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:hover {
    background-color: #2f2f2f;
  }
`;

const PromptAlertText = styled.span`
  padding: 0 4rem;
  text-align: center;
  font-size: 2rem;
`;

const PromptAlert = ({showCloseButton = true, children}) => {
  return (
    <AlertContainer>
      <Alert>
        {
          showCloseButton &&
          <CloseAlertButton>
            <Close sx={{color: '#FFFFFF', fontSize: 50}}/>
          </CloseAlertButton>
        }
        {children}
      </Alert>
    </AlertContainer>
  );
};

export { PromptAlert, PromptAlertText };
