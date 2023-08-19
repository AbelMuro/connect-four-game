export default function gridReducer(grid=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
], action) {

    switch(action.type){
        case 'update grid':
            const column = action.column;
            const row = action.row;
            const player = action.player;
            return grid.map((currentRow, i) => {
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
        case 'check grid':
           grid.map((row) => {
                const connectFour = [];
                row.map((column) => {
                    if(column !== 0)
                        connectFour.push(column);
       
                })
           })

        default:
            return grid;
            
    }
}