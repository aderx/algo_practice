/**
 * 225. 用队列实现栈
 * 使用队列实现栈的下列操作：
 *
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 *
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues
 * 与栈相反，队列是一种遵循先进先出 (FIFO / First In First Out) 原则的一组有序的项；队列在尾部添加新元素，并从头部移除元素。最新添加的元素必须排在队列的末尾。
 */



// 不明白，不知道，不清楚，不晓得
// 想法---把队列转一圈形成新的队列，原先进来的就会在最后一个出去
class MyStack {
    constructor() {
        this.stackList = [];
    }

    push(x) {
        this.stackList.push(x) ;
    }

    pop() {
        this.stackList.pop();
    }

    top() {
        return this.stackList[this.stackList.length-1];
    }

    empty() {
        return !this.stackList.length;
    }
}
