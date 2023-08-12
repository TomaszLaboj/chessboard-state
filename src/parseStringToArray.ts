export function parseStringToArray(boardStateString:string):string[]{
    const boardStringAsArray:string[] = boardStateString.replace(/[' ']/g,'').split('').filter((char) => char !== '\n')
     return boardStringAsArray;
 }