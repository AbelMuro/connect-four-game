import React, {useState, useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import icons from './icons';
import { useSelector, useDispatch } from 'react-redux';


//this is where i left off, i will need to get the winningCounters from the board reducer and use it in this component
function Counter({column, row ,initial}) {
    const [displayWhiteCircle, setDisplayWhiteCircle] = useState(false)
    const currentTurn = useSelector(state => state.currentTurn);
    const winningCounters = useSelector(state => state.board.winningCounters);
    const counterRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentTurn === 'player 1')
            counterRef.current.src = icons['redCounter'];
        else
            counterRef.current.src = icons['yellowCounter'];
    }, [])

    useEffect(() => {
        dispatch({type: 'change turn'});
    }, [])

    useEffect(() => {
        const player = currentTurn === 'player 1' ? 1 : 2
        dispatch({type: 'update board', column, row, player})
        dispatch({type: 'check board'});
    }, [])

    useEffect(() => {
        if(!winningCounters.length) return;
        
        winningCounters.forEach((counters) => {
            if(counters[0] === row && counters[1] === column){
                console.log(row, column)
                console.log(counters)
                console.log('')
                setDisplayWhiteCircle(true);
                dispatch({type: 'end game'});
            }           
        })
    }, [winningCounters])

    const transition = {
        y: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
            ease: 'easeInOut'
        }
    }

    return(
        <motion.div className={styles.container} initial={initial} animate={{y: 0}} transition={transition}>
            <img className={styles.counter} ref={counterRef}/> 
            {displayWhiteCircle && <div className={styles.winningCircle}></div>}           
        </motion.div>

    )
}

export default memo(Counter);