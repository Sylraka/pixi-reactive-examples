import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  PixiHtmlContainer,
  LineStyle,
  PixiGraphics,
  Rectangle,
  PixiContainer,
  FillStyle,
  PixiSprite,
  CursorType
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
    console.log('primitive-card2 updated!');
  });




    return (
      <>
      <PixiGraphics  x={props.cardProps.x} y={props.cardProps.y} buttonMode={true} interactive={true} onClick={() => printProps(props.cardProps)} CursorType={CursorType.Wait}>
        <PixiHtmlContainer>
          <Balloon >{props.cardProps.text}</Balloon>
        </PixiHtmlContainer>
        <Rectangle x={20} y={20} width={props.cardProps.width} height={200} borderRadius={10}>
          <FillStyle color={0x444444} alpha={0.75} />
        </Rectangle>

      </PixiGraphics>
      </>
    );
  }


const printProps = (props) => {
  console.log('you clicked printProps2! Your props:');
  console.log(props)

}



export default PrimitiveCard;
