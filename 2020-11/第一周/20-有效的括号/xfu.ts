// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s: string): boolean {
    let stack:string[] = [];
    for(let i=0;i<s.length;i++){
        let stackTop = stack.pop();
        let pareChar = s[i];
        // 当栈中没有数据时，直接push新值
        // 当栈中有数据时，若插入的是左括号，则直接插入
        // 当栈中有数据时，若插入的是右括号则判断是否和出栈的第一个值相匹配，
        // 若不匹配则表示已经有一个不匹配的括号，匹配结束
        if(!stackTop || pareChar === '(' || pareChar === '[' || pareChar === '{'){
            stackTop && stack.push(stackTop);
            stack.push(pareChar);
        }else if(stackTop === '(' && pareChar !== ')' || stackTop === '[' && pareChar !== ']' ||stackTop === '{' && pareChar !== '}'){
            return false;
        }
    }
    return !stack.pop()
};