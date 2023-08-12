/**
 * parses chessboard state string into objects
 * @param boardStateString - string
 * @returns array of objects
 */


import { boardStateString } from "./boardState";
import { createBoardStateFromString } from "./createBoardStateFromString";
import {parseStringToArray} from "./parseStringToArray"
import { createBoardSquares } from "./createBoardSquares";
import {  oneSquare, pieces } from "./interfaces";

export const piecesObject: pieces = {
    'r' : '♜',
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


const boardStringAsArray: string[] = parseStringToArray(boardStateString);
const boardSquaresArray: oneSquare[] = createBoardSquares(boardStringAsArray)
const boardState: oneSquare[] = createBoardStateFromString(boardStringAsArray, boardSquaresArray);

console.log(boardState)





//create  function which checks for correct number of 'r' == 2 , 'n'==2,'R' ==2  '.' == 32, and so on... 
// create template object with the correct numbers of pieces and empty squares
// create function to create square objects
// function to create piece objects with position etc






