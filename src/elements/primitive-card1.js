import React from "react";
import {
  PixiContainer,
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
    console.log('primitive-card1 updated!');
  }

  
  render() {
    return (
      <>
 
      <PixiContainer >
      <PixiSprite texture={'ship'} alignY={0.5} alignX={0.5}
                cursor={CursorType.Help}
                buttonMode={true} interactive={true} onClick={printProps(this.props.cardProps)} />

      </PixiContainer> 
      </>
    );
  }
}

const printProps = (props) => {
  console.log('you clicked printProps1! Your props:');
  console.log(props)

}



export default PrimitiveCard;
