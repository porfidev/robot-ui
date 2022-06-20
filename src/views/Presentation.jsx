import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as OctopyLogo } from '../assets/octopy.svg';
import { ReactComponent as RobotNavigateControl } from '../assets/robots_navigate_logo.svg';

const background = require('../assets/main-background.jpg');

const PresentationContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.bgImg})`};
  overflow: hidden;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`;

const AnimatedLogo = styled(OctopyLogo)`
  position: absolute;
  left: 30%;
  top: calc(50% - 70px);
  width: 40%;
  -webkit-animation: ${fadeIn} 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const AnimatedRobotsControl = styled(RobotNavigateControl)`
  position: absolute;
  right: 5%;
  top: calc(50% - 40px);
  -webkit-animation: ${fadeIn} 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 1.4s;
`;

const Presentation = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      navigate('/login', {replace: true});
    }, 3000);

    return () => clearTimeout(time);
  }, []);

  return (<PresentationContainer bgImg={background}>
    <AnimatedLogo/>
    <AnimatedRobotsControl/>
  </PresentationContainer>);
};

export default Presentation;
