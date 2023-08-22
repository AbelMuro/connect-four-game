import React, {useState, useEffect, memo, useRef} from 'react';
import styles from './styles.module.css';
import backgroundImages from './images';
import {useSelector, useDispatch} from 'react-redux';

function Timer() {
    const [timer, setTimer] = useState(0);
    const currentTurn = useSelector(state => state.currentTurn);
    const reset = useSelector(state => state.reset);
    const pause = useSelector(state => state.pause);
    const containerRef = useRef();
    const timerRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if(pause)
            clearInterval(timerRef.current);
        
        if(reset){
            setTimer(0);
            dispatch({type: 'cancel reset'});
        }        
    }, [pause, reset])

    useEffect(() => {
        if(timer === 30){
            dispatch({type: 'set winning player', player: currentTurn === 'player 1' ? 2 : 1});            
            dispatch({type: 'end game'});
        }
    }, [timer])

    useEffect(() => {
        if(timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1);
        }, 1000)
        setTimer(0);
    }, [currentTurn])

    useEffect(() => {
        containerRef.current.style.backgroundImage = currentTurn === 'player 1' ? 
            `url(${backgroundImages.playerOneBackground})` :
            `url(${backgroundImages.playerTwoBackground})`

        containerRef.current.style.color = currentTurn === 'player 1' ? 'white' : 'black';
    }, [currentTurn])


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