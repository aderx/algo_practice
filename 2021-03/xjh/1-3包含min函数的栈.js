/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.stack.length === 1) {
        this.minArr.unshift(x);
    } else if (x <= this.minArr[0]) {
        this.minArr.unshift(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popNum = this.stack.pop();
    if (this.stack.length === 0) {
        this.minArr = [];
    } else if (popNum === this.minArr[0]) {
        this.minArr.shift();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minArr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */