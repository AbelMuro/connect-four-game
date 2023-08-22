import React, {useEffect} from 'react';
import styles from './styles.module.css';
import checkIcon from './icon/icon-check.svg';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

//this is where i left off, i will need to style the numbers in the ordered list
function Rules() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#7945FF';
    }, [])

    return(
        <div className={styles.center_container}>
            <motion.main className={styles.container} 
                initial={{scale: 0}} 
                animate={{
                    scale: 1, 
                    transition: {scale: {type: 'spring', stiffness: 150, damping: 6 }}}}>
                <h1 className={styles.title}>
                    RULES
                </h1>
                <h2 className={styles.sub_title}>
                    objective
                </h2>
                <p className={styles.desc}>
                    Be the first player to connect 4 of the 
                    same colored discs in a row (either vertically, 
                    horizontally, or diagonally).
                </p>
                <h2 className={styles.sub_title}>
                    how to play
                </h2>
                <ol className={styles.rules}>
                    <li className={styles.rule}>
                        <span>
                            Red goes first in the first game.
                        </span>
                    </li>
                    <li className={styles.rule}>
                        <span>
                            Players must alternate turns, 
                            and only one disc can be dropped in each turn. 
                        </span>
                    </li>
                    <li className={styles.rule}>
                        <span>
                            The game ends when there is a 4-in-a-row or a stalemate.
                        </span>
                    </li>
                    <li className={styles.rule}>
                        <span>
                            The starter of the previous game goes second on the next game.
                        </span>
                    </li>
                </ol>
                <button className={styles.checkButton} onClick={handleGoBack}>
                    <img className={styles.checkIcon} src={checkIcon}/>
                </button>
            </motion.main>
        </div>

    )
}

export default Rules;