class MyQueue {
    constructor() {
        this.stackList = [];
    }
    push(x) {
        this.stackList.push(x);
    }
    pop() {
        let newStack = [];
        while(this.stackList.length > 1){
            newStack.push(this.stackList.pop());
        }
        const popNum = this.stackList.pop();
        while(newStack.length){
            this.stackList.push(newStack.pop())
        }
        return popNum;
    }

    peek() {
        return this.stackList[0];
    }

    empty() {
        return !this.stackList.length;
    }
}