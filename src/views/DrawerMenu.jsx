import { Close } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert.js';
import MainContainer from '../components/MainContainer.js';

const CloseDrawerButton = styled.div`
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

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 0.5rem 1rem;

  h1 {
    font-size: 1.8rem;
    color: #2AA4D5;
    margin: 0 0 1rem;
  }
`;

const notifications = [{
  dateTime: '10:11',
  message: '¿Me he topado con un obstáculo que no logro evadir, que desea hacer?'
}, {
  dateTime: '12:25',
  message: 'Una persona esta respondiendo una encuesta en este momento'
}, {
  dateTime: '13:40',
  message: 'Robot, No presionaron botón de pedido recibido'
}];

const DrawerMenu = () => {
  return (
    <MainContainer>
      <Drawer
        anchor={'right'}
        open={true}
        onClose={() => console.log('cerrar Menu')}
      >
        <NotificationsContainer>
          <CloseDrawerButton>
            <Close sx={{color: '#FFFFFF', fontSize: 50}}/>
          </CloseDrawerButton>
          <h1>Alertas</h1>
          {
            notifications.map((notification) => {
              return <Alert {...notification} />;
            })
          }
        </NotificationsContainer>
      </Drawer>
    </MainContainer>
  );
};

export default DrawerMenu;
