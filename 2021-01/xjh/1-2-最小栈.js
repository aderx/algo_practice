class MinStack {
    constructor() {
        this.stack = [];
        this.mainList = [];
    }

    push(x) {
        this.stack.unshift(x);
        if (this.mainList.length === 0 || x <= this.mainList[0]) {
            this.mainList.unshift(x);
        }
    }

    pop() {
        const popNum = this.stack.shift();
        if (popNum <= this.mainList[0]) {
            this.mainList.shift();
        }
    }

    top() {
        return this.stack[0];
    }

    getMin() {
        return this.mainList[0];
    }
}
