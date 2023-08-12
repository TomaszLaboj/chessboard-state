/**
 * parses chessboard state string into objects
 * @param boardStateString - string
 * @returns array of objects
 */


import { boardStateString } from "./boardState";
import {  oneSquare, pieceObject, pieces } from "./interfaces";

const pieces: pieces = {
    'r': '♜',
    'n' : '♞',
    'b' : '♝',
    'k' : '♚',
    'q' : '♛',
    'p' : '♟︎',
   
    'R' : '♖',
    'N' : '♘',
    'B' : '♗',
    'K' : '♔',
    'Q' : '♕',
    'P' : '♙',

}
function parseStringToArray(boardStateString:string):string[]{
   const boardStringAsArray:string[] = boardStateString.replace(/[' ']/g,'').split('').filter((char) => char !== '\n')
    return boardStringAsArray;
}

const boardStringAsArray: string[] = parseStringToArray(boardStateString);
const boardSquaresArray: oneSquare[] = createBoardSquares(boardStringAsArray)
const boardState: oneSquare[] = createBoardStateFromString(boardStringAsArray, boardSquaresArray);

console.log(boardState)

function createBoardStateFromString(
    boardStringArray: string[],
    boardSquaresArray:oneSquare[]
):oneSquare[] {
const boardState: oneSquare[] = [];
for(let i=0;i<boardStringArray.length;i++){
   boardSquaresArray[i].piece = pieces[boardStringArray[i] as keyof typeof pieces];
   boardState.push(boardSquaresArray[i])
}
    return boardState;
}



//create  function which checks for correct number of 'r' == 2 , 'n'==2,'R' ==2  '.' == 32, and so on... 
// create template object with the correct numbers of pieces and empty squares
// create function to create square objects
// function to create piece objects with position etc

function createBoardSquares(boardArray:string[]):oneSquare[]{
const rows: number[] = [1,2,3,4,5,6,7,8];
const columns: number[] = [1,2,3,4,5,6,7,8];
const boardSquares:oneSquare[] = [];
let lastId:number = 0;
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




