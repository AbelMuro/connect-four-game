import React, {useEffect} from 'react';
import styles from './styles.module.css';
import icon from './icons/player-one.svg';
import {useSelector, useDispatch} from 'react-redux';

function PlayerOneScore() {
    const playerOneScore = useSelector(state => state.playerOneScore);
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const gameOver = useSelector(state => state.gameOver);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!gameOver) return;

        if(winningPlayer === 1)
            dispatch({type: 'update player one score'})

    }, [gameOver])

    return(
        <section className={styles.container}>
            <img src={icon} className={styles.playerIcon}/>
            <h1 className={styles.title}>
                Player 1
            </h1>
            <p className={styles.score}>
                {playerOneScore}
            </p>
        </section>
    )
}

export default PlayerOneScore;