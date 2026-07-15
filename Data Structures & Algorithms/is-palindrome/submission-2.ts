class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0
        let right = s.length - 1;

        const notAlphaNumRegex = /[^a-zA-Z0-9]/

        while (right > left) {
            if (notAlphaNumRegex.test(s[left])) {
                left++;
                continue;
            }

            if (notAlphaNumRegex.test(s[right])) {
                right--;
                continue;
            }
            
            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true
    }
}
