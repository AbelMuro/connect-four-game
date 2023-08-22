import playerOneReducer from './playerOneReducer.js';
import playerTwoReducer from './playerTwoReducer.js';
import currentTurnReducer from './currentTurnReducer.js';
import boardReducer from './boardReducer.js';
import gameOverReducer from './gameOverReducer.js';
import pauseReducer from './pauseReducer.js';
import resetReducer from './resetReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    playerOneScore: playerOneReducer,
    playerTwoScore: playerTwoReducer,
    currentTurn: currentTurnReducer,
    board: boardReducer,
    gameOver: gameOverReducer,
    pause: pauseReducer,
    reset: resetReducer,
})

export default rootReducer