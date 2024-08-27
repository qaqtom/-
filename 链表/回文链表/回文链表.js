/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    let pre = null;
    while (fast && fast.next) {
        fast = fast.next.next
        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }
    if (fast) {
        slow = slow.next
    }
    while (slow && pre) {
        if (slow.val != pre.val) return false
        slow = slow.next
        pre = pre.next
    }
    return true
};