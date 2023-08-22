import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';


//this is where i left off, i will need to finish the functionality for the restart button

function HeaderBar() {
    const [open, setOpen] = useState();
    const dispatch = useDispatch();
    const overlayRef = useRef();
    const dialogRef = useRef();
    const navigate = useNavigate();

    const handleMenu = () => {
        setOpen(!open);
    }

    const handleQuit = () => {
        navigate('/')
    }

    useEffect(() => {
        if(open)
            dispatch({type: 'pause'});
        else
            dispatch({type: 'resume'});
    }, [open])

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.50)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])

    return(
        <>
            <header className={styles.container}>
                <button className={styles.menuButton} onClick={handleMenu}>
                    MENU
                </button>
                <img className={styles.logo} src={logo}/>
                <button className={styles.restartButton}>
                    Restart
                </button>
            </header>    
            <div className={styles.overlay} ref={overlayRef}>
                <dialog open={true} className={styles.dialog} ref={dialogRef}>
                    <h1 className={styles.title}>
                        pause
                    </h1>
                    <button className={styles.continue} onClick={handleMenu}>
                        continue game
                    </button>
                    <button className={styles.restart}>
                        restart
                    </button>
                    <button className={styles.quit} onClick={handleQuit}>
                        quit game
                    </button>
                </dialog>                 
            </div>   
        </>
    )
}

export default HeaderBar;