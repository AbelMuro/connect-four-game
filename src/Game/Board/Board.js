import React, {useState} from 'react';
import PlayerScore from './PlayerScore';
import Timer from './Timer';
import styles from './styles.module.css';
import images from './images'
import Column from './Column';


function Board() {
    const [currentColumn, setCurrentColumn] = useState();

    const handleEnter = (e) => {
        const id = Number(e.target.getAttribute('id'));
        setCurrentColumn(id)
    }

    const handleLeave = () => {
        setCurrentColumn(-1);
    }

    const handleDropCounter = (e) => {
        if(!e.target.matches('.' + styles.columns)) return;

    }

    return(
        <div className={styles.container}>
            <PlayerScore player={1}/>
            <div className={styles.board} onMouseLeave={handleLeave} onClick={handleDropCounter}>
                <img src={images['blackLayer']} className={styles.layer}/>
                <img src={images['whiteLayer']} className={styles.layer}/>
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={0} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={1} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={2} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={3} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={4} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={5} />
                <Column currentColumn={currentColumn} handleEnter={handleEnter} id={6} />
                <Timer/>
            </div>
            <PlayerScore player={2}/>
        </div>
    )
}

export default Board;