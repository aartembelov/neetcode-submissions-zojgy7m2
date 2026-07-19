// push 2 -> [2], min: [2]
// push 1 -> [2, 1], min: [2, 1],
// push 3 -> [2, 1, 3], min: [2, 1]
// push 1 -> [2, 1, 3, 1], min: [2, 1, 1]
// push 4 -> [2, 1, 3, 1, 4], min: [2, 1, 1]


class MinStack {
    private minStack: number[] = [];
    private stack: number[] = [];

    constructor() { }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (
            this.minStack.length === 0 ||
            this.minStack.at(-1) >= val
        ) {
            this.minStack.push(val)
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void { 
        const val = this.stack.pop()
        if (this.minStack.at(-1) === val) {
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number { 
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number { 
        return this.minStack.at(-1);
    }
}
