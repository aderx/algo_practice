/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
    const stack = [];
    const resultArr = [];
    let index = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(S[i]);
        } else {
            stack.pop();
            if (stack.length === 0) {
                resultArr.push(S.slice(index, i + 1));
                index = i + 1;
            }
        }
    }
    return resultArr.reduce((pre, next) => {
        return pre + next.slice(1, next.length - 1);
    }, '')
};