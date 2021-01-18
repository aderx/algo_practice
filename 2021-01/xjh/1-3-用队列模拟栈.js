class MyStack {
    constructor() {
        this.stackList = [];
    }

    push(x) {
        this.stackList.push(x);
    }

    pop() {
        let newStack = [];
        while (this.stackList.length > 1) {
            newStack.push(this.stackList.shift());
        }
        let popNum = this.stackList.shift();
        while (newStack.length > 0) {
            this.stackList.push(newStack.shift());
        }
        return popNum;
    }

    top() {
        return this.stackList[this.stackList.length - 1];
    }

    empty() {
        return !this.stackList.length;
    }
}