// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// ============================================================
// ===                     自己想的代码                      ===
// ===      状态：通过,执行用时: 100 ms,内存消耗: 40.5 MB     ===
// ============================================================

function isValid(s: string): boolean {
    let stack:string[] = [];
    for(let i=0;i<s.length;i++){
        let stackTop = stack.pop();
        let pareChar = s[i];
        // 若不匹配则表示已经有一个不匹配的括号，匹配结束
        // 当栈中没有数据，或需要进行判断的数据为左括号时，就保存需要存入的值
        if(!stackTop || pareChar === '(' || pareChar === '[' || pareChar === '{'){
            stackTop && stack.push(stackTop);
            stack.push(pareChar);
            // 当栈中取出的值为右括号，则栈不可能被清空了，就直接返回false
            // 当栈中取出的是左括号,但是匹配的内容不是对应的右括号,则这个左括号无法被消去,则需直接返回false
        }else if(stackTop === '}' || stackTop === ')' || stackTop === ']' || 
        stackTop === '(' && pareChar !== ')' || stackTop === '[' && pareChar !== ']' ||stackTop === '{' && pareChar !== '}'){
            return false;
        }
    }
    return !stack.pop()
};


// ============================================================
// ===                     他人优秀代码                      ===
// ===      状态：通过,执行用时: 88 ms,内存消耗: 39.5 MB      ===
// ============================================================


let map: any = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
}

function isValid_TOP(s: string): boolean {

    let stack: string[] = [];
    let top: string | undefined;

    for(let char of s){
        let value;
        if((value = map[char])){
            stack.push(value);
        }else{
            top = stack.pop();
            if(top !== char){
                return false;
            }
        }
    }

    return !stack.length;
}

