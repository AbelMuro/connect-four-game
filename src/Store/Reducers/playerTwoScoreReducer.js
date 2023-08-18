export default function playerTwoScoreReducer(playerTwoScore = 0, action) {
    switch(action.type){
        case 'update score':
            return playerTwoScore + 1;
        default:
            return playerTwoScore;
    }
}