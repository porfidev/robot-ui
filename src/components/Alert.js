import { Close } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  margin-bottom: 1rem;
  color: #000;
  padding-bottom: 1rem;
  border-radius: 1rem 1rem 0 1rem;

  &:hover {
    background-color: lightblue;
  }
`;

const CloseAlertButton = styled.div`
  display: flex;
  cursor: pointer;
  width: 3rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border-radius: 1rem;

  &:hover {
    background-color: #c0e0ec;
  }
`;

const AlertHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const DateTimeText = styled.span`
  color: #727272;
`;

const AlertContent = styled.div`
  padding: 0.5rem 1rem;
`;

const Alert = ({dateTime, message}) => {
  return (
    <AlertContainer>
      <AlertHead>
        <DateTimeText>
          {dateTime}
        </DateTimeText>
        <CloseAlertButton>
          <Close sx={{color: '#000000', fontSize: 30}}/>
        </CloseAlertButton>
      </AlertHead>
      <AlertContent>{message}</AlertContent>
    </AlertContainer>
  );
};

export default Alert;
