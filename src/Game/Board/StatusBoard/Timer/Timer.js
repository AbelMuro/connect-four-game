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
        if(timer === 30){
            dispatch({type: 'set winning player', player: currentTurn === 'player 1' ? 2 : 1});            
            dispatch({type: 'end game'});
        }
    }, [timer])

    useEffect(() => {
        if(reset){
            setTimer(0);
            dispatch({type: 'cancel reset'});
        }        
    }, [reset])

    useEffect(() => {
        if(pause){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        else if(!timerRef.current){
            timerRef.current = setInterval(() => {
                setTimer(prevState => prevState + 1);
            }, 1000)
        }
    }, [pause])

    useEffect(() => {
        if(timerRef.current) 
            clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1);
        }, 1000)
        setTimer(0);            
    }, [currentTurn])


    return currentTurn === 'player 1' ? 
        <section className={styles.playerOne}>
            <h1 className={styles.title}>
                Player 1's turn
            </h1>
            <p className={styles.timer}>
                {timer}s
            </p>
        </section> 
        : 
        <section className={styles.playerTwo}>
            <h1 className={styles.title}>
                Player 2's turn
            </h1>
            <p className={styles.timer}>
                {timer}s
            </p>
        </section>
    
}

export default memo(Timer);