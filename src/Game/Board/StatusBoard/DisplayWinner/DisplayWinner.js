import React, {useEffect} from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {motion} from 'framer-motion';

function DisplayWinner() {
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const dispatch = useDispatch();

    const handlePlayAgain = () => {
        dispatch({type: 'reset turn'});
        dispatch({type: 'reset board'});
        dispatch({type: 'start game'});
    }

    const handleEnter = (e) => {
        e.target.style.backgroundColor = winningPlayer === 1 ? '#FD6687' : '#FFCE67';
        e.target.style.color = winningPlayer === 1 ? 'white' : 'black';
    }

    const handleLeave = (e) => {
        e.target.style.backgroundColor = ''
        e.target.style.color = '';
    }

    useEffect(() => {
        window.scrollBy({
            top: 9999,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return(
        <motion.div 
            className={styles.container}
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{type: 'spring', stiffness: 300, damping: 5}}>
            <h2 className={styles.playerWon}>
                {winningPlayer === 1 ? 'Player 1' : 'Player 2'}
            </h2>
            <h1 className={styles.title}>
                WINS
            </h1>
            <button 
                className={styles.playAgainButton} 
                onClick={handlePlayAgain} 
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}>
                Play again
            </button>
        </motion.div>

    )
}

export default DisplayWinner;