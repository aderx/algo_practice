/**
 * 下一个更大元素Ⅰ
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 * 
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * 
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * 
 * https://leetcode-cn.com/problems/next-greater-element-i
 */

var nextGreaterElement = function(nums1, nums2) {
    let resultList = [];
        for (let i = 0; i < nums1.length; i++) {
           const numI = nums1[i];
           // 循环查找数组1中元素对应索引
           const findIndex = nums2.findIndex(num => num === numI);
   
           let handleingList = [];
           // 若数组1中元素存在于数组2，将数组一中的元素与数组二中对应元素右侧数据进行比较
           if(findIndex > -1){
               for (let j = findIndex; j < nums2.length; j++) {
                   if(numI < nums2[j]) {
                       handleingList.push(nums2[j]);
                   }else{
                       handleingList.push(-1);
                   } 
               }
           }else{
               handleingList.push(-1);
           }
           // 查找当前循环获得的结果中第一个存在的数值，不存在则返回-1.并堆积到最终结果数组中
           resultList.push(handleingList.find(num => num >= 0)|| -1);
        }
        return resultList;
   };