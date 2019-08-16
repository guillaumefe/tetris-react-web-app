import React from 'react';

//Styles
import { StyledDisplay } from './styles/StyledDisplay';


export default function Display({ gameOver, text }) {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}
