/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) {
    const main = [];
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            main.pop();
        } else if (logs[i] === './') {

        } else {
            main.push(true);
        }
    }
    return main.length;
};