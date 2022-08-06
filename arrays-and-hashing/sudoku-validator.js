/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

// Time complexity: O(n2);
function sudokuValidator(board) {
    const rows = {};
    const cols = {};
    const squares = {};
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            const number = board[row][col];
            if(number === "."){
                continue;
            }
            const grid = `${Math.floor(row/3)}${Math.floor(col/3)}`

            if(!rows[row]){
                rows[row] = new Set();
            }
            if(!cols[col]){
                cols[col] = new Set();
            }
            if(!squares[grid]){
                squares[grid] = new Set();
            }

            if(rows[row].has(number) || cols[col].has(number) || squares[grid].has(number)){
                return false;
            }
            rows[row].add(number);
            cols[col].add(number);
            squares[grid].add(number);
        }

    }
    return true;
}

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(sudokuValidator(board));
