import { useContext } from 'react';
import React from 'react';
import { useWindowSize } from 'react-use';
import BatteryLifeMeter from '../components/BatteryLifeMeter/BatteryLifeMeter.js';
import CameraView from '../components/CameraView.js';
import MinimapView from '../components/MinimapView/MinimapView.js';
import { NavigationContainer } from '../components/NavigationContainer.js';
import QuickActionButton from '../components/QuickActionButton.js';
import RobotControls from '../components/RobotControls.js';
import { RobotQuickActionsContainer } from '../components/RobotQuickActionsContainer.js';
import { ApiContext } from '../contexts/apiContext.js';


const ManualNavigation = () => {
  const {width, height} = useWindowSize();
  const { socket } = useContext(ApiContext);

  return (
    <NavigationContainer width={width} height={height}>

      <RobotQuickActionsContainer>
        <QuickActionButton type={'notification'}/>
        <QuickActionButton type={'back'} color={'#1ABFD5'} onTap={() => console.log('ir atrás')}/>
      </RobotQuickActionsContainer>

      <BatteryLifeMeter/>
      <MinimapView />
      <CameraView socket={socket}/>
      <RobotControls socket={socket}/>
    </NavigationContainer>
  );
};

export default ManualNavigation;
