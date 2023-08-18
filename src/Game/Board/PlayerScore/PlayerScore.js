import React, {memo, useEffect} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { useSelector } from 'react-redux';

function PlayerScore({player}) {
    const score = useSelector(state => {
        if(player === 1)
            return state.playerOneScore;
        else
            return state.playerTwoScore;
    })
    
    return(
        <section className={styles.container}>
            <img 
                src={player === 1 ? icons['playerOne'] : icons['playerTwo']}
                className={styles.playerIcon}/>

            <h1 className={styles.title}>
                {player === 1 ? 'Player 1' : 'Player 2'}
            </h1>
            <p className={styles.score}>
                {score}
            </p>
        </section>
    )
}

export default memo(PlayerScore);