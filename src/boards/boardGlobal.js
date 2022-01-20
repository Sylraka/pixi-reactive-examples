import {
    PixiCanvas, PixiTilingSprite, PixiSprite, PixiHtmlContainer, CursorType,
} from 'pixi-reactive';
import React, { useState } from "react";
import styled from 'styled-components';

import './boardGlobal.css';

import PrimitiveCard1 from '../elements/primitive-card1.js';
import PrimitiveCard2 from '../elements/primitive-card2.js';
import PrimitiveCard3 from '../elements/primitive-card3.js';

const textures = {
    tile: '/images/kacheln_01.svg',
    ship: '/images/spaceship.png'
};

/* let cardProps1 = {
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
 */
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

    //set the default state
    const [cardProps1, setCardProps] = useState({
        text: "default Text 1",
        x: 200,
        y: 300,
        width: 50
    });

    const [cardProps2, setCardProps2] = useState({
        text: "default Text 2",
        x: 200,
        y: 0,
        width: 200
    });

    const [cardProps3, setCardProps3] = useState({
        text: "default Text 3",
        x: 500,
        y: 300,
        width: 50
    });

    function changeCardProps() {
        setCardProps({
            ...cardProps1,
            text: "new text1",
            x: 0
        });
        setCardProps2({
            ...cardProps2,
            text: "new text2",
            x: 0
        });
        setCardProps3({
            ...cardProps2,
            text: "new text3",
            x: 300
        });
    }

    // render() {
    return (
        <div>
            <h1>Board Global is loaded</h1>
            <div className="canvas-wrapper" >
                <PixiCanvas textures={textures}>
                    <PixiTilingSprite texture={'tile'} tileScaleX={0.4} tileScaleY={0.4} />
                    <PixiSprite texture={'ship'} alignY={0.5} alignX={0.5}
                        cursor={CursorType.Help}
                        buttonMode={true} interactive={true} onClick={changeCardProps} >
                        <PixiHtmlContainer >
                            <Balloon >{'click here to change the props'}</Balloon>
                        </PixiHtmlContainer>
                    </PixiSprite>
                    <PrimitiveCard1 cardProps={cardProps1} />
                    <PrimitiveCard3 cardProps={cardProps3} />
                    <PrimitiveCard2 cardProps={cardProps2} />
                </PixiCanvas>
            </div>
        </div>
    )
}

export default BoardGlobal;

