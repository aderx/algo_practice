function isValid(s) {
    const strMap = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    let stack = [];
    let stackTop;

    for(let char of s){
        if(strMap[char]){
            stack.push(strMap[char]);
        }else{
            stackTop = stack.pop();
            if(stackTop !== char){
                return false;
            }
        }
    }

    return !stack.length;
}