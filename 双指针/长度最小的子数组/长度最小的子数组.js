/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let slow = 0;
    let fast = 0;
    let sum = 0;
    let length = Infinity;
    while (fast < nums.length) {
        sum += nums[fast++];
        while (sum >= target) {
            length = Math.min((fast - slow), length);
            sum -= nums[slow++]
        }
    }
    return length === Infinity ? 0 : length
};