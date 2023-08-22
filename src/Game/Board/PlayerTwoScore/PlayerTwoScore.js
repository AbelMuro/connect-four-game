import React, {useEffect} from 'react';
import styles from  './styles.module.css';
import icon from './icons/player-two.svg';
import {useSelector, useDispatch} from 'react-redux';

function PlayerTwoScore() {
    const playerTwoScore = useSelector(state => state.playerTwoScore);
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const gameOver = useSelector(state => state.gameOver);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!gameOver) return;

        if(winningPlayer === 2)
            dispatch({type: 'update player two score'})

    }, [gameOver])

    return(        
        <section className={styles.container}>
            <img src={icon}
                className={styles.playerIcon}/>

            <h1 className={styles.title}>
                Player 2
            </h1>
            <p className={styles.score}>
                {playerTwoScore}
            </p>
        </section>
    )
}

export default PlayerTwoScore;