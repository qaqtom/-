/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let paths = path.split('/');
    let stack = [];
    paths.forEach((val) => {
        if (val === '..') {
            stack.pop();
        } else if (val && val != '.') {
            stack.push(val);
        }
    })
    return "/" + stack.join('/');
};