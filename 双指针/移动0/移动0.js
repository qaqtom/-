/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     if (nums.length === 0 || nums.length === 1) return;
//     let slow = 0
//     let fast = 1
//     while (fast < nums.length) {
//         if (nums[slow] === 0 && nums[fast] !== 0) {
//             [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
//             slow++
//         } else if (nums[slow] !== 0) {
//             slow++
//         }
//         fast++
//     }
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0;
    let fast = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++
        }
        fast++
    }
};

