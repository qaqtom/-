/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let k = right;
    let arr = Array(k + 1);
    while (left <= right) {
        let letNum = nums[left] * nums[left]
        let rightNum = nums[right] * nums[right];
        if (letNum < rightNum) {
            arr[k] = rightNum
            right--
        } else {
            arr[k] = letNum
            left++
        }
        k--
    }
    return arr
};