<?php
class MinStack {
    /**
     * initialize your data structure here.
     */
    function __construct() {
        $stackList=[];
    }

    /**
     * @param Integer $x
     * @return NULL
     */
    function push($x) {
        $this->stackList[]=$x;
    }

    /**
     * @return NULL
     */
    function pop() {
        return array_pop($this->stackList);
    }

    /**
     * @return Integer
     */
    function top() {
        return end($this->stackList);
    }

    /**
     * @return Integer
     */
    function getMin() {
        return min($this->stackList);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * $obj = MinStack();
 * $obj->push($x);
 * $obj->pop();
 * $ret_3 = $obj->top();
 * $ret_4 = $obj->getMin();
 */