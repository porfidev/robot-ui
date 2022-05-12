import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RobotFaceIcon } from '../assets/robot_face_icon.svg';

const RobotIdentificatorContainer = styled.div`
  position: absolute;
  left: 8rem;
  top: 3rem;
  font-size: 2.2rem;
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RobotIdentificator = ({children}) => {
  return <RobotIdentificatorContainer>
    <RobotFaceIcon width={30}/> {children}
  </RobotIdentificatorContainer>;
};

export { RobotIdentificator };
