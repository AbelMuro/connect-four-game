import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import logo from './icons/logo.svg';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {motion} from 'framer-motion';

function HeaderBar() {
    const [open, setOpen] = useState();
    const currentTurn = useSelector(state => state.currentTurn);
    const dispatch = useDispatch();
    const overlayRef = useRef();
    const dialogRef = useRef();
    const navigate = useNavigate();

    const variants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {scale: {
                type: 'spring',
                stiffness: 300,
                damping: 4,
            }}
        }
    }

    const handleEnter = (e) => {
        if(currentTurn === 'player 1')
            e.target.style.backgroundColor = '#FD6687';
        else{
            e.target.style.backgroundColor = '#FFCE67';
            e.target.style.color = '#000000'
        }
            
    }

    const handleLeave = (e) => {
        e.target.style.backgroundColor = '';
        e.target.style.color = '';
    }

    const handleMenu = () => {
        setOpen(!open);
    }

    const handleRestart = () => {
        dispatch({type: 'reset turn'});
        dispatch({type: 'reset board'});
        dispatch({type: 'clear counters'});
        dispatch({type: 'start game'});                         //just in case the user clicks on the restart button after the game ends (this happens when a player wins)
        dispatch({type: 'reset player one score'});
        dispatch({type: 'reset player two score'});
        dispatch({type: 'reset'});                              //resets the timer and all the counters on the board
    }

    const handleMenuRestart = () => {
        dispatch({type: 'reset turn'});
        dispatch({type: 'reset board'});
        dispatch({type: 'clear counters'});
        dispatch({type: 'start game'});                         //just in case the user clicks on the restart button after the game ends (this happens when a player wins)
        dispatch({type: 'reset player one score'});
        dispatch({type: 'reset player two score'});
        dispatch({type: 'reset'});                             //resets the timer and all the counters on the board
        setOpen(false);
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
            <motion.header 
                className={styles.container} 
                initial='hidden' 
                animate='show'
                transition={{staggerChildren: 0.6}}
                >
                <motion.button 
                    className={styles.menuButton} 
                    onClick={handleMenu} 
                    variants={variants}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}>
                    MENU
                </motion.button>
                <motion.img className={styles.logo} src={logo} variants={variants}/>
                <motion.button 
                    className={styles.restartButton} 
                    onClick={handleRestart} 
                    variants={variants}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}>
                    Restart
                </motion.button>
            </motion.header>    
            <div className={styles.overlay} ref={overlayRef}>
                <dialog open={true} className={styles.dialog} ref={dialogRef}>
                    <h1 className={styles.title}>
                        pause
                    </h1>
                    <button className={styles.continue} onClick={handleMenu}>
                        continue game
                    </button>
                    <button className={styles.restart} onClick={handleMenuRestart}>
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