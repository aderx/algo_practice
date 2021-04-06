/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = '';
    function repeat (str) {
        let stack = [];
        let startIndex = 0;
        let repeatNum = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '[') {
                stack.push('[');
                if (stack.length === 1) {
                    startIndex = i + 1;
                }
            } else if (str[i] === ']') {
                stack.pop();
                if (stack.length === 0) {
                    while (repeatNum > 0) {
                        repeat(str.slice(startIndex, i));
                        repeatNum--;
                    }
                }
            } else if (isNaN(str[i])) {
                if (stack.length === 0) {
                    result += str[i];
                }
            } else if (!isNaN(str[i]) && stack.length === 0) {
                repeatNum += str[i];
                if (isNaN(str[i + 1])) {
                    repeatNum = Number(repeatNum);
                }
            }
        }
    }
    repeat(s);
    return result;
};