/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrck(list, temp, nums) {
    if (temp.length === nums.length) {
        return list.push([...temp])
    }

    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue;
        }
        temp.push(nums[i]);
        backtrck(list, temp, nums);
        temp.pop();
    }
}

var permute = function (nums) {
    const list = [];
    backtrck(list, [], nums)
    return list;
};


console.log(permute([1, 2, 3,4]))