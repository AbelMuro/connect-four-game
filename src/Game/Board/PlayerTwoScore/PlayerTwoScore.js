import React, {useEffect} from 'react';
import styles from  './styles.module.css';
import icon from './icons/player-two.svg';
import {useSelector, useDispatch} from 'react-redux';
import {motion} from 'framer-motion';

function PlayerTwoScore() {
    const playerTwoScore = useSelector(state => state.playerTwoScore);
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

        if(winningPlayer === 2)
            dispatch({type: 'update player two score'})

    }, [gameOver])

    return(        
        <motion.section className={styles.container} variants={variants}>
            <img src={icon} className={styles.playerIcon}/>
            <h1 className={styles.title}>
                Player 2
            </h1>
            <p className={styles.score}>
                {playerTwoScore}
            </p>
        </motion.section>
    )
}

export default PlayerTwoScore;