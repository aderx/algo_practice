/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let len = 0;
    for (let i = 0; i < n; i++) {
        if (target[len] === i + 1) {
            result.push('Push');
            len++;
            if (len === target.length) {
                break;
            }
        } else {
            result.push('Push');
            result.push('Pop');
        }
    }
    return result;
};