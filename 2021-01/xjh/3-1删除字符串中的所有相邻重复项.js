// 这题一开始想法错了，第一时间没想到用栈，直接用递归了

/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
    function deleteRepeatStr (str) {
        let repeatstr = '';
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === repeatstr) {
                index = i;
                break;
            } else {
                repeatstr = str[i];
            }
        }
        if (index) {
            return deleteRepeatStr(str.slice(0, index - 1) + str.slice(index + 1));
        }
        return str;
    }
    return deleteRepeatStr(S);
};