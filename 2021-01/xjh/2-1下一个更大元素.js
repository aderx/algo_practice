const nextGreaterElement = function(nums1, nums2) {
    let result = [];
    nums1.forEach(num1 => {
        let itemindex = nums2.indexOf(num1);
        if (itemindex === nums2.length - 1) {
            result.push(-1);
        } else {
            let isFind = false;
            itemindex = itemindex + 1;
            while (itemindex < nums2.length && !isFind) {
                if (num1 < nums2[itemindex]) {
                    result.push(nums2[itemindex]);
                    isFind = true;
                }
                if (itemindex === nums2.length - 1 && !isFind) {
                    result.push(-1);
                }
                itemindex++;
            }
        }
    })
    return result;
};