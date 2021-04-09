/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            const num1 = stack.pop();
            const num2 = stack.pop();
            let res = 0;
            const s = tokens[i];
            if (s === '+') {
                res = num1 + num2;
            } else if (s === '-') {
                res = num2 - num1; 
            } else if (s === '*') {
                res = num1 * num2; 
            } else if (s === '/') {
                res = num1 / num2 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1)
                console.log(num2,num1,res)
            }
            stack.push(res);
        }
    }

    return stack[0];
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));