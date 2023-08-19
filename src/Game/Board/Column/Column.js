import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import Counter from './Counter';
import icons from './icons';
import { useSelector } from 'react-redux';

function Column({currentColumn, handleEnter, id}) {
    const [counters, setCounters] = useState(0);
    const currentTurn = useSelector(state => state.currentTurn);
    const arrowRef = useRef();

    const handleAddCounter = () => {
        setCounters(counters + 1);
    }

    useEffect(() => {
        if(currentColumn !== id) return;

        if(currentTurn === 'player 1')
            arrowRef.current.src = icons['redMarker'];
        else
            arrowRef.current.src = icons['yellowMarker']
    }, [currentColumn, currentTurn])

    return(                
        <div className={styles.columns} onMouseEnter={handleEnter} id={id} onClick={handleAddCounter}>
            {currentColumn === id && <motion.img className={styles.arrow} ref={arrowRef} layoutId='arrow'/>}
            {counters >= 1 && 
                <Counter column={currentColumn} row={5} initial={{y: -430}}/>}
            {counters >= 2 && 
                <Counter column={currentColumn} row={4} initial={{y: -370}}/>}
            {counters >= 3 && 
                <Counter column={currentColumn} row={3} initial={{y: -280}}/>}
            {counters >= 4 && 
                <Counter column={currentColumn} row={2} initial={{y: -180}}/>}
            {counters >= 5 && 
                <Counter column={currentColumn} row={1} initial={{y: -100}}/>}
            {counters >= 6 && 
                <Counter column={currentColumn} row={0} initial={{y: -20}}/>}
        </div>
    )
}

export default Column;