/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const obj = {
        '(': ")",
        '{': "}",
        '[': "]"
    }
    const stack = [];
    for (let i = 0; i < s.length; i++){
        let ele = s[i];
        if (ele in obj) {
            stack.push(ele)
        } else {
            if (ele !== obj[stack.pop()]) {
                return false
            }
        }
    }
    return !stack.length
};