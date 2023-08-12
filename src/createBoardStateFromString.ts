import { oneSquare } from "./interfaces";
import { piecesObject } from "./main";

export function createBoardStateFromString(
    boardStringArray: string[],
    boardSquaresArray:oneSquare[]
):oneSquare[] {
const boardState: oneSquare[] = [];
for(let i=0;i<boardStringArray.length;i++){
   boardSquaresArray[i].piece = piecesObject[boardStringArray[i] as keyof typeof piecesObject];
   boardState.push(boardSquaresArray[i])
}
    return boardState;
}