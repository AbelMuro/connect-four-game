import playerOneScoreReducer from './playerOneScoreReducer.js';
import playerTwoScoreReducer from './playerTwoScoreReducer.js';
import currentTurnReducer from './currentTurnReducer.js';
import boardReducer from './boardReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    playerOneScore: playerOneScoreReducer,
    playerTwoScore: playerTwoScoreReducer,
    currentTurn: currentTurnReducer,
    board: boardReducer
})

export default rootReducer