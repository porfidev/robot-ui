import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Circle, Group, Image, Layer, Stage } from 'react-konva';
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
  const LimitMovementThreshold = 60;

  const xAxisOriginalPosition = {x: width * 0.26 - (200 / 2), y: height * 0.96 - (200 / 2)};
  const yAxisOriginalPositon = {x: width * 0.96 - (200 / 2), y: height * 0.96 - (200 / 2)};

  const goAhead = (movement) => {
    socket.emit('Move', {
      "linear_x": movement,
      "angular_z": 0
    });
  };

  const stop = () => {
    socket.emit('Move', {
      "linear_x": 0,
      "angular_z": 0
    });
  }

  const goBackward = () => {
    socket.emit('Move', {
      "linear_x": -0.3,
      "angular_z": 0
    });
  };

  const handleDrag = (event) => {
    console.log('dragging');
    // setState({...state, x: event.evt.x, y: 200});
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

  const dragEndHandler = () => {
    // setState({...state, x: 50, y: 50});
    console.log('dragend');
    xAxisControl.current.position({x: xAxisOriginalPosition.x, y: xAxisOriginalPosition.y});
    yAxisControl.current.position({x: yAxisOriginalPositon.x, y: yAxisOriginalPositon.y});
  };

  // CONSTOL FUNCITON

  const [isMovingY, setIsMovingY] = useState(false);

  const evaluateYAxisMovement = (yPosition) => {
    const evalPosition = yAxisOriginalPositon.y - yPosition;

    console.log('EVAL PO', evalPosition);
    if(evalPosition === 0) {
      return 0;
    }

    if(evalPosition > 0) {
      if(evalPosition > 40)
        return 0.3;
      if(evalPosition > 20)
        return 0.2
      return 0.1
    }

    if(evalPosition < 0) {
      if(evalPosition < -40)
        return -0.3;
      if(evalPosition < -20)
        return -0.2;
      return -0.1
    }

    return 0;
  };

  useEffect(() => {
    let testInterval = null;
    if (isMovingY === true) {
      testInterval = setInterval(() => {
        console.log('current Y postion', yAxisControl.current.y());
        console.log('Movement', evaluateYAxisMovement(yAxisControl.current.y()));
        goAhead(evaluateYAxisMovement(yAxisControl.current.y()));
      }, 300);
    } else {
      clearInterval(testInterval);
    }

    return () => {
      clearInterval(testInterval);
    };
  }, [isMovingY]);

  const onDragYAxis = (event) => {
    console.log('drag Y', yAxisControl.current.y());
    setIsMovingY(true);
  };

  const onDragEndYAxis = (event) => {
    setIsMovingY(false);
    yAxisControl.current.position({x: yAxisOriginalPositon.x, y: yAxisOriginalPositon.y});
    stop();
    console.log('on End Drag Y', yAxisControl.current.y());
  };

  return (
    <RobotControlsContainer>
      <Stage width={width} height={height}>
        <Layer>
          <Group name="xAxisControlGroup">
            <Circle width={150} height={150}
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(0,0,0,0.7)"
                    x={xAxisOriginalPosition.x}
                    y={xAxisOriginalPosition.y}/>
            <Circle width={90} height={90}
                    fill="green"
                    x={xAxisOriginalPosition.x}
                    y={xAxisOriginalPosition.y}
                    draggable={true}
                    onDragMove={handleDrag}
                    dragBoundFunc={dragBoundFuncXHandler}
                    onDragEnd={dragEndHandler}
                    ref={xAxisControl}/>
          </Group>

          <Group name="yAxisControlGroup">
            <Circle width={150} height={150}
                    fill="rgba(0,0,0,0.5)"
                    stroke="rgba(0,0,0,0.7)"
                    x={yAxisOriginalPositon.x}
                    y={yAxisOriginalPositon.y}/>
            <Circle width={90} height={90}
                    fill="green"
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
