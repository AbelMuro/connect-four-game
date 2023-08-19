import React from 'react';
import PlayerScore from './PlayerScore';
import Timer from './Timer';
import styles from './styles.module.css';
import icons from './icons';


//now i need to use framer motion with layoutid
function Board() {
    return(
        <div className={styles.container}>
            <PlayerScore player={1}/>
            <div className={styles.board}>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/> 
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <div className={styles.columns}>
                    <img className={styles.arrow} src={icons['redMarker']}/>
                </div>
                <Timer/>
            </div>
            <PlayerScore player={2}/>
        </div>
    )
}

export default Board;