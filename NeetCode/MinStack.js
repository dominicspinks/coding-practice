class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) return;
        let min = this.stack[0]
        for (let val of this.stack) {
            if (val < min) min = val;
        }
        return min;
    }
}

const minStack = new MinStack();
minStack.push(1);
console.log(minStack);
minStack.push(2);
console.log(minStack);
minStack.push(0);
console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack);
console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1
