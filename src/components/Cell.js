import React from 'react';
import { TETROMINOS } from '../tetrominos';

// Styled Components
import { StyledCell } from './styles/StyledCell';

const Cell = ({ type }) => (
<StyledCell type={ type } color={ TETROMINOS[type].color }></StyledCell>
) 

export default React.memo(Cell);
