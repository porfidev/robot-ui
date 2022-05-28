import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../contexts/apiContext.js';
import { EVENT_MODES } from '../../enums/eventModes.js';

const initialBatteryStatus = {
  isCharging: false,
  percentage: 100
};

const REQUEST_BATTERY_TIMEOUT = 5000;

const BatteryLifeMeter = () => {
  const [batteryStatus, setBatteryStatus] = useState(initialBatteryStatus);
  const api = useContext(ApiContext);

  useEffect(() => {
    const checkStatusInterval = setInterval(async () => {
      const batteryStatysRequest = await requestBattery();
      const { payload } = batteryStatysRequest.data;

      if(payload.status === 'OK'){
        const newBatteryStatus = {
          isCharging: !!payload.data.power_supply_status,
          percentage: payload.data.percentage
        }

        setBatteryStatus(newBatteryStatus);
      }
    }, REQUEST_BATTERY_TIMEOUT);

    return () => clearInterval(checkStatusInterval);
  }, []);

  const requestBattery = async () => {
    try {
      const {robotUrl} = api;
      return axios.post(`${robotUrl}ros/battery`, {
        'mode': EVENT_MODES.UNIQUE
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      Cargando {batteryStatus.isCharging ? 'Si' : 'No'}
      <br/>
      Porcentaje {batteryStatus.percentage}
    </div>
  );
};

export default BatteryLifeMeter;
