/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {
    let dummy = {
        next: head
    }
    let slow = dummy;
    let fast = dummy;
    while (n--) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};

let head = new ListNode(1);
removeNthFromEnd(head, 1)
console.log(head)