import React from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';

function DisplayWinner() {
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const dispatch = useDispatch();

    const handlePlayAgain = () => {
        dispatch({type: 'reset turn'});
        dispatch({type: 'reset board'});
        dispatch({type: 'start game'});
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.playerWon}>
                {winningPlayer === 1 ? 'Player 1' : 'Player 2'}
            </h2>
            <h1 className={styles.title}>
                WINS
            </h1>
            <button className={styles.playAgainButton} onClick={handlePlayAgain}>
                Play again
            </button>
        </div>

    )
}

export default DisplayWinner;