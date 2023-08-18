export default function currentTurnReducer(currentTurn = 'player 1', action) {
    switch(action.type){
        case 'change turn':
            return action.turn; 
        default:
            return currentTurn;
    }
}