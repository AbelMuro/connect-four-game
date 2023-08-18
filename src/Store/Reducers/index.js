import playerOneScoreReducer from './playerOneScoreReducer.js';
import playerTwoScoreReducer from './playerTwoScoreReducer.js';
import currentTurnReducer from './currentTurnReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    playerOneScore: playerOneScoreReducer,
    playerTwoScore: playerTwoScoreReducer,
    currentTurn: currentTurnReducer
})

export default rootReducer