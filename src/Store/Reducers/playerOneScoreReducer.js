export default function playerOneScoreReducer(playerOneScore = 0, action) {
    switch(action.type){
        case 'update score':
            return playerOneScore + 1;
        default:
            return playerOneScore;
    }
}