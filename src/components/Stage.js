import React from 'react';

// Styled Components
import { StyledStage } from './styles/StyledStage';

//Components
import Cell from './Cell';

export default function Stage({ stage }) {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell, x) => <Cell key={ x } type={ cell[0] }/>))}
        </StyledStage>
    )
}
