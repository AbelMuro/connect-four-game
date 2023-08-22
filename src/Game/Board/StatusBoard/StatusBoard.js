import React from 'react';
import Timer from './Timer';
import DisplayWinner from './DisplayWinner';
import {useSelector} from 'react-redux';

function StatusBoard() {
    const gameOver = useSelector(state => state.gameOver);

    return gameOver ? <DisplayWinner/> : <Timer/>

    
}

export default StatusBoard;