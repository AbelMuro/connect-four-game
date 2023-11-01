import React, {useEffect} from 'react';
import styles from './styles.module.css';
import HeaderBar from './HeaderBar';
import Board from './Board';
import BackgroundImage from './BackgroundImage';
import redCounter from './Board/Column/Counter/icons/counter-red-large.svg';
import yellowCounter from './Board/Column/Counter/icons/counter-yellow-large.svg';
import mobileRedCounter from './Board/Column/Counter/icons/counter-red-small.svg';
import mobileYellowCounter from './Board/Column/Counter/icons/counter-yellow-small.svg';

function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#7945FF';
    }, [])

    return(
        <>
            <img src={redCounter} style={{display: 'none'}}/>                   {/* i load the svg files here to avoid any visual bugs*/}
            <img src={yellowCounter} style={{display: 'none'}}/>
            <img src={mobileRedCounter} style={{display: 'none'}}/>
            <img src={mobileYellowCounter} style={{display: 'none'}}/>
            <main className={styles.container}>
                <HeaderBar/>
                <Board/>
            </main>     
            <BackgroundImage/>   
        </>

    )
}

export default Game;