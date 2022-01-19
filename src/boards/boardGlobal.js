import {
    PixiCanvas, PixiTilingSprite, PixiSprite, PixiHtmlContainer, CursorType,
} from 'pixi-reactive';
import React from "react";
import styled from 'styled-components';

import './boardGlobal.css';

import PrimitiveCard1 from '../elements/primitive-card1.js';
import PrimitiveCard2 from '../elements/primitive-card2.js';

const textures = {
    tile: '/images/kacheln_01.svg',
    ship: '/images/spaceship.png'
};

let cardProps1 = {
    width: 50,
    text: 'text1',
    x: 100,
    y: 100
}
let cardProps2 = {
    width: 200,
    text: 'text2',
    x: 300,
    y: 100
}

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

const BoardGlobal = () => {
    return (
        <div>
            <h1>Board Global is loaded</h1>
            <div className="canvas-wrapper" >
                <PixiCanvas textures={textures}>
                    <PixiTilingSprite texture={'tile'} tileScaleX={0.4} tileScaleY={0.4} />
                    <Ship />
                    <PrimitiveCard1 cardProps={cardProps1} />
                    <PrimitiveCard2 cardProps={cardProps2} />
                </PixiCanvas>
            </div>
        </div>
    )
}
export default BoardGlobal;


const Ship = () => {
    return (
        <>

            <PixiSprite texture={'ship'} alignY={0.5} alignX={0.5}
                cursor={CursorType.Help}
                buttonMode={true} interactive={true} onClick={clicktest} >
                <PixiHtmlContainer >
                    <Balloon >{'click here to change the props'}</Balloon>
                </PixiHtmlContainer>
            </PixiSprite>

        </>

    );
}


const clicktest = () => {
    console.log("the function clicktest!");
    cardProps1.text = 'neuer text';
    cardProps1.x = 0;

    cardProps2.text = 'neuer text';
    cardProps2.x = 0;
}