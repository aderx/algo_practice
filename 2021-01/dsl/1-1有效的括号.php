<?php
class Solution {
    /**
    * @param String $s
    * @return Boolean
    */
    function isValid($str) {
        if(boolval(strlen($str) & 1)){
            return false;
        }
        //解1  执行时间48ms  内存消耗15.2M
        // while(stripos($str,'()')>-1||stripos($str,'[]')>-1||stripos($str,'{}')>-1){
        //     $str = str_replace(['()','[]','{}'],'',$str);
        // }
        // return empty($str);
        

        //解2  执行时间 8ms 内存消耗 15.4M
        $stack = [];
        $map = [
            '('=>')',
            '{'=>'}',
            '['=>']'
        ];
        for($i=0;$i<strlen($str);$i++){
            $value = substr($str,$i,1);
            if($map[$value]){
                $stack[] = $value;
            }else{
                $st = end($stack);
                reset($stack);
                if($map[$st]==$value){
                    array_pop($stack);
                }else{
                    return false;
                }
            }
        }
        return count($stack)==0;
    }

}