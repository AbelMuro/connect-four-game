import React, {useState, useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import Counter from './Counter';
import icons from './icons';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '../../../Hooks/useMediaQuery';

function Column({hoverColumn, handleEnter, id}) {
    const [counters, setCounters] = useState(0);
    const currentTurn = useSelector(state => state.currentTurn);
    const gameOver = useSelector(state => state.gameOver);
    const reset = useSelector(state => state.reset);
    const arrowRef = useRef();
    const columnRef = useRef();
    const dispatch = useDispatch();
    const mobile = useMediaQuery('(max-width: 680px)');

    const handleAddCounter = () => {
        setCounters(counters + 1);
    }

    useEffect(() => {
        if(hoverColumn !== id) return;

        if(currentTurn === 'player 1')
            arrowRef.current.src = icons['redMarker'];
        else
            arrowRef.current.src = icons['yellowMarker']
    }, [hoverColumn, currentTurn])

    useEffect(() => {
        columnRef.current.style.pointerEvents = gameOver ? 'none' : '';
        if(!gameOver)
            setCounters(0);
    },[gameOver])

    useEffect(() => {
        if(reset){
            setCounters(0);
            dispatch({type: 'cancel reset'});
        }   
    }, [reset])

    return(                
        <div className={styles.columns} onMouseEnter={handleEnter} id={id} onClick={handleAddCounter} ref={columnRef}>
            {hoverColumn === id && <motion.img className={styles.arrow} ref={arrowRef} layoutId='arrow'/>}
            {counters >= 1 && 
                <Counter column={id} row={5} initial={{y: -430}}/>}
            {counters >= 2 && 
                <Counter column={id} row={4} initial={{y: -370}}/>}
            {counters >= 3 && 
                <Counter column={id} row={3} initial={{y: -280}}/>}
            {counters >= 4 && 
                <Counter column={id} row={2} initial={{y: -180}}/>}
            {counters >= 5 && 
                <Counter column={id} row={1} initial={{y: -100}}/>}
            {counters >= 6 && 
                <Counter column={id} row={0} initial={{y: -20}}/>}
        </div>
    )
}

export default memo(Column);