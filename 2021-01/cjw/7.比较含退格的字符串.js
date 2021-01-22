/**
 * 比较含退格的字符串
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * https://leetcode-cn.com/problems/backspace-string-compare
 */

var backspaceCompare = function(S, T) {
    return handle(S) === handle(T);
};


var handle = function(string) {
    let result = [];
    // 遍历字符串，不是#堆积，是#去除数组最后一位
    for(let char of string){
        if(char != "#") {
            result.push(char);
        } else {
            result = result.slice(0,result.length - 1)
        }
    }

    return result.toString().replace(/,/g, "");
}