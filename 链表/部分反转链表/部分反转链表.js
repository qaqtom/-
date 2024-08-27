/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0, head);
    let temp = dummy
    for (let i = 0; i < left - 1; i++) {
        temp = temp.next
    }
    let pre = temp.next
    let current = pre.next
    for (let i = 0; i < (right - left); i++) {
        let next = current.next
        current.next = pre
        pre = current
        current = next
    }
    temp.next.next = current
    temp.next = pre
    return dummy.next
};