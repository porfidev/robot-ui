import { Close } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer.js';

const notifications = [{
  dateTime: new Date().toDateString(),
  message: '¿Me he topado con un obstáculo que no logro evadir, que desea hacer?'
}, {
  dateTime: new Date().toDateString(),
  message: 'Una persona esta respondiendo una encuesta en este momento'
}, {
  dateTime: new Date().toDateString(),
  message: 'Robot, No presionaron botón de pedido recibido'
}];

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
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 28rem;
`;

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  margin: 1rem;
  color: #000;
  border-radius: 1rem;
`;

const DrawerMenu = props => {
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
          <h2>Alertas</h2>
          {
            notifications.map((noti) => {
              return <AlertContainer>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <div style={{ marginLeft: '1rem', marginTop: '1rem'}}>
                    {noti.dateTime}
                  </div>
                  <CloseDrawerButton>
                    <Close sx={{color: '#000000', fontSize: 30}}/>
                  </CloseDrawerButton>
                </div>

                <div style={{
                  padding: '1rem 2rem'
                }}>{noti.message}</div>
              </AlertContainer>;
            })
          }
        </NotificationsContainer>
      </Drawer>
    </MainContainer>
  );
};

DrawerMenu.propTypes = {};

export default DrawerMenu;
