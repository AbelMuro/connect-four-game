function traverseBoard(grid){
    let connectFour = [];
    let winningCounters = []

    //searches for consecutive matching tiles horizontally
    for(let row = 5; row >= 0; row--){
        for(let columnOne = 0; columnOne <= 3 ; columnOne++){
            for(let columnTwo = columnOne; columnTwo <= columnOne + 3; columnTwo++){
                if(!grid[row] || !grid[row][columnTwo]){
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length); 
                    break;                    
                }
                if(columnTwo === columnOne){
                    connectFour.push(grid[row][columnTwo]); 
                    winningCounters.push([row, columnTwo])   
                } 
                else if(connectFour.includes(grid[row][columnTwo])){
                    connectFour.push(grid[row][columnTwo]);
                    winningCounters.push([row, columnTwo]) 
                }
                else{
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length); 
                    break;
                }
                if(connectFour.length === 4)
                    return winningCounters; 
            }
        }
    }

    //searches for consecutive matching tiles vertically
    for(let row = 5; row >= 3; row--){
        for(let column = 0; column <= 6; column++){
            for(let vertical = 0; vertical <= 3; vertical++){
                if(!grid[row - vertical] || !grid[row - vertical][column]){
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length); 
                    break; 
                }
                if(vertical === 0){
                    connectFour.push(grid[row - vertical][column]); 
                    winningCounters.push([row - vertical, column])   
                } 
                else if(connectFour.includes(grid[row - vertical][column])){
                    connectFour.push(grid[row - vertical][column]);
                    winningCounters.push([row - vertical, column]) 
                }
                else{
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length);  
                    break;
                }
                if(connectFour.length === 4)
                    return winningCounters;   
            }            
        }
    }


    //searches for consecutive matching tiles diagonally (rightwards)
    for(let row = 5; row >= 3; row--){              
        for(let column = 0; column <= 3; column++){ 
            for(let diagonal = 0; diagonal <= 3; diagonal++){       
                if(!grid[row - diagonal] || !grid[row - diagonal][column + diagonal]){
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length); 
                    break; 
                }
                if(diagonal === 0){
                    connectFour.push(grid[row - diagonal][column + diagonal]); 
                    winningCounters.push([row - diagonal, column + diagonal]);   
                } 
                else if(connectFour.includes(grid[row - diagonal][column + diagonal])){
                    connectFour.push(grid[row - diagonal][column + diagonal]);
                    winningCounters.push([row - diagonal, column + diagonal]); 
                }
                else{
                    connectFour.splice(0, connectFour.length);
                    winningCounters.splice(0, winningCounters.length); 
                    break;
                } 
                if(connectFour.length === 4)
                    return winningCounters;  
            }
        }
    }

        //searches for consecutive matching tiles diagonally (leftwards)
        for(let row = 5; row >= 3; row--){              
            for(let column = 6; column >= 3; column--){ 
                for(let diagonal = 0; diagonal <= 3; diagonal++){       
                    if(!grid[row - diagonal] || !grid[row - diagonal][column - diagonal]){
                        connectFour.splice(0, connectFour.length);
                        winningCounters.splice(0, winningCounters.length); 
                        break; 
                    }
                    if(diagonal === 0){
                        connectFour.push(grid[row - diagonal][column - diagonal]); 
                        winningCounters.push([row - diagonal, column - diagonal]);   
                    } 
                    else if(connectFour.includes(grid[row - diagonal][column - diagonal])){
                        connectFour.push(grid[row - diagonal][column - diagonal]);
                        winningCounters.push([row - diagonal, column - diagonal]); 
                    }
                    else{
                        connectFour.splice(0, connectFour.length);
                        winningCounters.splice(0, winningCounters.length); 
                        break;
                    } 
                    if(connectFour.length === 4)
                        return winningCounters;  
                }
            }
        }
        return [];
}
        


export default function boardReducer(board={
        board: 
            [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        winningCounters: []
}, action) {

    const currentBoard = board.board;
    const currentWinningCounters = board.winningCounters;

    switch(action.type){
        case 'update board':
            const column = action.column;
            const row = action.row;
            const player = action.player;

            const updatedBoard = currentBoard.map((currentRow, i) => {
                if(i !== row) 
                    return currentRow;
                else{
                    return currentRow.map((currentColumn, i) => {
                        if(i !== column)
                            return currentColumn;
                        else
                            return player === 1 ? 1 : 2
                    })
                }
            })
            return {board: updatedBoard, winningCounters: currentWinningCounters}

        case 'check board':
           const updatedWinningCounters = traverseBoard(currentBoard)
           return {board: currentBoard, winningCounters: updatedWinningCounters};

        default:
            return board;
            
    }
}