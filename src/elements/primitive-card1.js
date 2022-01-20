import React, { useState, useEffect } from "react";
import {
  PixiContainer,
  PixiSprite,
  CursorType,
  PixiHtmlContainer
} from "pixi-reactive";
//not worked: CornerStyle

// see https://styled-components.com/
import styled from 'styled-components';

const textures = {
  ship: '/images/spaceship.png'
};

const Balloon = styled.div`
  width: calc(100% - 10px);
  padding: 5px;
  background: white;
  border: solid 2px black;
  border-radius: 5px;
  margin-top: 50px;
  color: black;
  text-align: center;
`;




const PrimitiveCard = (props) => {

  useEffect(() => {
    console.log('primitive-card1 updated!');
  });

  const [area, setArea] = useState({
    x: 0, y: 0, width: 200, height: 200
  });


  return (
    <>
      <PixiContainer x={props.cardProps.x} y={props.cardProps.y}   >
        <PixiSprite texture={'ship'} alignY={0.5} alignX={0.5}  cursor={CursorType.Help} hitArea={area} onClick={() => printProps(props.cardProps)}
          buttonMode={true} interactive={true} />
        <PixiHtmlContainer  >
          <Balloon >{props.cardProps.text}</Balloon>
        </PixiHtmlContainer>
      </PixiContainer>
    </>
  );

}

const printProps = (props) => {
  console.log('you clicked printProps1! Your props:');
  console.log(props)

}



export default PrimitiveCard;
