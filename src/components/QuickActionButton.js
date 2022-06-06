import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyIcon from '@mui/icons-material/Key';
import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const switchTypeIcon = ({type}) => {
  const iconStyle = {fontSize: 60};
  switch (type) {
    case 'notification':
      return <NotificationsActiveIcon sx={iconStyle}/>;
    case 'security':
      return <KeyIcon sx={iconStyle}/>;
    case 'logout':
      return <LogoutIcon sx={iconStyle}/>;
    case 'battery':
      return <BatteryCharging90Icon sx={iconStyle}/>;
    case 'back':
      return <ArrowBackIcon sx={iconStyle}/>;
  }
};

const ActionButtonContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({color}) => color ? color : 'gray'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;

const QuickActionButton = ({type, color, onTap}) => {
  return (
    <ActionButtonContainer color={color} onClick={onTap}>
      {switchTypeIcon({type})}
    </ActionButtonContainer>
  );
};

export default QuickActionButton;
