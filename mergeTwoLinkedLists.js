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
          i       
    [1,2,4] 
    
           j
    [1,3,4]
    
    [1,1,2,3,4,4]
    
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(null); 
    let current1 = l1;
    let current2 = l2;
    let previous = result;
    while (current1 !==null && current2!==null) {;
        if (current1.val <= current2.val) { 
            previous.next = current1;
            current1 = current1.next;
        } else {
            previous.next = current2;
            current2 = current2.next;
        }
 
        previous = previous.next;
    }
    
    if (current1) {
        previous.next = current1;
    } else if (current2) {
        previous.next = current2;
    }

    return result.next;
};