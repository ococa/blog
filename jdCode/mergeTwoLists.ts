/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null || list2 === null) {
        return list1 === null ? list2 : list1;
    }

    let point1: ListNode|null = list1;
    let point2: ListNode|null = list2;

    let current;
    let returnVal;
    if(point1.val > point2.val) {
        returnVal = current = new ListNode(point2.val, null);
        point2 = point2.next;
    } else {
        returnVal = current = new ListNode(point1.val, null);
        point1 = point1.next;
    }

    while(point1 !== null  || point2 !== null) {
        if(!point1) {
            current = current.next = point2;
            point2 = null;
        } else if(!point2) {
            current = current.next = point1;
            point1 = null;
        } else {
            if(point1.val > point2.val) {
                current = current.next = new ListNode(point2.val, null);
                point2 = point2.next;
            } else {
                current = current.next = new ListNode(point1.val, null);
                point1 = point1.next;
            }
        }
    }

    return returnVal;
};