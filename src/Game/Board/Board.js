import React, {useState, memo} from 'react';
import PlayerOneScore from './PlayerOneScore';
import PlayerTwoScore from './PlayerTwoScore';
import StatusBoard from './StatusBoard';
import styles from './styles.module.css';
import Column from './Column';
import {motion} from 'framer-motion';

function Board() {
    const [hoverColumn, setHoverColumn] = useState();

    const variants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {
                scale: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 5,                    
                }
            }
        }
    }

    const handleEnter = (e) => {
        const id = Number(e.target.getAttribute('id'));
        setHoverColumn(id)
    }

    const handleLeave = () => {
        setHoverColumn(-1);
    }

    const handleDropCounter = (e) => {
        if(!e.target.matches('.' + styles.columns)) return;

    }

    return(
        <div className={styles.container} initial={'hidden'} animate={'show'} transition={{staggerChildren: 0.6}}>
            <PlayerOneScore/>
            <div layout className={styles.board} onMouseLeave={handleLeave} onClick={handleDropCounter}>
                <img className={styles.layer}/>
                <img className={styles.layer}/>
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={0} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={1} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={2} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={3} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={4} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={5} />
                <Column hoverColumn={hoverColumn} handleEnter={handleEnter} id={6} />
                <StatusBoard />
            </div>
            <PlayerTwoScore/>
        </div>
    )
}

export default memo(Board);