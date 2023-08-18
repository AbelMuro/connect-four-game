import React, {useEffect} from 'react';
import styles from './styles.module.css';
import HeaderBar from './HeaderBar';
import Board from './Board';

function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#7945FF';
    }, [])

    return(
        <main className={styles.container}>
            <HeaderBar/>
            <Board/>
        </main>
    )
}

export default Game;