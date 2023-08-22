import React, {useEffect} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../Hooks/useMediaQuery.js';

function MainMenu() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 520px)');

    const handleRules = () => {
        navigate('/rules');
    }

    const handleStart = () => {
        navigate('/game');
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = mobile ? '#7945FF' : '#5C2DD5';
    }, [mobile])

    return(
        <div className={styles.center_container}>
            <motion.main 
                className={styles.container} 
                initial={{scale: 0}}
                animate={{scale: 1, transition: {scale: {type: 'spring', stiffness: 150, damping: 6}}}}>
                    <img className={styles.logo} src={icons['logo']}/>
                    <button className={styles.pvpButton} onClick={handleStart}>
                        <span>
                            Play vs Player
                        </span>
                        <img src={icons['smiley']}/>
                    </button>
                    <button onClick={handleRules} className={styles.rulesButton}>
                        Game Rules
                    </button>
            </motion.main>            
        </div>

    )
}

export default MainMenu