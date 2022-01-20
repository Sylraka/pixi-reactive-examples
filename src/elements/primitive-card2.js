import React, { useCallback, useReducer } from "react";
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



class PrimitiveCard extends React.Component {

  componentDidUpdate() {
    console.log('primitive-card2 updated!');
  }


  render() {
    return (
      <>
      <PixiGraphics  x={this.props.cardProps.x} y={this.props.cardProps.y} onClick={() => printProps(this.props.cardProps)} CursorType={CursorType.Help}>
        <PixiHtmlContainer>
          <Balloon >{this.props.cardProps.text}</Balloon>
        </PixiHtmlContainer>
        <Rectangle x={20} y={20} width={this.props.cardProps.width} height={200} borderRadius={10}>
          <FillStyle color={0x444444} alpha={0.75} />
        </Rectangle>

      </PixiGraphics>
      </>
    );
  }
}

const printProps = (props) => {
  console.log('you clicked printProps2! Your props:');
  console.log(props)

}



export default PrimitiveCard;
