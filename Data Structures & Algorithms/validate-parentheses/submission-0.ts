class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const openingBrackets = new Set(["{", "(", "["]);
        const brackets = { "{": "}", "(": ")", "[": "]" };

        for (let i = 0; i < s.length; i++) {
            if (openingBrackets.has(s[i])) {
                stack.push(s[i])
            } else if (brackets[stack.at(-1)] === s[i]) {
                stack.pop()
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
