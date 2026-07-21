class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: { value: number, index: number }[] = [];
        const result = new Array(temperatures.length).fill(0);

        for (let i = temperatures.length - 1; i > -1; i--) {
            if (!stack.at(-1)) {
                stack.push({value: temperatures[i], index: i});
                continue;
            }

            if (temperatures[i] >= stack.at(-1).value) {
                while (stack.at(-1) && temperatures[i] >= stack.at(-1).value) {
                    stack.pop();
                }

                if (stack.at(-1)) {
                    result[i] = stack.at(-1).index - i;
                }

                stack.push({value: temperatures[i], index: i});
            } else {
                result[i] = stack.at(-1).index - i;
                stack.push({value: temperatures[i], index: i});
            }
        }

        return result;
    }
}
