class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0
        let right = (matrix.length * matrix[0].length) - 1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            
            const rowMid = mid % matrix[0].length
            const row = Math.floor(mid / matrix[0].length);

            if (matrix[row][rowMid] === target) {
                return true
            }

            if (matrix[row][rowMid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
