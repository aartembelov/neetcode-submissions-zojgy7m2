class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Set<number>[] = [];
        const columns: Set<number>[] = [];
        const squares: Set<number>[] = [];
        for (let i = 0; i < 9; i++) {
            rows.push(new Set()) 
            columns.push(new Set())
            squares.push(new Set())
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === ".") {
                    continue
                }
                
                const num = parseInt(board[r][c]);
                
                if (rows[r].has(num)) {
                    return false
                }

                rows[r].add(num)

                if (columns[c].has(num)) {
                    return false
                }

                columns[c].add(num)

                const squareNumber =  Math.trunc(r / 3) * 3 + Math.trunc(c / 3)

                if (squares[squareNumber].has(num)) {
                    return false
                }

                squares[squareNumber].add(num)
            }
        }

        return true

    }
}
