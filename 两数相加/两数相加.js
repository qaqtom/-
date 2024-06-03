/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        let n = target - num;
        if (num in obj) {
            return [i, obj[num]];
        }
        obj[n] = i;
    }
};

//算法思想：
// 记录数组中每一个数的目标值n
// 将这个  目标值n  和  他匹配的数的索引   存在一个对象中
// 遍历到这个目标值n时，返回