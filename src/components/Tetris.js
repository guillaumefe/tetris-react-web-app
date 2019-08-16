import React from 'react';

import { createStage } from '../gameHelpers';

//Styles
import { StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

export default function Tetris() {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}
