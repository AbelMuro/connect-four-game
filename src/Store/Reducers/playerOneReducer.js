export default function playerOneReducer(score = 0, action) {
    switch(action.type){
        case 'update player one score':
            return score + 1;
        case 'reset player one score':
            return 0;
        default:
            return score;
    }
}   