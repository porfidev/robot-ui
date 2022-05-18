import React, { useEffect, useRef, useState } from 'react';
import { Circle, Group, Image, Layer, Rect, Stage, Text } from 'react-konva';
import Konva from 'konva';
import { useWindowSize } from 'react-use';
import useImage from 'use-image';

const NavigationControl = () => {
  const url = 'https://i.pravatar.cc/300';
  const {width, height} = useWindowSize();
  const [urlImage, setUrlImage] = useState('https://i.pravatar.cc/300');
  const [image, status] = useImage(urlImage);
  const [state, setState] = useState({
    x: 50,
    y: 50,
    isDragging: false,
    id: null
  });

  const yAxisControl = useRef();
  const xAxisControl = useRef();

  const handleDrag = (event) => {
    console.log('dragging');
    // setState({...state, x: event.evt.x, y: 200});
  };

  const limitPosition = (positionAxis, original) => {
    console.log('OP', positionAxis, original)
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
      x: limitPosition(position.x, width * 0.20 - (200 / 2)),
      y: xAxisControl.current.absolutePosition().y
    };
  };

  const dragBoundFuncYHandler = position => {
    console.log('pis', position);
    return {
      x: yAxisControl.current.absolutePosition().x,
      y: limitPosition(position.y, height * 0.96 - (200 / 2)),
    };
  };

  const dragEndHandler = () => {
    // setState({...state, x: 50, y: 50});

    xAxisControl.current.position({x: width * 0.20 - (200 / 2), y: height * 0.96 - (200 / 2)});
    yAxisControl.current.position({x: width * 0.96 - (200 / 2), y: height * 0.96 - (200 / 2)});
  };

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
                    x={width * 0.20 - (200 / 2)}
                    y={height * 0.96 - (200 / 2)}/>
            <Circle width={90} height={90}
                    fill="green"
                    x={width * 0.20 - (200 / 2)}
                    y={height * 0.96 - (200 / 2)}
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
                    x={width * 0.96 - (200 / 2)}
                    y={height * 0.96 - (200 / 2)}/>
            <Circle width={90} height={90}
                    fill="green"
                    x={width * 0.96 - (200 / 2)}
                    y={height * 0.96 - (200 / 2)}
                    draggable={true}
                    onDragMove={handleDrag}
                    dragBoundFunc={dragBoundFuncYHandler}
                    onDragEnd={dragEndHandler}
                    ref={yAxisControl}/>
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default NavigationControl;
