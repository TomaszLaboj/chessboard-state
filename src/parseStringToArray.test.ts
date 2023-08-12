import { parseStringToArray } from "./parseStringToArray";

test("to test parsing input string into array",() => {

    expect(parseStringToArray(`r n b q k b n r
    p p p p p p p p
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
    P P P P P P P P
    R N B Q K B N R
    `)).toEqual(["r","n","b","q","k","b","n","r","p","p","p","p","p","p","p","p",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","P","P","P","P","P","P","P","P","R","N","B","Q","K","B","N","R"])
})
test("to test parsing input string into array",() => {

    expect(parseStringToArray(`rnkbppp..`)).toEqual(["r","n","k","b","p","p","p",".","."])
})