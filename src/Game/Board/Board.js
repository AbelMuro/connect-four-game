import React from 'react';
import PlayerScore from './PlayerScore';
import Timer from './Timer';
import styles from './styles.module.css';
import images from './images';

function Board() {
    return(
        <div className={styles.container}>
            <PlayerScore player={1}/>
            <div className={styles.board}>
                <img className={styles.boardLayer} src={images['boardLayerBlack']}/>
                <img className={styles.boardLayer} src={images['boardLayerWhite']}/>
                <Timer/>
            </div>
            <PlayerScore player={2}/>
        </div>
    )
}

export default Board;