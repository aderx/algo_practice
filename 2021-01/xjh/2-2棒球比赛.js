/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
    const newOps = [];
    for (let i = 0; i < ops.length; i++) {
        if (!isNaN(ops[i])) {
            newOps.push(+ops[i]);
        }
        if (ops[i] === 'C') {
            newOps.pop();
        }
        if (ops[i] === '+') {
            newOps.push(newOps[newOps.length - 1] + newOps[newOps.length - 2]);
        }
        if (ops[i] === 'D') {
            newOps.push(newOps[newOps.length - 1] * 2);
        }
    }
    return newOps.reduce((a, b) => a + b, 0);
};