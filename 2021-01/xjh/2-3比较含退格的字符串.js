/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
    const slength = S.length;
    const tlength = T.length;
    const newS = [];
    const newT = [];
    for (let i = 0; i < Math.max(slength, tlength); i++) {
        if (S[i]) {
            if (S[i] !== '#') {
                newS.push(S[i]);
            } else {
                newS.pop();
            }
        }
        if (T[i]) {
            if (T[i] !== '#') {
                newT.push(T[i]);
            } else {
                newT.pop();
            }
        }
    }
    if (newS.join() === newT.join()) {
        return true;
    }
    return false;
};