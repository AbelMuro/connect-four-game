import React, {memo} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function PlayerScore({player}) {
    return(
        <section className={styles.container}>
            <img 
                src={player === 1 ? icons['playerOne'] : icons['playerTwo']}
                className={styles.playerIcon}/>

            <h1 className={styles.title}>
                {player === 1 ? 'Player 1' : 'Player 2'}
            </h1>
            <p className={styles.score}>
                23
            </p>
        </section>
    )
}

export default memo(PlayerScore);