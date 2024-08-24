/**
 * 不稳定
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 2) {
        return nums;
    }
    let flag = nums[0];
    let left = [];
    let right = [];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num > flag) {
            right.push(num)
        } else {
            left.push(num)
        }
    }
    return sortArray(left).concat(flag,sortArray(right))
};