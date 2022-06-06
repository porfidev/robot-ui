import axios from 'axios';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ApiContext } from '../../contexts/apiContext.js';
import { EVENT_MODES } from '../../enums/eventModes.js';
import styled from 'styled-components';

const normal100 = require('./assets/Normal 100%.png');
const normal75 = require('./assets/Normal 75%.png');
const normal50 = require('./assets/Normal 50%.png');
const normal25 = require('./assets/Normal 25%.png');
const normal10 = require('./assets/Normal 10%.png');
const charging100 = require('./assets/Charging 100%.png');
const charging75 = require('./assets/Charging 75%.png');
const charging50 = require('./assets/Charging 50%.png');
const charging25 = require('./assets/Charging 25%.png');
const charging10 = require('./assets/Charging 10%.png');

const initialBatteryStatus = {
  isCharging: false,
  percentage: 0
};

const REQUEST_BATTERY_TIMEOUT = 10000;

const BatteryContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12rem;
  top: 2rem;
  min-width: 12rem;
  min-height: 3rem;

  span {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding-right: 0.5rem;
  }
`;

const BatteryLifeMeter = () => {
  const [batteryStatus, setBatteryStatus] = useState(initialBatteryStatus);
  const api = useContext(ApiContext);

  useEffect(() => {
    const checkStatusInterval = setInterval(async () => {
      const batteryStatysRequest = await requestBattery();
      const {payload} = batteryStatysRequest.data;

      if (payload.status === 'OK') {
        const newBatteryStatus = {
          isCharging: !!payload.data.power_supply_status,
          percentage: payload.data.percentage
        };

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

  const batteryIcons = useMemo(() => ({
      normal: {
        100: normal100,
        75: normal75,
        50: normal50,
        25: normal25,
        10: normal10
      },
      charging: {
        100: charging100,
        75: charging75,
        50: charging50,
        25: charging25,
        10: charging10
      }
    })
    , []);

  const getBatteryIcon = useCallback((isCharging, percentage) => {
    const state = isCharging ? 'charging' : 'normal';

    if (percentage >= 90) {
      return batteryIcons[state][100];
    }

    if (percentage >= 75) {
      return batteryIcons[state][75];
    }

    if (percentage >= 50) {
      return batteryIcons[state][50];
    }

    if (percentage >= 25) {
      return batteryIcons[state][25];
    }

    return batteryIcons[state][10];
  }, [batteryIcons]);

  return (
    <BatteryContainer>
      <span>{batteryStatus.percentage}%</span>
      <img alt="battery icon" src={getBatteryIcon(batteryStatus.isCharging, batteryStatus.percentage)}/>
    </BatteryContainer>
  );
};

export default BatteryLifeMeter;
