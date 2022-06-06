import React, { useEffect, useRef, useState } from 'react';
import { Circle, Group, Image, Layer, Stage } from 'react-konva';
import { useWindowSize } from 'react-use';
import useImage from 'use-image';

const NavigationControl = () => {
  const url = 'https://i.pravatar.cc/300';
  const {width, height} = useWindowSize();
  const [urlImage, setUrlImage] = useState('https://i.pravatar.cc/300');
  const [image, status] = useImage(urlImage);
  const yAxisControl = useRef();
  const xAxisControl = useRef();

  const xAxisOriginalPosition = {x: width * 0.20 - (200 / 2), y: height * 0.96 - (200 / 2)};
  const yAxisOriginalPositon = {x: width * 0.96 - (200 / 2), y: height * 0.96 - (200 / 2)};

  const handleDrag = (event) => {
    console.log('dragging');
    // setState({...state, x: event.evt.x, y: 200});
  };

  const limitPosition = (positionAxis, original) => {
    console.log('OP', positionAxis, original);
    if (positionAxis < original - 50) {
      return original - 50;
    }

    if (positionAxis > original + 50) {
      return original + 50;
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
      y: limitPosition(position.y, height * 0.96 - (200 / 2))
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

  useEffect(() => {
    let testInterval = null;
    if(isMovingY === true) {
      testInterval = setInterval(() => {
        console.log('Me sigo moviendo tio');
      }, 100);
    } else {
      clearInterval(testInterval);
    }

    return () => {
      clearInterval(testInterval)
    }
  }, [isMovingY]);

  const onDragYAxis = (event) => {
    console.log('drag Y', event);
    setIsMovingY(true);
  }

  const onDragEndYAxis = (event) => {
    console.log('end Drag Y', event);
    setIsMovingY(false);
    yAxisControl.current.position({x: yAxisOriginalPositon.x, y: yAxisOriginalPositon.y});
  };

  const onTouchStar = () => {
    console.log('dedo sobre');
  }

  const onTouchEnd = () => {
    console.log('dejo de presionar');
  }

  return (
    <div>
      {/*<h3>Navigation Control</h3>*/}
      {/*<pre>{urlImage}</pre>*/}
      {/*<pre>{status}</pre>*/}
      {/*<pre>{width} -  {height}</pre>*/}
      {/*<pre>{JSON.stringify(state)}</pre>*/}
      <Stage width={width} height={height}>
        <Layer>
          <Image fill="red" width={width} height={width - 50} image={image}/>
        </Layer>
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
                    onTouchMove={onTouchStar}
                    onTouchEnd={onTouchEnd}
                    ref={yAxisControl}/>
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default NavigationControl;
