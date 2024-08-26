/**
 * @param {number[]} nums
 * @return {number}
 */
const binaryInsert = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] === num) {
            return
        } else if (arr[mid] > num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    arr[left] = num;
}

var lengthOfLIS = function (nums) {
    let result = [];
    result[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num > result[result.length - 1]) {
            result.push(num)
        } else {
            binaryInsert(result, num)
        }
    }
    return result.length
};


//解法二  ————耗时更多
var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};

