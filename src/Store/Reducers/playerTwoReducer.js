export default function playerTwoReducer(score = 0, action){
    switch(action.type){
        case 'update player two score':
            return score + 1;
        default: 
            return score;
    }
}