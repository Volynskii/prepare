import React from 'react';

const Stack = () => {

    class MinStack {
        constructor() {
            this.stack = []; // Main stack to hold the elements
            this.minStack = []; // Auxiliary stack to keep track of the minimum elements
        }

        /**
         * Pushes a new element onto the stack.
         * @param {number} val - The value to push onto the stack.
         */
        push(val) {
            this.stack.push(val);
            // Push the new minimum onto the minStack
            if (this.minStack.length === 0 || val <= this.getMin()) {
                this.minStack.push(val);
            }
        }

        /**
         * Removes the top element from the stack.
         * @returns {void}
         */
        pop() {
            if (this.stack.length === 0) {
                throw new Error("Stack is empty");
            }
            const popped = this.stack.pop();
            // If the popped value is the current minimum, pop it from the minStack too
            if (popped === this.getMin()) {
                this.minStack.pop();
            }
        }

        /**
         * Gets the current minimum value in the stack.
         * @returns {number} - The minimum value.
         */
        getMin() {
            if (this.minStack.length === 0) {
                throw new Error("Stack is empty");
            }
            return this.minStack[this.minStack.length - 1];
        }
    }

// Example Usage:
    const minStack = new MinStack();
    minStack.push(5);
    minStack.push(2);
    minStack.push(7);
    minStack.push(2);
    console.log(minStack.getMin()); // Output: 2
    minStack.pop();
    console.log(minStack.getMin()); // Output: 2
    minStack.pop();
    console.log(minStack.getMin()); // Output: 2
    minStack.pop();
    console.log(minStack.getMin()); // Output: 5

    return (
        <div>
            stack
        </div>
    );
};

export default Stack;