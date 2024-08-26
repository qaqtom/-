/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 0 || nums.length === 1) return;
    let left = 0
    let right = 1
    while (right < nums.length) {
        if (nums[left] === 0 && nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        } else if (nums[left] !== 0) {
            left++
        }
        right++
    }
};