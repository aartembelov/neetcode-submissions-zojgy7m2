class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operations = {
            "+": (a: number, b: number) => a + b,
            "-": (a: number, b: number) => a - b,
            "*": (a: number, b: number) => a * b,
            "/": (a: number, b: number) => a / b,
        }

        const stack: string[] = [];
        for (let i = 0; i < tokens.length; i++) {
            if (
                operations[tokens[i]] && 
                stack.at(-1) && !operations[stack.at(-1)] &&
                stack.at(-2) && !operations[stack.at(-2)]
            ) {
                const num1 = parseInt(stack.pop());
                const num2 = parseInt(stack.pop());
                stack.push(operations[tokens[i]](num2, num1).toString())
            } else {
                stack.push(tokens[i]);
            }
        }
        
        return parseInt(stack.pop());
    }
}
