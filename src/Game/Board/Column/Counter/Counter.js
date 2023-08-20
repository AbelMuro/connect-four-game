import React, {useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import icons from './icons';
import { useSelector, useDispatch } from 'react-redux';


//this is where i left off, i will need to get the winningCounters from the board reducer and use it in this component
function Counter({column, row ,initial}) {
    const currentTurn = useSelector(state => state.currentTurn);
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

    const transition = {
        y: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
            ease: 'easeInOut'
        }
    }

    return(
        <motion.img 
            initial={initial} 
            animate={{y: 0}} 
            className={styles.counter} 
            transition={transition}
            ref={counterRef}/>
    )
}

export default memo(Counter);