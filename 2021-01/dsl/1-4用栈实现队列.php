<?php
/**
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
    实现 MyQueue 类：
    void push(int x) 将元素 x 推到队列的末尾
    int pop() 从队列的开头移除并返回元素
    int peek() 返回队列开头的元素
    boolean empty() 如果队列为空，返回 true ；否则，返回 false
    说明：
    你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
    你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 */
class MyQueue{
    public $stackList,$stackList2;
    function __construct(){
        $this->stackList = [];
        $this->stackList2 = [];
    }

    function push($x){
        $this->stackList[] = $x;
        //array_merge($stackList,$x);
    }

    function pop(){
        //array_shift($this->stackList); //从数组中删除第一个元素并返回被删除的元素
        while(!MyQueue::empty()){
            $this->stackList2[]= array_pop($this->stackList);
        }
        $str = array_pop($this->stackList2);
        while(!empty($this->stackList2)){
            $this->stackList[] = array_pop($this->stackList2);
        }
        return $str;
    }

    function peek(){
        return reset($this->stackList); //函数将内部指针指向数组中的第一个元素并输出
    }

    function empty(){
        return empty($this->stackList);
    }
}