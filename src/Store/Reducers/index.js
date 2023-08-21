import playerOneScoreReducer from './playerOneScoreReducer.js';
import playerTwoScoreReducer from './playerTwoScoreReducer.js';
import currentTurnReducer from './currentTurnReducer.js';
import boardReducer from './boardReducer.js';
import gameOverReducer from './gameOverReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    playerOneScore: playerOneScoreReducer,
    playerTwoScore: playerTwoScoreReducer,
    currentTurn: currentTurnReducer,
    board: boardReducer,
    game: gameOverReducer
})

export default rootReducer