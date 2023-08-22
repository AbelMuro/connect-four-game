export default function resetReducer(reset = false, action) {
    switch(action.type){
        case 'reset':
            return true;
        case 'cancel reset':
            return false;
        default: 
            return reset;
    }
}