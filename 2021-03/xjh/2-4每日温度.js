/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = 0; i < T.length - 1; i++) {
        let count = 0;
        for (let j = i + 1; j < T.length; j++) {
            count++;
            if (T[j] > T[i]) {
                result.push(count);
                break;
            }
            if (j === T.length - 1 && T[j] <= T[i]) {
                result.push(0);
                break;
            }
        }
    }
    result.push(0);
    return result;
};