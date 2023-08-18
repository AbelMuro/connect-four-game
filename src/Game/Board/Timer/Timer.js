import React, {useState, useEffect, memo, useRef} from 'react';
import styles from './styles.module.css';
import backgroundImages from './images';
import {useSelector} from 'react-redux';

function Timer() {
    const [timer, setTimer] = useState(0);
    const currentTurn = useSelector(state => state.currentTurn);
    const containerRef = useRef();

    useEffect(() => {
        setInterval(() => {
            setTimer(prevState => prevState + 1);
        }, 1000)
    }, [])

    useEffect(() => {
        containerRef.current.style.backgroundImage = `url(${backgroundImages.playerOneBackground})`
    }, [])

    return(
        <section className={styles.container} ref={containerRef}>
            <h1 className={styles.title}>
                {currentTurn === 'player 1' ? "Player 1's turn" : "Player 2's turn"}
            </h1>
            <p className={styles.timer}>
                {timer}s
            </p>
        </section>
    )
}

export default memo(Timer);