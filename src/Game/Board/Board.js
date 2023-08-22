import React, {useState, memo} from 'react';
import PlayerOneScore from './PlayerOneScore';
import PlayerTwoScore from './PlayerTwoScore';
import StatusBoard from './StatusBoard';
import styles from './styles.module.css';
import images from './images'
import Column from './Column';


function Board() {
    const [hoverColumn, setHoverColumn] = useState();

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
        <div className={styles.container}>
            <PlayerOneScore/>
            <div className={styles.board} onMouseLeave={handleLeave} onClick={handleDropCounter}>
                <img src={images['blackLayer']} className={styles.layer}/>
                <img src={images['whiteLayer']} className={styles.layer}/>
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