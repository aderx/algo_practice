/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function(target, n) {
    const result = [];
    const target2 = [];
    let arrIndex = 1;
    let mapIndex = 0;
    while (target.join('') !== target2.join('') && arrIndex <= n) {
        if (arrIndex === target[mapIndex]) {
            target2.push(arrIndex);
            result.push('Push');
            mapIndex++;
        } else {
            result.push('Push');
            result.push('Pop');
        }
        arrIndex++;
    }
    return result;
};