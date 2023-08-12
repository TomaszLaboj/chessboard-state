import { oneSquare } from "./interfaces";

export function createBoardSquares():oneSquare[]{
    const rows: number[] = [1,2,3,4,5,6,7,8];
    const columns: number[] = [1,2,3,4,5,6,7,8];
    const boardSquares:oneSquare[] = [];
    let lastId = 0;
    for(const row of rows){
        for(const column of columns){
            boardSquares.push({
                id: column + lastId,         
                row: row,
                column: column,
                piece: '',
                colour: ''
            }
    
            )
        }
        lastId += 8;
    }
        return boardSquares;
    }