import React, {useEffect} from 'react';
import styles from './styles.module.css';
import icon from './icons/player-one.svg';
import {useSelector, useDispatch} from 'react-redux';
import {motion} from 'framer-motion';

function PlayerOneScore() {
    const playerOneScore = useSelector(state => state.playerOneScore);
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const gameOver = useSelector(state => state.gameOver);
    const dispatch = useDispatch();

    const variants = {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            transition: {scale: {
                type: 'spring',
                stiffness: 300,
                damping: 5
            }}
        }
    }

    useEffect(() => {
        if(!gameOver) return;

        if(winningPlayer === 1)
            dispatch({type: 'update player one score'})

    }, [gameOver])

    return(
        <motion.section className={styles.container} variants={variants}>
            <img src={icon} className={styles.playerIcon}/>
            <h1 className={styles.title}>
                Player 1
            </h1>
            <p className={styles.score}>
                {playerOneScore}
            </p>
        </motion.section>
    )
}

export default PlayerOneScore;