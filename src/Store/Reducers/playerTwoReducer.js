export default function playerTwoReducer(score = 0, action){
    switch(action.type){
        case 'update player two score':
            return score + 1;
        case 'reset player two score':
            return 0;
        default: 
            return score;
    }
}