import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';

function BackgroundImage() {
    const winningPlayer = useSelector(state => state.board.winningPlayer);
    const gameOver = useSelector(state => state.gameOver);
    const containerRef = useRef();

    useEffect(() => {
        if(!gameOver) 
            containerRef.current.style.backgroundColor = '';
        else
            containerRef.current.style.backgroundColor = winningPlayer === 1 ? '#FD6687' : '#FFCE67';
        
    }, [gameOver])

    return(
        <motion.div 
            initial={{y: 100}}
            animate={{y: 0}}
            className={styles.container} 
            ref={containerRef}></motion.div>
    )
}

export default BackgroundImage;