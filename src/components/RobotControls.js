import React, { useEffect, useRef, useState } from 'react';
import { Circle, Group, Layer, Stage } from 'react-konva';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';

const RobotControlsContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
`;

const RobotControls = ({socket}) => {
  const {width, height} = useWindowSize();
  const yAxisControl = useRef();
  const xAxisControl = useRef();
  const [isMovingY, setIsMovingY] = useState(false);
  const [isMovingX, setIsMovingX] = useState(false);

  const LimitMovementThreshold = 60;
  const stickSize = 160;

  // const xAxisOriginalPosition = {x: (width * 0.2) - (200 / 2), y: (height * 0.96) - (200 / 2)};
  const xAxisOriginalPosition = {x: stickSize + (width * 0.05) - (stickSize / 2), y: (height * 0.92) - (stickSize / 2)};
  const yAxisOriginalPositon = {x: (width * 0.95) - (stickSize / 2), y: (height * 0.92) - (stickSize / 2)};

  useEffect(() => {
    let testInterval = null;
    if (isMovingY === true) {
      testInterval = setInterval(() => {
        moveLinearX(evaluateYAxisMovement(yAxisOriginalPositon.y, yAxisControl.current.y()));
      }, 300);
    } else {
      clearInterval(testInterval);
    }

    return () => {
      clearInterval(testInterval);
    };
  }, [isMovingY]);

  useEffect(() => {
    let testInterval = null;
    if (isMovingX === true) {
      testInterval = setInterval(() => {
        moveAngularZ(evaluateYAxisMovement(xAxisOriginalPosition.x, xAxisControl.current.x()));
      }, 300);
    } else {
      clearInterval(testInterval);
    }

    return () => {
      clearInterval(testInterval);
    };
  }, [isMovingX]);

  const moveLinearX = (movement) => {
    socket.emit('Move', {
      'linear_x': movement,
      'angular_z': 0
    });
  };

  const moveAngularZ = (movement) => {
    socket.emit('Move', {
      'linear_x': 0,
      'angular_z': movement
    });
  };

  const stop = () => {
    socket.emit('Move', {
      'linear_x': 0,
      'angular_z': 0
    });
  };

  const limitPosition = (positionAxis, original) => {
    if (positionAxis < original - LimitMovementThreshold) {
      return original - LimitMovementThreshold;
    }

    if (positionAxis > original + LimitMovementThreshold) {
      return original + LimitMovementThreshold;
    }

    return positionAxis;
  };

  const dragBoundFuncXHandler = position => {
    return {
      x: limitPosition(position.x, xAxisOriginalPosition.x),
      y: xAxisControl.current.absolutePosition().y
    };
  };

  const dragBoundFuncYHandler = position => {
    return {
      x: yAxisControl.current.absolutePosition().x,
      y: limitPosition(position.y, yAxisOriginalPositon.y)
    };
  };

  // CONSTOL FUNCITON
  const evaluateYAxisMovement = (originalPosition, currentPosition) => {
    const evalPosition = originalPosition - currentPosition;

    if (evalPosition > 0) {
      if (evalPosition > 40)
        return 0.3;
      if (evalPosition > 20)
        return 0.2;
      return 0.1;
    }

    if (evalPosition < 0) {
      if (evalPosition < -40)
        return -0.3;
      if (evalPosition < -20)
        return -0.2;
      return -0.1;
    }

    // WITHOUT MOVEMENT
    return 0;
  };

  const onDragYAxis = (event) => {
    // console.log('drag Y', yAxisControl.current.y());
    setIsMovingY(true);
  };

  const onDragXAxis = (event) => {
    // console.log('drag X', xAxisControl.current.x());
    setIsMovingX(true);
  };

  const onDragEndYAxis = (event) => {
    setIsMovingY(false);
    yAxisControl.current.position({x: yAxisOriginalPositon.x, y: yAxisOriginalPositon.y});
    stop();
    // console.log('on End Drag Y', yAxisControl.current.y());
  };

  const onDragEndXAxis = (event) => {
    setIsMovingX(false);
    xAxisControl.current.position({x: xAxisOriginalPosition.x, y: xAxisOriginalPosition.y});
    stop();
    // console.log('on End Drag x', xAxisControl.current.x());
  };

  return (
    <RobotControlsContainer>
      <Stage width={width} height={height}>
        <Layer>
          <Group name="xAxisControlGroup">
            <Circle width={stickSize} height={stickSize}
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(0,0,0,0.7)"
                    x={xAxisOriginalPosition.x}
                    y={xAxisOriginalPosition.y}/>
            <Circle width={stickSize * 0.6} height={stickSize * 0.6}
                    fill="rgba(24,183,242,0.4)"
                    x={xAxisOriginalPosition.x}
                    y={xAxisOriginalPosition.y}
                    draggable={true}
                    onDragMove={onDragXAxis}
                    dragBoundFunc={dragBoundFuncXHandler}
                    onDragEnd={onDragEndXAxis}
                    ref={xAxisControl}/>
          </Group>

          <Group name="yAxisControlGroup">
            <Circle width={stickSize} height={stickSize}
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(0,0,0,0.7)"
                    x={yAxisOriginalPositon.x}
                    y={yAxisOriginalPositon.y}/>
            <Circle width={stickSize * 0.6} height={stickSize * 0.6}
                    fill="rgba(239,88,80,0.4)"
                    x={yAxisOriginalPositon.x}
                    y={yAxisOriginalPositon.y}
                    draggable={true}
                    onDragMove={onDragYAxis}
                    dragBoundFunc={dragBoundFuncYHandler}
                    onDragEnd={onDragEndYAxis}
                    ref={yAxisControl}/>
          </Group>
        </Layer>
      </Stage>
    </RobotControlsContainer>
  );
};

export default RobotControls;
