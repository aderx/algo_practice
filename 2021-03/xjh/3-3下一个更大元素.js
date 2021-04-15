/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let result = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        const newArr = [...nums.slice(i + 1), ...nums.slice(0, i)];
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] > nums[i]) {
                result[i] = newArr[j];
                break;
            }
        }
    }
    return result;
};

console.log(nextGreaterElements([1,2,3,4,3]))