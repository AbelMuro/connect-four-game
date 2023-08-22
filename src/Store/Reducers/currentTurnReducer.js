export default function currentTurnReducer(currentTurn = 'player 1', action) {
    switch(action.type){
        case 'change turn':
            return currentTurn === 'player 1' ? 'player 2' : 'player 1'; 
        case 'reset turn':
            return 'player 1';
        default:
            return currentTurn;
    }
}