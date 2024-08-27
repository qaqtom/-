/**  
 * Definition for singly-linked list.  
 * function ListNode(val) {  
 *     this.val = val;  
 *     this.next = null;  
 * }  
 */

/**  
 * @param {ListNode} head  
 * @return {ListNode}  
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    // First step: detect if there is a cycle  
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        // If they meet, there is a cycle  
        if (fast === slow) {
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry; // The start of the cycle  
        }
    }
    return null; // No cycle  
};