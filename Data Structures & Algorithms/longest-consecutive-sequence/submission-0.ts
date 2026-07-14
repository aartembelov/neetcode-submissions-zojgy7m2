// [2,20,4,10,3,4,5]
// starters: 20, 10, 2
// 

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set(nums);

        const starters = nums.filter((num) => !numsSet.has(num - 1))

        let maxSequence = 0
        for (let i = 0; i < starters.length; i++) {
            let currentSequence = 1
            while(numsSet.has(starters[i] + currentSequence)) {
                console.log(starters[i] + currentSequence)
                currentSequence++;
            }

            if (currentSequence > maxSequence) {
                maxSequence = currentSequence
            }
        }

        return maxSequence;
    }
}
