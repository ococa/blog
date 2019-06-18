/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let numberArray = [];
    if (l1.next) {
        addTwoNumbers(l1.next, l2.next)
    } else {
        let number = l1 + l2;
        numberArray.push(number);
    }
    return numberArray.concat("")
};
