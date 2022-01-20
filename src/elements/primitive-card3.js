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
    console.log('primitive-card3 updated!');
  });

  const [area, setArea] = useState({
    x: 200, y: 200, width: 200, height: 200
  });


  return (
    <>
      <PixiContainer x={props.cardProps.x} y={props.cardProps.y} hitArea={area} cursor={CursorType.Help} onClick={() => printProps(props.cardProps, area)}>
        <PixiSprite texture={'ship'} alignY={0.5} alignX={0.5}
          buttonMode={true} interactive={true} />
        <PixiHtmlContainer  >
          <Balloon >{props.cardProps.text}</Balloon>
        </PixiHtmlContainer>
      </PixiContainer>
    </>
  );

}

const printProps = (props, state) => {
  console.log('you clicked printProps3! Your props:');
  console.log(props)


  console.log('Your state:');
  console.log(state)
}



export default PrimitiveCard;
