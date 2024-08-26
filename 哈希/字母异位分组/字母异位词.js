/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let arr = Array.from(str);
        arr.sort();
        let key = arr.toString()
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    return [...map.values()]
};