import React from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';

function HeaderBar() {
    return( 
        <header className={styles.container}>
            <button className={styles.menuButton}>
                MENU
            </button>
            <img className={styles.logo} src={logo}/>
            <button className={styles.restartButton}>
                Restart
            </button>
        </header>
    )
}

export default HeaderBar;