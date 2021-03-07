// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
 

// 示例:

// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// 输出：
// [null,null,null,null,-3,null,0,-2]

// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.
 

// 提示：

// pop、top 和 getMin 操作总是在 非空栈 上调用。


// ============================================================
// ===                     自己想的代码                      ===
// ===      状态：通过,执行用时: 140 ms,内存消耗: 47.8 MB     ===
// ============================================================

class MinStack {
    constructor() {

    }

    stackList:number[] = [];

    minNum:number[] = [];

    push(x: number): void {
        this.stackList.unshift(x);
        // 将小于等于最小值的值从前插入数组中
        if(this.minNum[0] === undefined || this.minNum[0] >= x){
            this.minNum.unshift(x);
        }
    }

    pop(): void {
        let popValue = this.stackList.shift();
        // 如果原栈中移除的是最小值，就同步移除这个最小值
        if(popValue === this.minNum[0]){
            this.minNum.shift();
        }
    }

    top(): number {
        return this.stackList[0];
    }

    getMin(): number {
        return this.minNum[0];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */