/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let jump = 0;
    let numsLengh = nums.length
    for (let i = 0; i <= jump; i++) {
        jump = Math.max(jump, i + nums[i])
        if (jump >= numsLengh - 1) {
            return true
        }
    }
    return false
};
