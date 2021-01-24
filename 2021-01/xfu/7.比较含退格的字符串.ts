// 844. 比较含退格的字符串
// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

 

// 示例 1：

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：

// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：

// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。
 

// 提示：

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S 和 T 只含有小写字母以及字符 '#'。
 

// 进阶：

// 你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

function backspaceCompare(S: string, T: string): boolean {

    let maxLenList = T.split('');
    let minLenList = S.split('');
    // 使用数据交换，减少split分割数据时间
    // 只遍历较长的字符串，可以同时遍历两个串
    if(S.length > T.length){
        let temp = maxLenList;
        maxLenList = minLenList;
        minLenList = temp;
    }

    let stackS: string[] = [];
    let stackT: string[] = [];

    // 只遍历长的栈
    while(maxLenList.length){
        let stackTopMax = maxLenList.shift();
        let stackTopMin = minLenList.shift();
        // S栈操作
        operateStack(stackS, stackTopMax);
        // T栈操作
        operateStack(stackT, stackTopMin);
    }

    let compare1 = stackS.join('');
    let compare2 = stackT.join('');

    return compare1 === compare2;

    // 不使用字符串判断，模拟栈的操作
    // if(stackS.length !== stackT.length){
    //     return false;
    // }else{
    //     while(stackS.length){
    //         let outS = stackS.shift();
    //         let outT = stackT.shift();
    //         if(outS !== outT){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
};

// 栈的操作
function operateStack (stackList: string[], flag: string | undefined):void {
    if(!flag) return;
    flag === '#' ? stackList.shift() : stackList.unshift(flag)
}