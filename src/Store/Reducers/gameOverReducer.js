export default function gameOverReducer(gameOver = false, action) {
    switch(action.type){
        case 'end game':
            return true;
        case 'start game':
            return false;
        default: 
            return gameOver;
    }
}