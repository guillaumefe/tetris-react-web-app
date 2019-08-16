import React from 'react';

// Styled Components
import { StyledDisplay } from './styles/StyledDisplay';


export default function Display({ gameOver, text }) {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}
