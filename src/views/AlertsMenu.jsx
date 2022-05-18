import { Close } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React from 'react';
import NotificationAlert from '../components/NotificationAlert.js';
import { CloseDrawerButton } from '../components/CloseDrawerButton.js';
import { DrawerContent } from '../components/DrawerContent.js';
import MainContainer from '../components/MainContainer.js';

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

const AlertsMenu = () => {
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
          <h1>Alertas</h1>
          {
            notifications.map((notification) => {
              return <NotificationAlert {...notification} />;
            })
          }
        </DrawerContent>
      </Drawer>
    </MainContainer>
  );
};

export default AlertsMenu;
