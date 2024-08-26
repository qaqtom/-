/**
 * @param {number} n
 * @return {number}
 */
function helper(n, memo) {
    if (n < 2) {
        return n
    }
    if (memo[n]) {
        return memo[n]
    }
    memo[n] = helper(n - 1, memo) + helper(n - 2, memo)
    return memo[n]
}

var fib = function (n) {
    let memo = [];
    return helper(n, memo)
};