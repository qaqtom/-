/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const cache = new Set();
    while (head) {
        if (cache.has(head)) {
            return true
        } else {
            cache.add(head)
        }
        head = head.next
    }
    return false
};