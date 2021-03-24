<?php
//请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通队列的全部四种操作（push、top、pop 和 empty）。
// 实现 MyStack 类：

// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

class MyStack {
    /**
     * Initialize your data structure here.
     */
    function __construct() {
        $stackList=[];
    }

    /**
     * Push element x onto stack.
     * @param Integer $x
     * @return NULL
     */
    function push($x) {
        $queue = [];
        array_push($queue,$x); //数组尾部追加元素
        while(!MyStack::empty()){
            array_push($queue,MyStack::pop());
        }
        $this->stackList=$queue;
    }

    /**
     * Removes the element on top of the stack and returns that element.
     * @return Integer
     */
    function pop() {
        //$res = MyStack::top();
        //array_pop($this->stackList); //array_pop 删除数组中的最后一个元素并返回数组中最后一个元素
        return array_shift($this->stackList);
    }

    /**
     * Get the top element.
     * @return Integer
     */
    function top() {
        return $this->stackList[0];
    }

    /**
     * Returns whether the stack is empty.
     * @return Boolean
     */
    function empty() {
        return empty($this->stackList);
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * $obj = MyStack();
 * $obj->push($x);
 * $ret_2 = $obj->pop();
 * $ret_3 = $obj->top();
 * $ret_4 = $obj->empty();
 */