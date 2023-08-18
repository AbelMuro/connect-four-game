import React from 'react';
import styles from './styles.module.css';


// this is where i left off, need to finish styling this component
function HeaderBar() {
    return( 
        <header className={styles.container}>
            <button className={styles.menuButton}>
                MENU
            </button>
            <img className={styles.logo}/>
            <button className={styles.restartButton}>
                Restart
            </button>
        </header>
    )
}

export default HeaderBar;