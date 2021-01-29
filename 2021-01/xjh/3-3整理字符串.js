/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        const lastIndex = result.length - 1;
        if (result.length > 0 && result[lastIndex] !== s[i] && result[lastIndex].toUpperCase() === s[i].toUpperCase()) {
            result.pop();
        } else {
            result.push(s[i]);
        }
    }
    return result.join('');
};