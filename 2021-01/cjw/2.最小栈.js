/**
 * 155. 最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 *
 * https://leetcode-cn.com/problems/min-stack
 * https://blog.csdn.net/qwe502763576/article/details/79055682
 */

/**
 * 功能点
 * push()方法可以在数组的末属添加一个或多个元素
 * shift()方法把数组中的第一个元素删除
 * unshift()方法可以在数组的前端添加一个或多个元素
 * pop()方法把数组中的最后一个元素删除
 *
 * 栈---先入后出
 */

class MinStack {
    constructor() {
        this.stackList = [];
        this.minStackList = [];
    }

    push(x) {
        // 基础数组正常堆叠
        this.stackList.unshift(x);
        // 记录最小元素数组在前端堆叠最小数字
        if (x <= this.minStackList[0] || this.minStackList[0] !== undefined) {
            this.minStackList.unshift(x);
        }
    }

    pop() {
        // 删除数组最后一个元素
        const shiftNum = this.stackList.shift();
        // 如果被清除的元素是数组内最小元素，同时也被清除
        if(shiftNum === this.minStackList[0]) {
            this.minStackList.shift();
        }
    }

    top() {
        return this.stackList.shift();
    }

    getMin() {
        return this.minStackList[0];
    }
}
