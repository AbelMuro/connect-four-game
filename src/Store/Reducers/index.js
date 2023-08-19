import playerOneScoreReducer from './playerOneScoreReducer.js';
import playerTwoScoreReducer from './playerTwoScoreReducer.js';
import currentTurnReducer from './currentTurnReducer.js';
import gridReducer from './gridReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    playerOneScore: playerOneScoreReducer,
    playerTwoScore: playerTwoScoreReducer,
    currentTurn: currentTurnReducer,
    grid: gridReducer
})

export default rootReducer