class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let containerMaxArea = 0;
        let l = 0;
        let r = heights.length - 1;

        while(r > l) {
            const containerHeight = Math.min(heights[l], heights[r]);
            const area = (r - l) * containerHeight;
            if (containerMaxArea < area) {
                containerMaxArea = area;
            }

            if (heights[r] > heights[l]) {
                l++;
            } else {
                r--;
            }
        }

        return containerMaxArea;
    }
}
