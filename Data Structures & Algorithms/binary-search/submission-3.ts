// [-1,0,3,5,9,12], target = 9
// l = 0, r = 5

// [-1,0,2,4,6,8], target = 4
// l = 0, r = 5
// l = 2, r = 4
// l = 

// [-1,0,2,4,6,8], target = 3
// l = 0, r = 5
// l = 2, r = 4
// l = 3, r = 3

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
