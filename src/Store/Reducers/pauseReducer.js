export default function pauseReducer(pause = false, action) {
    switch(action.type){
        case 'pause':
            return true;
        case 'resume': 
            return false;
        default:
            return pause;
    }
}