/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    let result = 0;
    for (let item of numSet) {
        if (!numSet.has(item - 1)) {
            let currentNum = item;
            let count = 1

            while (numSet.has(currentNum + 1)) {
                count++;
                currentNum += 1;
            }
            result = Math.max(result, count);
        }
    }
    return result;
};
