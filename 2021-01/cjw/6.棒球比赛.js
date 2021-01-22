/**
 * 棒球比赛
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
 * 
 * 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：
 * 
 * 整数 x - 表示本回合新获得分数 x
 * "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
 * "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 请你返回记录中所有得分的总和。
 * 
 * https://leetcode-cn.com/problems/baseball-game
 */

var calPoints = function(ops) {
    let result = 0;
    let resultList = [];
    // 验证0-9的任意数字最少出现1次。
    let regNumber = /\d+/; 
    for (let i = 0; i < ops.length; i++) {
        const element = ops[i];
        // 判断是否是数字，是数字直接堆积，不是进行下一步处理
        if(regNumber.test(element)){
            resultList.push(element);
        }else{
            switch (element) {
                case "+":
                    // 求和最后两位数，堆积
                    resultList.push(parseInt(resultList[resultList.length-1]) + parseInt(resultList[resultList.length-2]));
                    break;
                case "D":
                    // 将最后一位数乘2，堆积
                    let num = resultList[resultList.length - 1] * 2;
                    resultList.push(num);
                    break;
                case "C":
                    // 截取最后一位
                    resultList = resultList.slice(0,resultList.length - 1);
                    break;
            }
        }
    }
    // 最终结果，遍历相加
    resultList.map(num => {
        result += +num;
    })
    return result;
};