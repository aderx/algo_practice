/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * https://leetcode-cn.com/problems/valid-parentheses/
 */


// 错误---当只进行单次处理一对匹配括号内存在多对匹配括号时（例如([{[({})]}])），返回结果错误。
// 解决---在处理过单个匹配括号后循环多次处理单对匹配，但是太过麻烦
// 测试---"()[]{}({[][{}]})"  84ms
function isValid(string) {
    // 字符串长度为单数时一定是不匹配的（经验证，空字符串返回true，但空格返回的是false,因此在错误判断上直接进行长度判断时不需要考虑空格所占长度）
    if(string.length % 2 !== 0){
        return false;
    }
    let workedString = string.replaceAll("[]", "").replaceAll("{}", "").replaceAll("()", "");
    if(!workedString) {
        for(let i=0 ;i < parseInt(workedString.length/2,10); i++){
            workedString = workedString.replaceAll("[]", "").replaceAll("{}", "").replaceAll("()", "");
            if(i == workedString.length - 1 ) {
                return workedString == '';
            }
        }
    }
    return true;
}
