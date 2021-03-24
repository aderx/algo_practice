<?php
/***
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 
# 代表退格字符。
注意：如果对空文本输入退格字符，文本继续为空。
示例 1：
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
 */
class Solution{


    function backspaceCompare($S, $T) {
        //分别判断各个字符串中字符和#是否相同 如果相同 则为空
        /*$site = strpos($S);
        $newS = $this->calculate($S);
        $newT = $this->calculate($T);
        if($newS == $newT){
            return true;
        }else{
            return false;
        }*/
        return $this->calculate2($S)==$this->calculate2($T);
    }

    function calculate2($str){
        $ary = [];
        for($i=0;$i<strlen($str);$i++){
            if($str[$i]=="#"){
                array_pop($ary);
            }else{
                $ary[] = $str[$i];
            }
        }
        return implode($ary);
    }

    function calculate($str){
        while(strpos($str,'#')>-1){
            $site = strpos($str,'#');
            if($site==0){
                $str = substr($str,1);
            }else{
                $str = substr($str,0,$site-1).substr($str,$site+1);
            }
        }
        return $str;
    }
}