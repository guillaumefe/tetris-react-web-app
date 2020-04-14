import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import UploadButton from './UploadButton';

export default function Tetris() {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rwosCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rwosCleared);


    console.log('re-render');


    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 })
        }
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const drop = () => {
        // Increase level when play has cleared 10 rows
        if(rows > (level + 1) * 10){
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // Game over
            if (player.pos.y < 1) {
                console.log("GAME OVER");
                setGameOver(true);
                setDropTime(null);
            }

            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }


    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {// left arrow key
                movePlayer(-1);
            } else if (keyCode === 39) {// right arrow key
                movePlayer(1)
            } else if (keyCode === 40) {// down arrow key
                dropPlayer()
            } else if (keyCode === 38) {// up arrow key
                playerRotate(stage, 1);
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`Rows: ${rows}`} />
                                <Display text={`Level: ${level}`}/>
                            </div>
                        )}
                    <StartButton callback={startGame} />
                    <UploadButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}
