export default function gameOverReducer(gameOver = false, action) {
    switch(action.type){
        case 'end game':
            return true;
        default: 
            return gameOver;
    }
}