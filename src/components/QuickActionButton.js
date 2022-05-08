import { lighten } from '@mui/material';
import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyIcon from '@mui/icons-material/Key';
import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';

const switchTypeIcon = (type) => {
  const iconStyle = { fontSize: 60 };
  switch (type) {
    case 'notification':
      return <NotificationsActiveIcon sx={iconStyle}/>
    case 'security':
      return <KeyIcon sx={iconStyle} />
    case 'logout':
      return <LogoutIcon sx={iconStyle} />
    case 'battery':
      return <BatteryCharging90Icon sx={iconStyle} />
  }
}

const ActionButtonContainer = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: ${({color}) => color ? color: 'gray'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.7);
  }
`;

const QuickActionButton = ({ type, color }) => {
  return (
    <ActionButtonContainer color={color}>
      { switchTypeIcon(type )}
    </ActionButtonContainer>
  );
};

export default QuickActionButton;
